
import React from 'react';
import { Link } from 'react-router-dom';
import { MODULES } from '../constants';
import { useProgress } from './ProgressProvider';
import { BookOpenIcon } from './icons';

const ModuleCard: React.FC<{ module: typeof MODULES[0] }> = ({ module }) => {
  const { progress } = useProgress();
  const totalItems = module.lessons.length + module.quizzes.length;
  const completedItems = [...progress.completedLessons, ...progress.completedQuizzes]
    .filter(id => id.startsWith(module.id))
    .length;

  const progressPercentage = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  return (
    <Link to={`/module/${module.id}`} className="block bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow transform hover:-translate-y-1">
      <div className={`w-12 h-12 rounded-lg ${module.color} flex items-center justify-center`}>
        <BookOpenIcon className="h-6 w-6 text-white" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">{module.title}</h3>
      <p className="mt-1 text-sm text-slate-600">{module.description}</p>
      <div className="mt-4">
        <div className="flex justify-between text-sm text-slate-500 mb-1">
          <span>Progreso</span>
          <span>{Math.round(progressPercentage)}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div className={`${module.color} h-2 rounded-full`} style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
    </Link>
  );
};

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-slate-800 mb-2">Bienvenido</h2>
      <p className="text-slate-600 mb-8">Selecciona un módulo para comenzar tu aprendizaje.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MODULES.map(module => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
