
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import { MODULES } from './constants';

const App: React.FC = () => {
  const [selectedModuleId, setSelectedModuleId] = useState<string>('intro');

  const selectedModule = MODULES.find(m => m.id === selectedModuleId);

  return (
    <div className="flex h-screen bg-slate-50 text-slate-800">
      <Sidebar selectedModuleId={selectedModuleId} onSelectModule={setSelectedModuleId} />
      <Dashboard module={selectedModule} />
    </div>
  );
};

export default App;
