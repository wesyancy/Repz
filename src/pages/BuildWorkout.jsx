import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import exerciseBank from '../data/exerciseBank';
import user from '../data/user';
import RenderButton from '../components/UI/RenderButton';
import RenderSelect from '../components/UI/RenderSelect';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Card,
    CardContent,
    Typography,
    Grid,
} from '@mui/material';
import { buildWorkoutTemplate } from '../utils/buildWorkoutTemplate';
import { TextField } from '@mui/material';

const dayOptions = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const BuildWorkout = () => {
    const [workouts, setWorkouts] = useState([{ id: 1, day: 'Monday', exercises: [] }]);
    const [modalOpen, setModalOpen] = useState(false);
    const [activeWorkoutId, setActiveWorkoutId] = useState(null);
    const [selectedGroup, setSelectedGroup] = useState('');
    const [selectedExercise, setSelectedExercise] = useState('');
    const [templateName, setTemplateName] = useState('');
    const navigate = useNavigate();

    const handleAddDay = () => {
        const newId = workouts.length + 1;
        setWorkouts([...workouts, { id: newId, day: 'Monday', exercises: [] }]);
    };

    const handleDayChange = (id, newDay) => {
        setWorkouts(workouts.map((w) => (w.id === id ? { ...w, day: newDay } : w)));
    };

    const handleDeleteDay = (id) => {
        setWorkouts(workouts.filter((w) => w.id !== id));
    };

    const handleDeleteExercise = (dayId, index) => {
        setWorkouts(workouts.map((w) => {
            if (w.id === dayId) {
                const updatedExercises = w.exercises.filter((_, i) => i !== index);
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
        setWorkouts(workouts.map((w) => {
            if (w.id === activeWorkoutId) {
                return {
                    ...w,
                    exercises: [...w.exercises, { group: selectedGroup, name: selectedExercise }],
                };
            }
            return w;
        }));
        closeModal();
    };

    const handleSaveTemplate = () => {
        if (!templateName.trim()) {
            alert('Please enter a workout name.');
            return;
        }
        const template = buildWorkoutTemplate(workouts, templateName);
        
        // Push to user.workoutTemplates
        if (!user.workoutTemplates) {
            user.workoutTemplates = [];
        }
        user.workoutTemplates.push(template);

        setTemplateName('');
        navigate('/workouts', { state: { message: 'Workout Template Saved Successfully!' }});
    };

    return (
        <div style={{ padding: '2rem' }}>
            <Grid container spacing={2} wrap="nowrap" style={{ overflowX: 'auto' }}>
                {workouts.map((workout) => (
                    <Grid key={workout.id}>
                        <Card style={{ minWidth: 300 }}>
                            <CardContent>
                                <RenderButton
                                    label="Delete Day"
                                    onClick={() => handleDeleteDay(workout.id)}
                                    color="error"
                                    size="small"
                                    variant="outlined"
                                    style={{ float: 'right', marginBottom: '0.5rem' }}
                                />
                                <RenderSelect
                                    id={`day-${workout.id}`}
                                    label="Day"
                                    value={workout.day}
                                    onChange={(e) => handleDayChange(workout.id, e.target.value)}
                                    options={dayOptions}
                                />
                                <Typography variant="h6" style={{ marginTop: '1rem' }}>
                                    Exercises
                                </Typography>
                                {workout.exercises.map((exercise, idx) => (
                                    <Grid
                                        container
                                        alignItems="center"
                                        justifyContent="space-between"
                                        key={idx}
                                    >
                                        <Grid >
                                            <Typography variant="body2">
                                                {exercise.group} – {exercise.name}
                                            </Typography>
                                        </Grid>
                                        <Grid >
                                            <RenderButton
                                                label="Delete"
                                                onClick={() => handleDeleteExercise(workout.id, idx)}
                                                variant="outlined"
                                                color="error"
                                                size="small"
                                            />
                                        </Grid>
                                    </Grid>
                                ))}
                                <RenderButton
                                    label="Add Exercise"
                                    onClick={() => openModal(workout.id)}
                                    variant="outlined"
                                    color="primary"
                                    size="small"
                                    style={{ marginTop: '1rem' }}
                                />
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                <Grid >
                    <RenderButton
                        label="Add Day"
                        onClick={handleAddDay}
                        variant="outlined"
                        style={{ height: '100%' }}
                    />
                </Grid>
            </Grid>

            <div style={{ marginTop: '2rem' }}>
                <TextField
                    label="Workout Name"
                    value={templateName}
                    onChange={(e) => setTemplateName(e.target.value)}
                    variant="outlined"
                    size="small"
                    style={{ marginRight: '1rem' }}
                />
                <RenderButton
                    label="Save Workout Template"
                    onClick={handleSaveTemplate}
                    variant="contained"
                    color="primary"
                />
            </div>

            <Dialog open={modalOpen} onClose={closeModal}>
                <DialogTitle>Select Exercise</DialogTitle>
                <DialogContent>
                    <RenderSelect
                        id="group"
                        label="Select Muscle Group"
                        value={selectedGroup}
                        onChange={(e) => setSelectedGroup(e.target.value)}
                        options={Object.keys(exerciseBank)}
                    />
                    {selectedGroup && (
                        <RenderSelect
                            id="exercise"
                            label="Select Exercise"
                            value={selectedExercise}
                            onChange={(e) => setSelectedExercise(e.target.value)}
                            options={exerciseBank[selectedGroup]}
                        />
                    )}
                </DialogContent>
                <DialogActions>
                    <RenderButton
                        label="Cancel"
                        onClick={closeModal}
                        variant="outlined"
                        color="error"
                    />
                    <RenderButton
                        label="Add"
                        onClick={handleAddExercise}
                        variant="outlined"
                        color="primary"
                        disabled={!selectedGroup || !selectedExercise}
                    />
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default BuildWorkout;