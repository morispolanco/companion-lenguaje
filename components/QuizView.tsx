import React, { useState } from 'react';
import { Quiz, Question, QuestionType } from '../types';
import { useProgress } from './ProgressProvider';
import { CheckCircleIcon, XIcon, LightbulbIcon } from './icons';

interface QuizViewProps {
  quiz: Quiz;
  onComplete: () => void;
}

const QuizView: React.FC<QuizViewProps> = ({ quiz, onComplete }) => {
  const readingTextQuestion = quiz.questions.find(q => q.id.endsWith('-0'));
  const actualQuestions = quiz.questions.filter(q => !q.id.endsWith('-0'));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>(Array(actualQuestions.length).fill(null));
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const { markQuizCompleted } = useProgress();
  const currentQuestion = actualQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answer: string) => {
    if (showFeedback) return;
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleCheckAnswer = () => {
    const userAnswer = userAnswers[currentQuestionIndex];
    if (userAnswer === null) return;
    setShowFeedback(true);
    if (userAnswer.toLowerCase().trim() === currentQuestion.correctAnswer.toString().toLowerCase().trim()) {
      setScore(s => s + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    if (currentQuestionIndex < actualQuestions.length - 1) {
      setCurrentQuestionIndex(i => i + 1);
    } else {
      const finalScore = (score / actualQuestions.length) * 100;
      markQuizCompleted(quiz.id, finalScore);
      setIsFinished(true);
    }
  };

  if (isFinished) {
    const finalScore = (score / actualQuestions.length) * 100;
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h3 className="text-2xl font-bold text-slate-800">¡Quiz Completado!</h3>
        <p className="text-lg text-slate-600 mt-2">Tu puntuación final es:</p>
        <p className={`text-5xl font-bold mt-4 ${finalScore >= 70 ? 'text-green-500' : 'text-red-500'}`}>
          {Math.round(finalScore)}%
        </p>
        <p className="mt-4 text-slate-500">{score} de {actualQuestions.length} respuestas correctas.</p>
        <button onClick={onComplete} className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Volver al módulo
        </button>
      </div>
    );
  }

  const renderQuestion = (question: Question) => {
    const userAnswer = userAnswers[currentQuestionIndex];
    
    switch (question.type) {
      case QuestionType.MultipleChoice:
        return (
          <div className="space-y-3">
            {question.options?.map((option, index) => {
              const isSelected = userAnswer === option;
              const isCorrect = question.correctAnswer === option;
              let buttonClass = 'bg-white hover:bg-slate-100 border-slate-300';
              if (showFeedback) {
                if (isCorrect) {
                  buttonClass = 'bg-green-100 border-green-400';
                } else if (isSelected && !isCorrect) {
                  buttonClass = 'bg-red-100 border-red-400';
                }
              } else if (isSelected) {
                buttonClass = 'bg-blue-100 border-blue-400';
              }
              
              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  disabled={showFeedback}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-colors flex justify-between items-center ${buttonClass}`}
                >
                  <span>{option}</span>
                  {showFeedback && isCorrect && <CheckCircleIcon className="h-6 w-6 text-green-500" />}
                  {showFeedback && isSelected && !isCorrect && <XIcon className="h-6 w-6 text-red-500" />}
                </button>
              );
            })}
          </div>
        );
      case QuestionType.Written:
        return (
          <textarea
            value={userAnswer ?? ''}
            onChange={(e) => handleAnswerSelect(e.target.value)}
            disabled={showFeedback}
            placeholder="Escribe tu respuesta aquí..."
            className="w-full p-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            rows={3}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
      {readingTextQuestion && (
        <div className="mb-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
          <h4 className="font-semibold text-slate-700 mb-2">Lee el siguiente texto:</h4>
          <p className="text-slate-600 whitespace-pre-wrap">{readingTextQuestion.questionText.split('\n\n')[1]}</p>
        </div>
      )}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-blue-700">{quiz.title}</h2>
        <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          {currentQuestionIndex + 1} / {actualQuestions.length}
        </span>
      </div>

      <p className="text-lg text-slate-700 mb-6">{currentQuestion.questionText}</p>
      
      {renderQuestion(currentQuestion)}
      
      {showFeedback && (
        <div className={`mt-4 p-4 rounded-lg flex items-start ${userAnswers[currentQuestionIndex]?.toLowerCase().trim() === currentQuestion.correctAnswer.toString().toLowerCase().trim() ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          <LightbulbIcon className="h-5 w-5 mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-semibold">Explicación:</h4>
            <p>{currentQuestion.explanation}</p>
            {currentQuestion.type === QuestionType.Written && userAnswers[currentQuestionIndex]?.toLowerCase().trim() !== currentQuestion.correctAnswer.toString().toLowerCase().trim() && (
                 <p className="mt-2"><strong>Respuesta Correcta:</strong> {currentQuestion.correctAnswer}</p>
            )}
          </div>
        </div>
      )}
      
      <div className="mt-6 flex justify-end">
        {!showFeedback ? (
          <button 
            onClick={handleCheckAnswer} 
            disabled={userAnswers[currentQuestionIndex] === null}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors"
          >
            Verificar
          </button>
        ) : (
          <button onClick={handleNextQuestion} className="px-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
            {currentQuestionIndex < actualQuestions.length - 1 ? 'Siguiente' : 'Finalizar'}
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizView;
