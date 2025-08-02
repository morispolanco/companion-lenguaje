
import React, { useEffect } from 'react';
import { Lesson } from '../types';
import { useProgress } from './ProgressProvider';

interface LessonViewProps {
  lesson: Lesson;
}

const LessonView: React.FC<LessonViewProps> = ({ lesson }) => {
  const { markLessonCompleted } = useProgress();

  useEffect(() => {
    markLessonCompleted(lesson.id);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson.id]);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
      <h3 className="text-2xl font-bold text-slate-800 mb-6">{lesson.title}</h3>
      <div className="prose prose-slate max-w-none">
        {lesson.content.map((item, index) => {
          switch (item.type) {
            case 'paragraph':
              return <p key={index}>{item.text}</p>;
            case 'subtitle':
              return <h4 key={index} className="font-semibold text-lg mt-6 mb-2">{item.text}</h4>;
            case 'list':
              if (Array.isArray(item.text)) {
                return (
                  <ul key={index} className="list-disc pl-5 space-y-1">
                    {item.text.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
};

export default LessonView;
