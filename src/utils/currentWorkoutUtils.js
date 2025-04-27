// src/utils/currentWorkoutUtils.js

export const loadActiveDay = (activeTemplate, setActiveDay, setExerciseLogs) => {
    if (activeTemplate) {
        const activeDayObject = activeTemplate.data.find((d) => d.isActive);
        if (activeDayObject) {
            setActiveDay(activeDayObject);
            const initialLogs = {};
            activeDayObject.exercises.forEach((ex) => {
                initialLogs[ex.name] = [
                    { weight: '', reps: '', completed: false },
                ];
            });
            setExerciseLogs(initialLogs);
        }
    }
};

export const completeWorkout = (user, activeTemplate, activeDay, exerciseLogs, setActiveTemplate, setWorkoutCompleted, setActiveDay) => {
    const workoutId = `workout-${Date.now()}`;
    const workoutName = activeTemplate.name;
    const dateCompleted = new Date().toISOString();
    const dayName = activeDay.day;

    const exercisesData = activeDay.exercises.map((exercise) => {
        const logs = exerciseLogs[exercise.name];
        return {
            muscleGroup: exercise.muscleGroup,
            name: exercise.name,
            soreness: logs[0]?.soreness ?? 0,
            jointPain: logs[0]?.jointPain ?? 0,
            pump: logs[0]?.pump ?? 0,
            intensity: logs[0]?.intensity ?? 0,
            sets: logs.map((set) => ({
                reps: set.reps,
                weight: set.weight,
            })),
        };
    });

    const newWorkout = {
        id: workoutId,
        name: workoutName,
        dateCompleted,
        data: {
            [dayName]: exercisesData,
        },
    };

    if (!user.workoutData) {
        user.workoutData = [];
    }
    user.workoutData.push(newWorkout);

    advanceDay(activeTemplate, setActiveTemplate, setWorkoutCompleted, setActiveDay);
};

export const skipWorkout = (activeTemplate, activeDay, setActiveTemplate, setWorkoutCompleted, setActiveDay) => {
    advanceDay(activeTemplate, setActiveTemplate, setWorkoutCompleted, setActiveDay);
};

const advanceDay = (activeTemplate, setActiveTemplate, setWorkoutCompleted, setActiveDay) => {
    const currentDayIndex = activeTemplate.data.findIndex((day) => day.isActive);

    if (currentDayIndex !== -1) {
        activeTemplate.data[currentDayIndex].isActive = false;
        if (currentDayIndex + 1 < activeTemplate.data.length) {
            activeTemplate.data[currentDayIndex + 1].isActive = true;
        } else {
            activeTemplate.data[0].isActive = true; // Loop back to first day
        }
    }

    setActiveTemplate({
        ...activeTemplate,
        data: [...activeTemplate.data], // create a new array reference
    });
    setWorkoutCompleted(true);
    setActiveDay(null);
};