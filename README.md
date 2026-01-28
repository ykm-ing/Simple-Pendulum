# Conservation of Energy - Simple Pendulum

An interactive web application for teaching HKDSE Physics concepts, specifically the **Conservation of Energy** principle using a simple pendulum simulation.

## 🎯 Features

### Interactive Simulation
- **Real-time physics simulation** with accurate pendulum motion
- **Adjustable pendulum length** (1-3 meters)
- **Drag-and-drop interface** - Set initial height by dragging the bob
- **Pause/Play controls** - Stop and analyze at any moment
- **Visual energy display** - Real-time KE, PE, and total energy values with progress bars

### Energy Snapshots
- **Capture energy values** at different stages of motion
- **Comparative table** showing KE, PE, and total energy at multiple time points
- Demonstrates that **total energy remains constant** throughout the motion

### Educational Content
- **📐 Equations Tab** - Complete formulas for KE, PE, and conservation of energy
  - Step-by-step energy transformation explanation
  - Worked example problems for HKDSE preparation
- **💡 Misconceptions Tab** - Common errors students make
  - Detailed explanations of why misconceptions are wrong
  - Correct understanding with examples
  - Study tips for HKDSE success

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/conservation-of-energy.git
cd conservation-of-energy
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Graphics:** HTML5 Canvas API
- **Deployment:** Vercel (recommended)

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub

2. Visit [Vercel](https://vercel.com) and sign in with GitHub

3. Click "New Project" and import your repository

4. Vercel will automatically detect Next.js and configure the build settings

5. Click "Deploy" and your app will be live!

### Alternative: Manual Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start
```

## 📖 How to Use

### For Students

1. **Simulation Tab:**
   - Adjust the pendulum length using the slider
   - Drag the red bob to any height
   - Click "Play" to start the simulation
   - Watch how energy transforms between KE and PE
   - Click "Take Snapshot" to record energy values at different times
   - Observe that total energy remains constant!

2. **Equations Tab:**
   - Review the fundamental equations
   - Understand when KE and PE are maximum
   - Study the worked example problem

3. **Misconceptions Tab:**
   - Learn about common mistakes
   - Understand the correct physics concepts
   - Read study tips for HKDSE preparation

### For Teachers

- Use the simulation to demonstrate conservation of energy in real-time
- Take snapshots at key positions (highest point, lowest point, mid-swing)
- Show students that total energy stays constant
- Discuss the equations while showing the visual representation
- Address misconceptions with the dedicated tab

## 🎨 Visual Energy Display Ideas

The app shows energy in multiple ways:

1. **Numerical Values** - Exact KE, PE, and total energy in Joules
2. **Progress Bars** - Visual representation of energy proportion
3. **Color-coded Cards:**
   - 🔵 Blue for Kinetic Energy
   - 🟢 Green for Potential Energy
   - 🟣 Purple for Total Energy
4. **Canvas Visualization** - Arc showing current height vs. maximum height
5. **Snapshot Table** - Compare energy values across different time points

## 🧪 Physics Concepts Covered

- Conservation of mechanical energy
- Kinetic energy (KE = ½mv²)
- Gravitational potential energy (PE = mgh)
- Energy transformation
- Simple harmonic motion (pendulum)

## 🛠️ Project Structure

```
conservation-of-energy/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page with tabs
├── components/
│   ├── PendulumSimulation.tsx    # Main simulation component
│   ├── Equations.tsx             # Equations educational content
│   └── Misconceptions.tsx        # Common misconceptions
├── .github/
│   └── copilot-instructions.md   # Project guidelines
├── public/                   # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

## 🔧 Customization

### Modify Physics Parameters

Edit [components/PendulumSimulation.tsx](components/PendulumSimulation.tsx):

```typescript
const g = 9.81; // Gravitational acceleration
const pixelsPerMeter = 100; // Display scale
const mass = 1; // Pendulum mass (kg)
```

### Adjust Visual Style

Modify colors in [app/globals.css](app/globals.css) or Tailwind classes in components.

### Add More Examples

Create new components in the `components/` folder and add them as new tabs in [app/page.tsx](app/page.tsx).

## 📝 License

This project is open source and available for educational purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📧 Contact

For questions or feedback about this educational tool, please open an issue on GitHub.

---

**Made with ❤️ for HKDSE Physics Students**

Helping students visualize and understand conservation of energy through interactive simulation!
