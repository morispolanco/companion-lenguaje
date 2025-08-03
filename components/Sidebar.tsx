
import React from 'react';
import { MODULES } from '../constants';
import type { Module } from '../types';

interface SidebarProps {
  selectedModuleId: string;
  onSelectModule: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedModuleId, onSelectModule }) => {
  return (
    <aside className="w-64 bg-white flex-shrink-0 p-4 flex flex-col space-y-4 border-r border-slate-200">
      <div className="flex items-center space-x-2 px-2 pb-4 border-b border-slate-200">
        <span className="text-2xl">🎓</span>
        <h1 className="text-xl font-bold text-slate-800">Maestro del Lenguaje</h1>
      </div>
      <nav className="flex-grow">
        <ul className="space-y-1">
          {MODULES.map((module) => (
            <li key={module.id}>
              <button
                onClick={() => onSelectModule(module.id)}
                className={`w-full flex items-center space-x-3 p-2 rounded-md text-left transition-colors ${
                  selectedModuleId === module.id
                    ? 'bg-indigo-100 text-indigo-700 font-semibold'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <module.icon className="h-5 w-5 flex-shrink-0" />
                <span>{module.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="text-center text-xs text-slate-400 pt-4 border-t border-slate-200">
        <p>&copy; 2024 Lenguaje Maestro</p>
      </div>
    </aside>
  );
};

export default Sidebar;
