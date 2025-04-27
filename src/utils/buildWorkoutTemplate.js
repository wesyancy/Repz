export const buildWorkoutTemplate = (workouts, workoutName) => {
    const timestamp = Date.now();

    const workoutTemplate = {
        id: `template-${timestamp}`,
        name: `${workoutName}`,
        createdAt: new Date(timestamp).toISOString(),
        isActive: false,
        data: workouts.map(({ day, exercises }) => ({
            day,
            isActive: false,
            exercises: exercises.map(({ group, name }) => ({
                muscleGroup: group,
                name
            }))
        }))
    };

    return workoutTemplate;
};