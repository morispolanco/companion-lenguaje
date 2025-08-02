
import React, { useState } from 'react';
import { getAIAssistance } from '../services/geminiService';
import { SparklesIcon, XIcon } from './icons';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    setIsLoading(true);
    setError('');
    setResponse('');
    try {
      const result = await getAIAssistance(prompt);
      setResponse(result);
    } catch (err) {
      setError('Hubo un problema al contactar al asistente. Inténtalo de nuevo.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    // Reset state after a short delay for the animation
    setTimeout(() => {
        setPrompt('');
        setResponse('');
        setError('');
        setIsLoading(false);
    }, 300);
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-transform hover:scale-110"
        aria-label="Abrir Asistente de IA"
      >
        <SparklesIcon className="h-6 w-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 transition-opacity duration-300 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg transform transition-transform duration-300 animate-slide-up">
            <div className="flex justify-between items-center p-4 border-b border-slate-200">
              <h3 className="text-lg font-semibold flex items-center text-slate-800">
                <SparklesIcon className="h-5 w-5 mr-2 text-blue-500" />
                Asistente de IA
              </h3>
              <button onClick={closeModal} className="text-slate-400 hover:text-slate-600">
                <XIcon className="h-6 w-6" />
              </button>
            </div>
            <div className="p-6">
              <p className="text-sm text-slate-600 mb-4">
                ¿Tienes alguna duda sobre un concepto o necesitas que revise una oración? Escríbela aquí.
              </p>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ej: ¿Cuál es la diferencia entre 'porque' y 'por qué'?"
                className="w-full p-3 border-2 border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition mb-4"
                rows={4}
                disabled={isLoading}
              />
              <button
                onClick={handleAsk}
                disabled={isLoading || !prompt.trim()}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Pensando...
                  </>
                ) : 'Preguntar al Tutor'}
              </button>

              {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

              {response && (
                <div className="mt-6 p-4 bg-slate-50 border border-slate-200 rounded-lg">
                    <h4 className="font-semibold text-slate-700 mb-2">Respuesta del Tutor:</h4>
                    <p className="text-slate-600 whitespace-pre-wrap">{response}</p>
                </div>
              )}
            </div>
          </div>
          <style>{`
            @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slide-up {
                from { transform: translateY(20px); opacity: 0; }
                to { transform: translateY(0); opacity: 1; }
            }
            .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
            .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
          `}</style>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
