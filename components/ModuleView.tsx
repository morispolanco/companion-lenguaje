
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MODULES } from '../constants';
import { Lesson, Quiz } from '../types';
import { useProgress } from './ProgressProvider';
import LessonView from './LessonView';
import QuizView from './QuizView';
import { CheckCircleIcon, LightbulbIcon } from './icons';

const ModuleView: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const module = MODULES.find(m => m.id === moduleId);
  const [activeContent, setActiveContent] = useState<Lesson | Quiz | null>(null);
  const { progress } = useProgress();

  if (!module) {
    return <div className="text-center text-red-500">Módulo no encontrado.</div>;
  }
  
  const handleContentSelection = (content: Lesson | Quiz) => {
    setActiveContent(content);
  };
  
  const handleQuizCompletion = () => {
    setActiveContent(null);
  };

  if (activeContent) {
    if ('questions' in activeContent) {
      return <QuizView quiz={activeContent as Quiz} onComplete={handleQuizCompletion} />;
    }
    return (
      <div>
        <button onClick={() => setActiveContent(null)} className="mb-4 text-blue-600 hover:underline">
          &larr; Volver al módulo
        </button>
        <LessonView lesson={activeContent as Lesson} />
      </div>
    );
  }
  
  const totalItems = module.lessons.length + module.quizzes.length;
  const completedItems = [...progress.completedLessons, ...progress.completedQuizzes]
    .filter(id => id.startsWith(module.id))
    .length;
  const progressPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-800">{module.title}</h2>
      <p className="text-slate-600 mt-1 mb-6">{module.description}</p>
      
      <div className="mb-6">
        <div className="w-full bg-slate-200 rounded-full h-2.5">
          <div className={`${module.color} h-2.5 rounded-full`} style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <p className="text-right text-sm text-slate-500 mt-1">{completedItems} de {totalItems} completados</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4">Contenido del Módulo</h3>
        <div className="space-y-3">
          {module.lessons.map(lesson => (
            <button key={lesson.id} onClick={() => handleContentSelection(lesson)} className="w-full text-left flex items-center justify-between p-4 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <span className="font-medium">{lesson.title}</span>
              {progress.completedLessons.has(lesson.id) && <CheckCircleIcon className="h-5 w-5 text-green-500" />}
            </button>
          ))}
          {module.quizzes.map(quiz => (
            <button key={quiz.id} onClick={() => handleContentSelection(quiz)} className="w-full text-left flex items-center justify-between p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <span className="font-semibold text-blue-700 flex items-center">
                <LightbulbIcon className="h-5 w-5 mr-2"/>
                {quiz.title}
              </span>
              {progress.completedQuizzes.has(quiz.id) && <CheckCircleIcon className="h-5 w-5 text-green-500" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModuleView;
