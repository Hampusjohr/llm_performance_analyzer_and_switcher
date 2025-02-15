import React from 'react';
import { Cpu } from 'lucide-react';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-purple-50">
      <nav className="bg-purple-900 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Cpu className="h-8 w-8 text-amber-400" />
                <span className="ml-2 text-xl font-bold text-white">LLM Analyzer</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <main className="py-10">
        <Dashboard />
      </main>
    </div>
  );
}

export default App;