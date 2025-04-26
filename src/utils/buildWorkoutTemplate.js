export const buildWorkoutTemplate = (workouts, workoutName) => {
    const timestamp = Date.now();

    const workoutTemplate = {
        id: `template-${timestamp}`,
        name: `${workoutName}`,
        createdAt: new Date(timestamp).toISOString(),
        isActive: false,
        data: {}
    };

    workouts.forEach(({ day, exercises }) => {
        if (!workoutTemplate.data[day]) {
            workoutTemplate.data[day] = [];
        }

        exercises.forEach(({ group, name }) => {
            workoutTemplate.data[day].push({
                muscleGroup: group,
                name
            });
        });
    });

    return workoutTemplate;
};