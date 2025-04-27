import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
// import Landing from './pages/Landing';
import CurrentWorkout from './pages/CurrentWorkout';
import Templates from './pages/Templates';
import AddExercise from './pages/AddExercise';
import Profile from './pages/ProfileStats';
import BuildWorkout from './pages/BuildWorkout';
import Feedback from './pages/Feedback';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<CurrentWorkout />} />
                <Route path="currentworkout" element={<CurrentWorkout />} />
                <Route path="templates" element={<Templates />} />
                <Route path="addexercise" element={<AddExercise />} />
                <Route path="buildworkout" element={<BuildWorkout />} />
                <Route path="profile" element={<Profile />} />
                <Route path="feedback" element={<Feedback />} />
            </Route>
        </Routes>
    );
}

export default App;
