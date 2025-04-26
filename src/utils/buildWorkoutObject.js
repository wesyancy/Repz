export const buildWorkoutObject = (workouts, workoutName = "Custom Workout") => {
    const timestamp = Date.now();

    const workoutData = {
        id: `workout-${timestamp}`,
        name: workoutName,
        dateCompleted: new Date(timestamp).toISOString(),
        data: {}
    };

    workouts.forEach(({ day, exercises }) => {
        if (!workoutData.data[day]) {
            workoutData.data[day] = [];
        }

        exercises.forEach(({ group, name }) => {
            workoutData.data[day].push({
                muscleGroup: group,
                name,
                soreness: null,
                jointPain: null,
                pump: null,
                intensity: null,
                sets: []
            });
        });
    });

    return workoutData;
};