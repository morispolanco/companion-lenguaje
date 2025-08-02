
import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { MODULES } from '../constants';
import { useProgress } from './ProgressProvider';
import { BookOpenIcon, CheckCircleIcon, MenuIcon, XIcon } from './icons';

interface LayoutProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<{ isOpen: boolean; closeSidebar: () => void }> = ({ isOpen, closeSidebar }) => {
  const { progress } = useProgress();

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 transition-opacity md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeSidebar}
      ></div>
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-slate-200 z-40 transform transition-transform md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-between items-center border-b border-slate-200">
          <h1 className="text-xl font-bold text-blue-600">Dominio del Lenguaje</h1>
          <button onClick={closeSidebar} className="md:hidden text-slate-500">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="p-4">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => `flex items-center p-2 rounded-md transition-colors ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`} onClick={closeSidebar}>
                Dashboard
              </NavLink>
            </li>
            <li className="mt-4">
              <span className="text-xs font-semibold text-slate-400 uppercase px-2">Módulos</span>
              <ul className="mt-2 space-y-1">
                {MODULES.map(module => {
                  const completedItems = [...progress.completedLessons, ...progress.completedQuizzes].filter(id => id.startsWith(module.id)).length;
                  const totalItems = module.lessons.length + module.quizzes.length;
                  const isModuleComplete = totalItems > 0 && completedItems === totalItems;
                  return (
                    <li key={module.id}>
                      <NavLink to={`/module/${module.id}`} className={({ isActive }) => `flex items-center justify-between p-2 rounded-md transition-colors ${isActive ? 'bg-blue-100 text-blue-600' : 'hover:bg-slate-100'}`} onClick={closeSidebar}>
                        <span className="flex items-center">
                          <BookOpenIcon className="h-5 w-5 mr-3" />
                          {module.title}
                        </span>
                        {isModuleComplete && <CheckCircleIcon className="h-5 w-5 text-green-500" />}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setSidebarOpen(false);
  }, [location]);

  return (
    <div className="flex h-screen bg-slate-50">
      <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col md:ml-64">
        <header className="p-4 bg-white border-b border-slate-200 flex items-center md:hidden">
          <button onClick={() => setSidebarOpen(true)} className="text-slate-500">
            <MenuIcon className="h-6 w-6" />
          </button>
          <h1 className="text-lg font-semibold ml-4 text-blue-600">Dominio del Lenguaje</h1>
        </header>
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
