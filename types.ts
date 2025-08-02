
export enum QuestionType {
  MultipleChoice = 'MultipleChoice',
  Written = 'Written',
  FillInTheBlank = 'FillInTheBlank',
}

export interface Question {
  id: string;
  type: QuestionType;
  questionText: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: Question[];
}

export interface Lesson {
  id: string;
  title: string;
  content: { type: 'paragraph' | 'list' | 'subtitle'; text: string | string[] }[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  color: string;
  lessons: Lesson[];
  quizzes: Quiz[];
}

export interface Progress {
  completedLessons: Set<string>;
  completedQuizzes: Set<string>;
  quizScores: { [quizId: string]: number };
}
