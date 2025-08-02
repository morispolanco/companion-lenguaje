
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './components/ProgressProvider';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import ModuleView from './components/ModuleView';
import AIAssistant from './components/AIAssistant';

function App() {
  return (
    <ProgressProvider>
      <HashRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/module/:moduleId" element={<ModuleView />} />
          </Routes>
          <AIAssistant />
        </Layout>
      </HashRouter>
    </ProgressProvider>
  );
}

export default App;
