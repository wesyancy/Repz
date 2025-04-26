/**
 * Fills in sets, soreness, jointPain, pump, and intensity
 * for a given workout object after the user completes the workout.
 * 
 * @param {Object} workout - The workout object you built earlier
 * @param {Object} filledData - User-completed data structured by day/exercise name
 */
export const fillInWorkoutSets = (workout, filledData) => {
    const updatedWorkout = JSON.parse(JSON.stringify(workout)); // deep clone to avoid mutation

    Object.keys(filledData).forEach(day => {
        if (!updatedWorkout.data[day]) return; // day might not exist (safety)

        filledData[day].forEach(filledExercise => {
            const exerciseToUpdate = updatedWorkout.data[day].find(
                (ex) => ex.name === filledExercise.name
            );

            if (exerciseToUpdate) {
                exerciseToUpdate.soreness = filledExercise.soreness ?? exerciseToUpdate.soreness;
                exerciseToUpdate.jointPain = filledExercise.jointPain ?? exerciseToUpdate.jointPain;
                exerciseToUpdate.pump = filledExercise.pump ?? exerciseToUpdate.pump;
                exerciseToUpdate.intensity = filledExercise.intensity ?? exerciseToUpdate.intensity;
                exerciseToUpdate.sets = filledExercise.sets ?? exerciseToUpdate.sets;
            }
        });
    });

    return updatedWorkout;
};