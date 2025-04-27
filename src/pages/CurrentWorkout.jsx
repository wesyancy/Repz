import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
    Typography,
    Card,
    CardContent,
    Grid,
    TextField,
    Checkbox,
    Button,
} from '@mui/material';
import user from '../data/user';
import CompletionDialog from '../components/workouts/CompletionDialog';
import SorenessDialog from '../components/workouts/SorenessDialog';
import { loadActiveDay, completeWorkout, skipWorkout } from '../utils/currentWorkoutUtils';

const CurrentWorkout = () => {

    const [activeDay, setActiveDay] = useState(null);
    const [exerciseLogs, setExerciseLogs] = useState({});
    const [showSorenessDialog, setShowSorenessDialog] = useState(false);
    const [showCompletionDialog, setShowCompletionDialog] = useState(false);
    const [currentExercise, setCurrentExercise] = useState(null);
    const [currentMuscleGroup, setCurrentMuscleGroup] = useState('');
    const [workoutCompleted, setWorkoutCompleted] = useState(false);
    const location = useLocation();
    const passedTemplate = location.state?.activeTemplate;
    const [activeTemplate, setActiveTemplate] = useState(
        passedTemplate || user.workoutTemplates.find((t) => t.isActive)
    );

    useEffect(() => {
        loadActiveDay(activeTemplate, setActiveDay, setExerciseLogs);
    }, [activeTemplate]);

    const handleAddSet = (exerciseName) => {
        setExerciseLogs((prev) => ({
            ...prev,
            [exerciseName]: [
                ...prev[exerciseName],
                { weight: '', reps: '', completed: false },
            ],
        }));
    };

    const handleSetChange = (exerciseName, index, field, value) => {
        setExerciseLogs((prev) => ({
            ...prev,
            [exerciseName]: prev[exerciseName].map((set, i) =>
                i === index ? { ...set, [field]: value } : set
            ),
        }));
    };

    const handleCompleteSet = (exerciseName, index) => {
        const updatedSets = exerciseLogs[exerciseName].map((set, i) =>
            i === index ? { ...set, completed: !set.completed } : set
        );
        setExerciseLogs((prev) => ({ ...prev, [exerciseName]: updatedSets }));

        // First completed set triggers soreness dialog
        if (index === 0 && !showSorenessDialog) {
            setCurrentExercise(exerciseName);
            setCurrentMuscleGroup(
                activeDay.exercises.find((ex) => ex.name === exerciseName)
                    ?.muscleGroup || ''
            );
            setShowSorenessDialog(true);
        }

        // All sets completed triggers completion dialog
        const allCompleted = updatedSets.every((set) => set.completed);
        if (allCompleted) {
            setCurrentExercise(exerciseName);
            setCurrentMuscleGroup(
                activeDay.exercises.find((ex) => ex.name === exerciseName)
                    ?.muscleGroup || ''
            );
            setShowCompletionDialog(true);
        }
    };

    if (!activeTemplate || !activeDay) {
        return <Typography>No active workout found.</Typography>;
    }

    return (
        <div style={{ padding: '2rem' }}>
            <Typography variant="h4" gutterBottom>
                {activeDay.day}
            </Typography>

            {workoutCompleted ? (
                <>
                    <Typography variant="h5" color="primary" gutterBottom>
                        Workout Complete!
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => {
                            setWorkoutCompleted(false);
                            loadActiveDay(activeTemplate, setActiveDay, setExerciseLogs);
                        }}>
                        Start Next Workout
                    </Button>
                </>
            ) : (
                <>
                    <Grid container direction="column" spacing={2}>
                        {activeDay.exercises.map((exercise) => (
                            <Grid item key={exercise.name}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="h6">
                                            {exercise.name}
                                        </Typography>
                                        {exerciseLogs[exercise.name]?.map(
                                            (set, index) => (
                                                <Grid
                                                    container
                                                    alignItems="center"
                                                    spacing={1}
                                                    key={index}
                                                    style={{
                                                        marginTop: '0.5rem',
                                                    }}>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            label="Weight"
                                                            value={set.weight}
                                                            onChange={(e) =>
                                                                handleSetChange(
                                                                    exercise.name,
                                                                    index,
                                                                    'weight',
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            size="small"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <TextField
                                                            label="Reps"
                                                            value={set.reps}
                                                            onChange={(e) =>
                                                                handleSetChange(
                                                                    exercise.name,
                                                                    index,
                                                                    'reps',
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            size="small"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Checkbox
                                                            checked={
                                                                set.completed
                                                            }
                                                            onChange={() =>
                                                                handleCompleteSet(
                                                                    exercise.name,
                                                                    index
                                                                )
                                                            }
                                                        />
                                                        Complete
                                                    </Grid>
                                                </Grid>
                                            )
                                        )}
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            style={{ marginTop: '1rem' }}
                                            onClick={() =>
                                                handleAddSet(exercise.name)
                                            }>
                                            Add Set
                                        </Button>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                    <Button
                        variant="contained"
                        color="primary"
                        style={{ marginTop: '2rem' }}
                        onClick={() => completeWorkout(user, activeTemplate, activeDay, exerciseLogs, setActiveTemplate, setWorkoutCompleted, setActiveDay)}
                    >
                        Complete Workout
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        style={{ marginTop: '2rem', marginLeft: '1rem' }}
                        onClick={() => skipWorkout(activeTemplate, activeDay, setActiveTemplate, setWorkoutCompleted, setActiveDay)}
                    >
                        Skip Workout
                    </Button>
                </>
            )}

            <SorenessDialog
                open={showSorenessDialog}
                onClose={() => setShowSorenessDialog(false)}
                onSubmit={(soreness) => {
                    setExerciseLogs((prev) => ({
                        ...prev,
                        [currentExercise]: prev[currentExercise].map((set, i) =>
                            i === 0 ? { ...set, soreness } : set
                        ),
                    }));
                }}
                muscleGroup={currentMuscleGroup}
            />

            <CompletionDialog
                open={showCompletionDialog}
                onClose={() => setShowCompletionDialog(false)}
                onSubmit={({ jointPain, pump, intensity }) => {
                    setExerciseLogs((prev) => ({
                        ...prev,
                        [currentExercise]: prev[currentExercise].map((set, i) =>
                            i === 0
                                ? { ...set, jointPain, pump, intensity }
                                : set
                        ),
                    }));
                }}
                muscleGroup={currentMuscleGroup}
            />
        </div>
    );
};

export default CurrentWorkout;
