'use client';

import { useState } from 'react';
import PendulumSimulation from '@/components/PendulumSimulation';
import Equations from '@/components/Equations';
import Misconceptions from '@/components/Misconceptions';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'simulation' | 'equations' | 'misconceptions'>('simulation');

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Conservation of Energy
          </h1>
          <p className="text-lg text-gray-600">
            HKDSE Physics - Interactive Simple Pendulum Demonstration
          </p>
        </header>

        {/* Tabs */}
        <div className="bg-white rounded-t-xl shadow-lg">
          <div className="flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab('simulation')}
              className={`flex-1 px-6 py-4 text-lg font-medium transition-colors ${
                activeTab === 'simulation'
                  ? 'bg-blue-500 text-white border-b-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              🎯 Simulation
            </button>
            <button
              onClick={() => setActiveTab('equations')}
              className={`flex-1 px-6 py-4 text-lg font-medium transition-colors ${
                activeTab === 'equations'
                  ? 'bg-blue-500 text-white border-b-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              📐 Equations
            </button>
            <button
              onClick={() => setActiveTab('misconceptions')}
              className={`flex-1 px-6 py-4 text-lg font-medium transition-colors ${
                activeTab === 'misconceptions'
                  ? 'bg-blue-500 text-white border-b-2 border-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              💡 Misconceptions
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6 bg-white rounded-b-xl">
            {activeTab === 'simulation' && <PendulumSimulation />}
            {activeTab === 'equations' && <Equations />}
            {activeTab === 'misconceptions' && <Misconceptions />}
          </div>
        </div>

        <footer className="mt-8 text-center text-gray-600 text-sm">
          <p>© 2026 Physics Education Project | Made for HKDSE Students</p>
        </footer>
      </div>
    </main>
  );
}
