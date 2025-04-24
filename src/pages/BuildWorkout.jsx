import React, { useState } from 'react';
import exerciseBank from '../data/exerciseBank';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Card,
  CardContent,
  Typography,
  Grid
} from '@mui/material';

const dayOptions = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
];

const BuildWorkout = () => {
  const [workouts, setWorkouts] = useState([
    { id: 1, day: 'Monday', exercises: [] }
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeWorkoutId, setActiveWorkoutId] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedExercise, setSelectedExercise] = useState('');

  const handleAddDay = () => {
    const newId = workouts.length + 1;
    setWorkouts([...workouts, { id: newId, day: 'Monday', exercises: [] }]);
  };

  const handleDayChange = (id, newDay) => {
    setWorkouts(workouts.map(w =>
      w.id === id ? { ...w, day: newDay } : w
    ));
  };

  const handleDeleteDay = (id) => {
    setWorkouts(workouts.filter(w => w.id !== id));
  };

  const handleDeleteExercise = (dayId, index) => {
    setWorkouts(workouts.map(w => {
      if (w.id === dayId) {
        const updatedExercises = [...w.exercises];
        updatedExercises.splice(index, 1);
        return { ...w, exercises: updatedExercises };
      }
      return w;
    }));
  };

  const openModal = (workoutId) => {
    setActiveWorkoutId(workoutId);
    setSelectedGroup('');
    setSelectedExercise('');
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveWorkoutId(null);
    setSelectedGroup('');
    setSelectedExercise('');
  };

  const handleAddExercise = () => {
    if (!selectedGroup || !selectedExercise || !activeWorkoutId) return;
    setWorkouts(workouts.map(w => {
      if (w.id === activeWorkoutId) {
        return {
          ...w,
          exercises: [...w.exercises, { group: selectedGroup, name: selectedExercise }]
        };
      }
      return w;
    }));
    closeModal();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <Grid container spacing={2} wrap="nowrap" style={{ overflowX: 'auto' }}>
        {workouts.map((workout) => (
          <Grid item key={workout.id}>
            <Card style={{ minWidth: 300 }}>
              <CardContent>
                <Button
                  onClick={() => handleDeleteDay(workout.id)}
                  color="error"
                  size="small"
                  style={{ float: 'right', marginBottom: '0.5rem' }}
                >
                  Delete Day
                </Button>
                <FormControl fullWidth>
                  <InputLabel id={`day-label-${workout.id}`}>Day</InputLabel>
                  <Select
                    labelId={`day-label-${workout.id}`}
                    value={workout.day}
                    onChange={(e) => handleDayChange(workout.id, e.target.value)}
                    label="Day"
                  >
                    {dayOptions.map((day) => (
                      <MenuItem key={day} value={day}>{day}</MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <Typography variant="h6" style={{ marginTop: '1rem' }}>Exercises</Typography>
                {workout.exercises.map((exercise, idx) => (
                  <Grid container alignItems="center" justifyContent="space-between" key={idx}>
                    <Grid item>
                      <Typography variant="body2">
                        {exercise.group} – {exercise.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Button
                        onClick={() => handleDeleteExercise(workout.id, idx)}
                        color="error"
                        size="small"
                      >
                        Delete
                      </Button>
                    </Grid>
                  </Grid>
                ))}

                <Button
                  onClick={() => openModal(workout.id)}
                  variant="outlined"
                  color="primary"
                  style={{ marginTop: '1rem' }}
                >
                  Add Exercise
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item>
          <Button onClick={handleAddDay} variant="contained" style={{ height: '100%' }}>
            Add Day
          </Button>
        </Grid>
      </Grid>

      <Dialog open={modalOpen} onClose={closeModal}>
        <DialogTitle>Select Exercise</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="normal">
            <InputLabel id="group-label">Select Muscle Group</InputLabel>
            <Select
              labelId="group-label"
              value={selectedGroup}
              onChange={(e) => setSelectedGroup(e.target.value)}
            >
              {Object.keys(exerciseBank).map((group) => (
                <MenuItem key={group} value={group}>{group}</MenuItem>
              ))}
            </Select>
          </FormControl>

          {selectedGroup && (
            <FormControl fullWidth margin="normal">
              <InputLabel id="exercise-label"> Select Exercise</InputLabel>
              <Select
                labelId="exercise-label"
                value={selectedExercise}
                onChange={(e) => setSelectedExercise(e.target.value)}
              >
                {exerciseBank[selectedGroup].map((exercise) => (
                  <MenuItem key={exercise} value={exercise}>{exercise}</MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button
            onClick={handleAddExercise}
            variant="contained"
            color="primary"
            disabled={!selectedGroup || !selectedExercise}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BuildWorkout;