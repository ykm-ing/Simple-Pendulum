'use client';

export default function Misconceptions() {
  return (
    <div className="space-y-6 max-w-4xl">
      <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Common Misconceptions</h2>
        <p className="text-gray-700 text-lg">
          Understanding these common errors will help you master conservation of energy concepts and avoid mistakes in HKDSE!
        </p>
      </div>

      {/* Misconception 1 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-red-500 text-white p-4">
          <h3 className="text-xl font-bold">❌ Misconception #1</h3>
          <p className="text-lg mt-1">"Energy is created when the pendulum swings"</p>
        </div>
        <div className="p-6 space-y-3">
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="font-semibold text-red-800 mb-2">Why this is wrong:</p>
            <p className="text-gray-700">
              Energy cannot be created or destroyed (Law of Conservation of Energy). The pendulum already has 
              energy when it's lifted to a height. This energy transforms between kinetic and potential forms.
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="font-semibold text-green-800 mb-2">✅ Correct Understanding:</p>
            <p className="text-gray-700">
              When you lift the bob, you do work on it, transferring energy to the system. This energy is then 
              conserved as it continuously transforms between KE and PE during oscillation.
            </p>
          </div>
        </div>
      </div>

      {/* Misconception 2 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-red-500 text-white p-4">
          <h3 className="text-xl font-bold">❌ Misconception #2</h3>
          <p className="text-lg mt-1">"At the middle position, KE and PE are equal"</p>
        </div>
        <div className="p-6 space-y-3">
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="font-semibold text-red-800 mb-2">Why this is wrong:</p>
            <p className="text-gray-700">
              The "middle position" horizontally is NOT the same as the lowest point. At the lowest point of the swing, 
              KE is maximum and PE is minimum (zero at reference level), not equal!
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="font-semibold text-green-800 mb-2">✅ Correct Understanding:</p>
            <p className="text-gray-700">
              • At the <strong>lowest point</strong>: KE is max, PE = 0<br />
              • At the <strong>highest points</strong>: PE is max, KE = 0<br />
              • At <strong>intermediate positions</strong>: Both KE and PE have non-zero values, but they're not necessarily equal
            </p>
          </div>
        </div>
      </div>

      {/* Misconception 3 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-red-500 text-white p-4">
          <h3 className="text-xl font-bold">❌ Misconception #3</h3>
          <p className="text-lg mt-1">"A heavier bob swings faster"</p>
        </div>
        <div className="p-6 space-y-3">
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="font-semibold text-red-800 mb-2">Why this is wrong:</p>
            <p className="text-gray-700">
              Students often think heavier objects fall faster or swing faster, but this is not true for pendulums!
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="font-semibold text-green-800 mb-2">✅ Correct Understanding:</p>
            <p className="text-gray-700 mb-2">
              The period of a pendulum does NOT depend on mass! From conservation of energy:
            </p>
            <p className="font-mono text-center bg-white p-2 rounded">
              mgh = ½mv² → v = √(2gh)
            </p>
            <p className="text-gray-700 mt-2">
              Notice that mass (m) cancels out! The velocity (and hence period) depends only on length and gravity.
            </p>
          </div>
        </div>
      </div>

      {/* Misconception 4 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-red-500 text-white p-4">
          <h3 className="text-xl font-bold">❌ Misconception #4</h3>
          <p className="text-lg mt-1">"The pendulum will swing forever"</p>
        </div>
        <div className="p-6 space-y-3">
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="font-semibold text-red-800 mb-2">Why this is wrong in reality:</p>
            <p className="text-gray-700">
              In real life, pendulums gradually slow down and stop. Energy is "lost" to the surroundings.
            </p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-semibold text-yellow-800 mb-2">⚠️ Important Distinction:</p>
            <p className="text-gray-700">
              • <strong>Ideal pendulum (HKDSE problems):</strong> No air resistance or friction → Energy IS conserved → Swings forever<br />
              • <strong>Real pendulum:</strong> Air resistance and friction exist → Energy transforms to heat and sound → Eventually stops
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="font-semibold text-green-800 mb-2">✅ Correct Understanding:</p>
            <p className="text-gray-700">
              For HKDSE calculations, we assume an <strong>ideal system with no energy loss</strong>. 
              In reality, energy is still conserved, but it transforms into other forms (heat, sound) 
              that are not useful mechanical energy.
            </p>
          </div>
        </div>
      </div>

      {/* Misconception 5 */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-red-500 text-white p-4">
          <h3 className="text-xl font-bold">❌ Misconception #5</h3>
          <p className="text-lg mt-1">"PE is always calculated from ground level"</p>
        </div>
        <div className="p-6 space-y-3">
          <div className="bg-red-50 p-4 rounded-lg">
            <p className="font-semibold text-red-800 mb-2">Why this is confusing:</p>
            <p className="text-gray-700">
              Students often wonder: "Where should I measure height from? The ground? The table? The lowest point?"
            </p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="font-semibold text-green-800 mb-2">✅ Correct Understanding:</p>
            <p className="text-gray-700 mb-3">
              You can choose ANY reference level! What matters is the <strong>change in height</strong>, not the absolute height.
            </p>
            <div className="bg-white p-3 rounded border-2 border-green-300">
              <p className="text-sm font-semibold mb-2">Pro Tip for Pendulum Problems:</p>
              <p className="text-sm text-gray-700">
                Choose the <strong>lowest point of the swing</strong> as your reference (PE = 0). 
                This makes calculations much simpler because you only need to calculate the vertical 
                height difference from this point!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Study Tips */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-4">📚 Study Tips for HKDSE Success</h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <p>Always write down the conservation of energy equation at the start of pendulum problems</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <p>Clearly define your reference level for potential energy</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <p>Remember: At highest point, v = 0 (so KE = 0); At lowest point, h = 0 (so PE = 0)</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <p>Check if your answer makes physical sense (e.g., velocity should be positive, energy should be conserved)</p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">✓</span>
            <p>Practice identifying when to use conservation of energy vs. when energy is not conserved (friction, collisions)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
