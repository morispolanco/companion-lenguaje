
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Progress } from '../types';

interface ProgressContextType {
  progress: Progress;
  markLessonCompleted: (lessonId: string) => void;
  markQuizCompleted: (quizId: string, score: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<Progress>({
    completedLessons: new Set(),
    completedQuizzes: new Set(),
    quizScores: {},
  });

  const markLessonCompleted = (lessonId: string) => {
    setProgress(prev => {
      const newCompletedLessons = new Set(prev.completedLessons);
      newCompletedLessons.add(lessonId);
      return { ...prev, completedLessons: newCompletedLessons };
    });
  };

  const markQuizCompleted = (quizId: string, score: number) => {
    setProgress(prev => {
      const newCompletedQuizzes = new Set(prev.completedQuizzes);
      newCompletedQuizzes.add(quizId);
      const newQuizScores = { ...prev.quizScores, [quizId]: score };
      return { ...prev, completedQuizzes: newCompletedQuizzes, quizScores: newQuizScores };
    });
  };

  return (
    <ProgressContext.Provider value={{ progress, markLessonCompleted, markQuizCompleted }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};
