import { Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout";
import Landing from './pages/Landing';
import CurrentWorkout from './pages/CurrentWorkout';
import AllWorkouts from './pages/AllWorkouts';
import ProfileStats from './pages/ProfileStats';
import BuildWorkout from './pages/BuildWorkout';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        {/* <Route path="landing" element={<Landing />} /> */}
        <Route path="currentworkout" element={<CurrentWorkout />} />
        <Route path="workouts" element={<AllWorkouts />} />
        <Route path="profile" element={<ProfileStats />} />
        <Route path="buildworkout" element={<BuildWorkout />} />
      </Route>
    </Routes>
  );
}

export default App