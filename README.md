# LoadUP (formerly Repz)

A lightweight React + Vite application for tracking workouts, managing templates, and viewing workout history. 

Repz gives you:

- **Build Workouts** by day & exercise  
- **Save & reuse** workout templates  
- **Log workouts** with sets, reps, intensity, soreness, and joint-pain metrics  
- **Profile Dashboard** with user info & per-exercise history  
- **Collapsible, responsive sidebar** for navigation  
- **In-app feedback** via a simple form  

---

## 📦 Getting Started

### Prerequisites

- Node v16+  
- npm or Yarn  

### Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/your-org/repz.git
   cd repz
# Repz

A fast, minimalistic React + Vite app to build, save, and track workouts—with detailed logs and a responsive UI.

## 🚀 Features

- **Workout Builder**  
  Create daily workouts by selecting days and exercises from a bank.

- **Templates**  
  Save and reuse workout templates; activate one to start logging.

- **Workout Logging**  
  Record sets, reps, weight, intensity, soreness, and joint pain for each exercise.

- **Profile Dashboard**  
  See user info (username, email, total workouts, most recent date, average intensity) and browse per-exercise history.

- **Responsive Sidebar**  
  Collapsible sidebar: full labels on desktop, icons-only on mobile.

- **Feedback Form**  
  Submit bug reports, feature requests, UX feedback, ratings, and comments.

## 📦 Installation

1. **Clone & install**  
   ```bash
   git clone https://github.com/your-org/repz.git
   cd repz
   npm install
   # or yarn install
   ```

2. **Run development server**  
   ```bash
   npm run dev
   # or yarn dev
   ```
   Open your browser at `http://localhost:5173` (default Vite port).

## 🛠 Available Scripts

- `npm run dev` — Start dev server with HMR  
- `npm run build` — Build for production to `/dist`  
- `npm run preview` — Preview production build locally  
- `npm run lint` — Run ESLint checks

## 📂 Project Structure

```
repz/
├─ public/              
│  └─ index.html        
├─ src/
│  ├─ assets/           # Logo, icons, and images
│  ├─ components/       # UI: Sidebar, buttons, selects, dialogs
│  ├─ data/             # Mock: exerciseBank.js, user.js
│  ├─ pages/            # Pages: BuildTemplate, CurrentWorkout, Templates, ProfileStats, Feedback
│  ├─ utils/            # Helpers: buildWorkoutTemplate.jsm currentWorkoutUtils.js
│  ├─ App.jsx           # Routes & layout
│  └─ main.jsx          # Entry point
├─ .eslintrc.js         
├─ vite.config.js       
└─ package.json         
```

## 🔧 Configuration

- **Exercise Bank**: Edit `src/data/exerciseBank.js`  
- **User Data**: Swap `src/data/user.js` for real API integration  
- **Theme**: Customize MUI theme in `App.jsx`

## 🤝 Contributing

1. Fork the repo  
2. Create a branch: `git checkout -b feat/awesome`  
3. Commit: `git commit -m "feat: add awesome feature"`  
4. Push & open a PR



## 🐛 Known Bugs

1. The 'Set Active' button on the templates page does not properly function for any template but the first one.
2. 


## Features to Come

1. Have the app pre-populate the placeholder weight and reps based off of last workout's numbers
2. Dynamic re-setting of sets, reps and weight based off of feedback metrics gathered from user
3. Ability to change weight in real time and have the app recalculate the reps consequently
4. 
