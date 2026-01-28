'use client';

import React from 'react';

export default function Equations() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border-l-4 border-blue-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Conservation of Energy Principle</h2>
        <p className="text-gray-700 text-lg mb-4">
          In an isolated system, the total energy remains constant. Energy can transform from one form to another, 
          but the total amount stays the same.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <p className="text-center text-xl font-mono">
            E<sub>total</sub> = KE + PE = constant
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Kinetic Energy */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
          <h3 className="text-xl font-bold text-blue-600 mb-3">Kinetic Energy (KE)</h3>
          <p className="text-gray-700 mb-4">
            Energy of motion. The faster an object moves, the more kinetic energy it has.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg mb-4">
            <p className="text-center text-lg font-mono mb-2">
              KE = ½mv²
            </p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>m = mass (kg)</p>
              <p>v = velocity (m/s)</p>
            </div>
          </div>
          <div className="bg-blue-100 p-3 rounded">
            <p className="text-sm font-semibold text-blue-800">In a Pendulum:</p>
            <p className="text-sm text-gray-700 mt-1">
              KE is maximum at the <strong>lowest point</strong> where velocity is greatest.
              KE is zero at the <strong>highest points</strong> where velocity is zero.
            </p>
          </div>
        </div>

        {/* Potential Energy */}
        <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
          <h3 className="text-xl font-bold text-green-600 mb-3">Potential Energy (PE)</h3>
          <p className="text-gray-700 mb-4">
            Energy due to position. The higher an object is, the more gravitational potential energy it has.
          </p>
          <div className="bg-green-50 p-4 rounded-lg mb-4">
            <p className="text-center text-lg font-mono mb-2">
              PE = mgh
            </p>
            <div className="text-sm text-gray-600 space-y-1">
              <p>m = mass (kg)</p>
              <p>g = gravitational acceleration (9.81 m/s²)</p>
              <p>h = height above reference point (m)</p>
            </div>
          </div>
          <div className="bg-green-100 p-3 rounded">
            <p className="text-sm font-semibold text-green-800">In a Pendulum:</p>
            <p className="text-sm text-gray-700 mt-1">
              PE is maximum at the <strong>highest points</strong> (turning points).
              PE is minimum (reference = 0) at the <strong>lowest point</strong>.
            </p>
          </div>
        </div>
      </div>

      {/* Energy Transformation */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold text-purple-600 mb-4">Energy Transformation in a Pendulum</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
              1
            </div>
            <div>
              <p className="font-semibold text-gray-800">At Maximum Height (Turning Point)</p>
              <p className="text-gray-600">PE is maximum, KE = 0 (velocity = 0)</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
              2
            </div>
            <div>
              <p className="font-semibold text-gray-800">Swinging Down</p>
              <p className="text-gray-600">PE decreases as height decreases, KE increases as velocity increases</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
              3
            </div>
            <div>
              <p className="font-semibold text-gray-800">At Lowest Point</p>
              <p className="text-gray-600">KE is maximum, PE = 0 (at reference level), velocity is maximum</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
              4
            </div>
            <div>
              <p className="font-semibold text-gray-800">Swinging Up</p>
              <p className="text-gray-600">KE decreases, PE increases (opposite side)</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
              5
            </div>
            <div>
              <p className="font-semibold text-gray-800">Cycle Repeats</p>
              <p className="text-gray-600">The process continues with energy constantly transforming between KE and PE</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Formula */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-3">⚡ Key Equation for HKDSE</h3>
        <div className="bg-white/20 backdrop-blur p-4 rounded-lg">
          <p className="text-center text-2xl font-mono mb-4">
            KE<sub>initial</sub> + PE<sub>initial</sub> = KE<sub>final</sub> + PE<sub>final</sub>
          </p>
          <p className="text-center text-lg">
            ½mv₁² + mgh₁ = ½mv₂² + mgh₂
          </p>
        </div>
        <p className="mt-4 text-center">
          This equation allows you to calculate unknown velocities or heights in pendulum problems!
        </p>
      </div>

      {/* Example Problem */}
      <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-orange-500">
        <h3 className="text-xl font-bold text-orange-600 mb-4">📝 Example Problem</h3>
        <div className="space-y-3 text-gray-700">
          <p className="font-semibold">
            A 0.5 kg pendulum bob is released from a height of 0.4 m. What is its velocity at the lowest point?
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p><strong>Given:</strong></p>
            <p>• Mass (m) = 0.5 kg</p>
            <p>• Initial height (h₁) = 0.4 m</p>
            <p>• Final height (h₂) = 0 m (reference point)</p>
            <p>• Initial velocity (v₁) = 0 m/s (released from rest)</p>
            <p>• g = 9.81 m/s²</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p><strong>Solution:</strong></p>
            <p>Using conservation of energy:</p>
            <p className="font-mono">KE₁ + PE₁ = KE₂ + PE₂</p>
            <p className="font-mono">½(0.5)(0)² + (0.5)(9.81)(0.4) = ½(0.5)v₂² + (0.5)(9.81)(0)</p>
            <p className="font-mono">0 + 1.962 = 0.25v₂² + 0</p>
            <p className="font-mono">v₂² = 1.962 / 0.25 = 7.848</p>
            <p className="font-mono text-green-600 font-bold">v₂ = 2.80 m/s</p>
          </div>

          <div className="bg-blue-50 p-3 rounded">
            <p className="text-sm">
              <strong>💡 Note:</strong> Notice that the mass cancels out! The velocity at the bottom depends 
              only on the height, not the mass of the bob.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
