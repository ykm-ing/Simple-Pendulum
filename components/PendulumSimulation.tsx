'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';

interface Snapshot {
  time: number;
  ke: number;
  pe: number;
  angle: number;
}

export default function PendulumSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [length, setLength] = useState(200); // pixels
  const [isPaused, setIsPaused] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [snapshots, setSnapshots] = useState<Snapshot[]>([]);
  const [currentEnergy, setCurrentEnergy] = useState({ ke: 0, pe: 0, totalEnergy: 0 });
  
  // Physics state
  const angleRef = useRef(Math.PI / 4); // Initial angle (45 degrees)
  const angularVelocityRef = useRef(0);
  const timeRef = useRef(0);
  const animationRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);

  const g = 9.81; // m/s²
  const pixelsPerMeter = 100; // Scale factor
  const mass = 1; // kg (for calculation purposes)

  // Canvas dimensions
  const canvasWidth = 800;
  const canvasHeight = 600;
  const pivotX = canvasWidth / 2;
  const pivotY = 100;

  // Calculate energy values
  const calculateEnergy = useCallback((angle: number, angularVelocity: number) => {
    const lengthInMeters = length / pixelsPerMeter;
    const height = lengthInMeters * (1 - Math.cos(angle));
    const velocity = angularVelocity * lengthInMeters;
    
    const pe = mass * g * height;
    const ke = 0.5 * mass * velocity * velocity;
    const totalEnergy = pe + ke;
    
    return { pe, ke, totalEnergy };
  }, [length, g, mass, pixelsPerMeter]);

  // Draw the pendulum
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    const angle = angleRef.current;
    const bobX = pivotX + length * Math.sin(angle);
    const bobY = pivotY + length * Math.cos(angle);

    // Draw reference line (vertical)
    ctx.strokeStyle = '#e0e0e0';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(pivotX, pivotY);
    ctx.lineTo(pivotX, pivotY + length);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw string
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(pivotX, pivotY);
    ctx.lineTo(bobX, bobY);
    ctx.stroke();

    // Draw pivot
    ctx.fillStyle = '#555';
    ctx.beginPath();
    ctx.arc(pivotX, pivotY, 8, 0, Math.PI * 2);
    ctx.fill();

    // Draw bob
    ctx.fillStyle = '#ff6b6b';
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(bobX, bobY, 20, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Draw energy arc (showing potential energy height)
    const maxHeight = pivotY + length;
    const currentHeight = bobY;
    ctx.strokeStyle = 'rgba(75, 192, 192, 0.5)';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(bobX, currentHeight);
    ctx.lineTo(bobX, maxHeight);
    ctx.stroke();

  }, [length, canvasWidth, canvasHeight, pivotX, pivotY]);

  // Physics simulation
  const simulate = useCallback((deltaTime: number) => {
    if (isPaused || isDragging) return;

    const angle = angleRef.current;
    const angularVelocity = angularVelocityRef.current;
    const lengthInMeters = length / pixelsPerMeter;

    // Simple pendulum equation: d²θ/dt² = -(g/L) * sin(θ)
    const angularAcceleration = -(g / lengthInMeters) * Math.sin(angle);

    // Update velocity and angle (Euler integration)
    const dt = deltaTime / 1000; // Convert to seconds
    angularVelocityRef.current += angularAcceleration * dt;
    angleRef.current += angularVelocityRef.current * dt;

    timeRef.current += deltaTime;
  }, [isPaused, isDragging, length, g, pixelsPerMeter]);

  // Animation loop
  const animate = useCallback((currentTime: number) => {
    if (!lastTimeRef.current) {
      lastTimeRef.current = currentTime;
    }

    const deltaTime = currentTime - lastTimeRef.current;
    lastTimeRef.current = currentTime;

    simulate(deltaTime);
    draw();

    // Update energy state for UI
    const energy = calculateEnergy(angleRef.current, angularVelocityRef.current);
    setCurrentEnergy(energy);

    animationRef.current = requestAnimationFrame(animate);
  }, [simulate, draw]);

  // Handle mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const bobX = pivotX + length * Math.sin(angleRef.current);
    const bobY = pivotY + length * Math.cos(angleRef.current);

    const distance = Math.sqrt((mouseX - bobX) ** 2 + (mouseY - bobY) ** 2);

    if (distance < 30) {
      setIsDragging(true);
      setIsPaused(true);
      angularVelocityRef.current = 0;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate angle from pivot to mouse
    const dx = mouseX - pivotX;
    const dy = mouseY - pivotY;
    const angle = Math.atan2(dx, dy);

    angleRef.current = angle;
    draw();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Take snapshot
  const takeSnapshot = () => {
    const { pe, ke } = calculateEnergy(angleRef.current, angularVelocityRef.current);
    const newSnapshot: Snapshot = {
      time: timeRef.current / 1000,
      ke,
      pe,
      angle: angleRef.current * (180 / Math.PI),
    };
    setSnapshots([...snapshots, newSnapshot]);
  };

  // Clear snapshots
  const clearSnapshots = () => {
    setSnapshots([]);
  };

  // Reset simulation
  const reset = () => {
    angleRef.current = Math.PI / 4;
    angularVelocityRef.current = 0;
    timeRef.current = 0;
    setIsPaused(true);
    setSnapshots([]);
    draw();
  };

  // Start animation loop
  useEffect(() => {
    draw();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, draw, calculateEnergy]);

  const { pe, ke, totalEnergy } = currentEnergy;

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="bg-gray-50 p-6 rounded-lg space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="flex-1 w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Pendulum Length: {(length / pixelsPerMeter).toFixed(2)} m
            </label>
            <input
              type="range"
              min="100"
              max="300"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              disabled={isDragging}
              className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 disabled:bg-gray-300 transition-colors"
            >
              {isPaused ? '▶️ Play' : '⏸️ Pause'}
            </button>
            <button
              onClick={reset}
              className="px-6 py-3 bg-gray-500 text-white font-medium rounded-lg hover:bg-gray-600 transition-colors"
            >
              🔄 Reset
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-600 italic">
          💡 Tip: Drag the bob to any position to set the initial height, then click Play!
        </p>
      </div>

      {/* Canvas */}
      <div className="bg-white rounded-lg shadow-inner p-4">
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="border border-gray-200 rounded cursor-grab active:cursor-grabbing mx-auto block"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>

      {/* Energy Display */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Kinetic Energy</h3>
          <p className="text-3xl font-bold">{ke.toFixed(2)} J</p>
          <div className="mt-3 h-2 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${(ke / (totalEnergy || 1)) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Potential Energy</h3>
          <p className="text-3xl font-bold">{pe.toFixed(2)} J</p>
          <div className="mt-3 h-2 bg-white/30 rounded-full overflow-hidden">
            <div
              className="h-full bg-white transition-all duration-300"
              style={{ width: `${(pe / (totalEnergy || 1)) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
          <h3 className="text-lg font-semibold mb-2">Total Energy</h3>
          <p className="text-3xl font-bold">{totalEnergy.toFixed(2)} J</p>
          <p className="text-sm mt-2 opacity-90">KE + PE (conserved)</p>
        </div>
      </div>

      {/* Snapshot Controls */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">Energy Snapshots</h3>
          <div className="flex gap-2">
            <button
              onClick={takeSnapshot}
              className="px-4 py-2 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors"
            >
              📸 Take Snapshot
            </button>
            <button
              onClick={clearSnapshots}
              disabled={snapshots.length === 0}
              className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600 disabled:bg-gray-300 transition-colors"
            >
              🗑️ Clear All
            </button>
          </div>
        </div>

        {snapshots.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            No snapshots yet. Click "Take Snapshot" to capture energy values at different stages!
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="px-4 py-2 text-left">#</th>
                  <th className="px-4 py-2 text-left">Time (s)</th>
                  <th className="px-4 py-2 text-left">Angle (°)</th>
                  <th className="px-4 py-2 text-left">KE (J)</th>
                  <th className="px-4 py-2 text-left">PE (J)</th>
                  <th className="px-4 py-2 text-left">Total (J)</th>
                </tr>
              </thead>
              <tbody>
                {snapshots.map((snapshot, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{snapshot.time.toFixed(2)}</td>
                    <td className="px-4 py-3">{snapshot.angle.toFixed(1)}°</td>
                    <td className="px-4 py-3 text-blue-600 font-medium">{snapshot.ke.toFixed(2)}</td>
                    <td className="px-4 py-3 text-green-600 font-medium">{snapshot.pe.toFixed(2)}</td>
                    <td className="px-4 py-3 text-purple-600 font-bold">
                      {(snapshot.ke + snapshot.pe).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
