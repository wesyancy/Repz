import React, { useState, useMemo } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    List,
    ListItem,
    ListItemText,
} from '@mui/material';
import user from '../data/user';
import exerciseBank from '../data/exerciseBank';

export default function Profile() {
    // Extract workouts and templates
    const workouts = useMemo(() => user.workoutData || [], []);

    // USER INFO METRICS
    const workoutsCompleted = workouts.length;
    const mostRecent = useMemo(() => {
        if (!workouts.length) return '—';
        const latest = workouts
            .map((w) => new Date(w.dateCompleted))
            .sort((a, b) => b - a)[0];
        return latest.toLocaleDateString();
    }, [workouts]);
    const avgIntensity = useMemo(() => {
        let sum = 0,
            count = 0;
        workouts.forEach((w) => {
            Object.values(w.data).forEach((dayArr) =>
                dayArr.forEach((ex) => {
                    sum += ex.intensity;
                    count++;
                })
            );
        });
        return count ? (sum / count).toFixed(1) : '—';
    }, [workouts]);

    // EXERCISE HISTORY STATE
    const [group, setGroup] = useState('');
    const [exercise, setExercise] = useState('');

    // Build filtered history list
    const history = useMemo(() => {
        if (!group || !exercise) return [];
        const entries = [];
        workouts.forEach((w) => {
            Object.values(w.data).forEach((arr) => {
                arr.forEach((ex) => {
                    if (ex.muscleGroup === group && ex.name === exercise) {
                        entries.push({
                            date: w.dateCompleted,
                            repsSets: ex.sets
                                .map((s) => `${s.reps} reps @ ${s.weight} lbs`)
                                .join(', '),
                            intensity: ex.intensity,
                        });
                    }
                });
            });
        });
        // sort newest first
        return entries.sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [group, exercise, workouts]);

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            spacing={4}
            style={{ padding: '2rem' }}>
            {/* --- USER INFO CARD --- */}
            <Grid item xs={12} style={{ width: '100%', maxWidth: '60%' }}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            User Info
                        </Typography>
                        <Typography>
                            <strong>Username:</strong> {user.mainInfo.username}
                        </Typography>
                        <Typography>
                            <strong>Email:</strong> {user.mainInfo.email}
                        </Typography>
                        <Typography>
                            <strong>Workouts Completed:</strong>{' '}
                            {workoutsCompleted}
                        </Typography>
                        <Typography>
                            <strong>Most Recent:</strong> {mostRecent}
                        </Typography>
                        <Typography>
                            <strong>Avg. Intensity:</strong> {avgIntensity}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            {/* --- EXERCISE HISTORY CARD --- */}
            <Grid item xs={12} style={{ width: '100%', maxWidth: '60%' }}>
                <Card>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Exercise History
                        </Typography>

                        {/* Muscle Group Select */}
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="group-label">
                                Muscle Group
                            </InputLabel>
                            <Select
                                labelId="group-label"
                                value={group}
                                label="Muscle Group"
                                onChange={(e) => {
                                    setGroup(e.target.value);
                                    setExercise('');
                                }}>
                                {Object.keys(exerciseBank).map((g) => (
                                    <MenuItem key={g} value={g}>
                                        {g}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        {/* Exercise Select */}
                        {group && (
                            <FormControl fullWidth margin="normal">
                                <InputLabel id="exercise-label">
                                    Exercise
                                </InputLabel>
                                <Select
                                    labelId="exercise-label"
                                    value={exercise}
                                    label="Exercise"
                                    onChange={(e) =>
                                        setExercise(e.target.value)
                                    }>
                                    {exerciseBank[group].map((name) => (
                                        <MenuItem key={name} value={name}>
                                            {name}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        )}

                        {/* History List */}
                        {exercise &&
                            (history.length ? (
                                <List>
                                    {history.map((h, idx) => (
                                        <ListItem key={idx}>
                                            <ListItemText
                                                primary={new Date(
                                                    h.date
                                                ).toLocaleDateString()}
                                                secondary={`${h.repsSets} — intensity: ${h.intensity}`}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                <Typography
                                    color="textSecondary"
                                    style={{ marginTop: '1rem' }}>
                                    No records found for this exercise.
                                </Typography>
                            ))}
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
