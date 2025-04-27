let user = {
    mainInfo: {
        username: 'wesyancy',
        id: '000001',
        email: 'wesyancy@notyobusiness.com',
        passwordHash: null,
        createdAt: null,
        updatedAt: null,
        isActive: null,
    },
    workoutTemplates: [
        {
            id: 'template-001',
            name: 'Chest and Back',
            createdAt: '2025-04-25T18:00:00Z',
            isActive: true,
            data: [
                {
                    day: 'Monday',
                    isActive: true,
                    exercises: [
                        { muscleGroup: 'Chest', name: 'Barbell Bench Press' },
                        { muscleGroup: 'Chest', name: 'Incline Bench Press' },
                        { muscleGroup: 'Back', name: 'Wide-Grip Pull-Up' },
                    ]
                },
                {
                    day: 'Thursday',
                    isActive: false,
                    exercises: [
                        { muscleGroup: 'Chest', name: 'Incline Bench Press' },
                        { muscleGroup: 'Back', name: 'Deadlift' },
                    ]
                },
                {
                    day: 'Saturday',
                    isActive: false,
                    exercises: [
                        { muscleGroup: 'Chest', name: 'Cable Crossover' },
                        { muscleGroup: 'Back', name: 'Bent-Over Row' },
                    ]
                }
            ]
        },
        {
            id: 'template-002',
            name: 'Legs and Shoulders',
            createdAt: '2025-04-20T18:00:00Z',
            isActive: false,
            data: [
                {
                    day: 'Sunday',
                    isActive: false,
                    exercises: [
                        { muscleGroup: 'Legs', name: 'Squat' },
                        { muscleGroup: 'Legs', name: 'Lunge' },
                        { muscleGroup: 'Shoulders', name: 'Overhead Press' },
                        { muscleGroup: 'Shoulders', name: 'Lateral Raise' },
                    ]
                },
                {
                    day: 'Monday',
                    isActive: false,
                    exercises: [
                        { muscleGroup: 'Shoulders', name: 'Overhead Press' },
                        { muscleGroup: 'Shoulders', name: 'Lateral Raise' },
                        { muscleGroup: 'Legs', name: 'Deadlift' },
                        { muscleGroup: 'Shoulders', name: 'Face Pull' },
                    ]
                },
                {
                    day: 'Tuesday',
                    isActive: false,
                    exercises: [
                        { muscleGroup: 'Legs', name: 'Deadlift' },
                        { muscleGroup: 'Shoulders', name: 'Face Pull' },
                        { muscleGroup: 'Shoulders', name: 'Overhead Press' },
                        { muscleGroup: 'Shoulders', name: 'Lateral Raise' },
                    ]
                },
                {
                    day: 'Wednesday',
                    isActive: false,
                    exercises: [
                        { muscleGroup: 'Legs', name: 'Squat' },
                        { muscleGroup: 'Legs', name: 'Lunge' },
                        { muscleGroup: 'Shoulders', name: 'Overhead Press' },
                        { muscleGroup: 'Shoulders', name: 'Lateral Raise' },
                    ]
                },
                {
                    day: 'Thursday',
                    isActive: false,
                    exercises: [
                        { muscleGroup: 'Shoulders', name: 'Overhead Press' },
                        { muscleGroup: 'Shoulders', name: 'Lateral Raise' },
                        { muscleGroup: 'Legs', name: 'Deadlift' },
                        { muscleGroup: 'Shoulders', name: 'Face Pull' },
                    ]
                },
                {
                    day: 'Friday',
                    isActive: false,
                    exercises: [
                        { muscleGroup: 'Legs', name: 'Deadlift' },
                        { muscleGroup: 'Shoulders', name: 'Face Pull' },
                        { muscleGroup: 'Shoulders', name: 'Overhead Press' },
                        { muscleGroup: 'Shoulders', name: 'Lateral Raise' },
                    ]
                }
            ]
        },
        {
            id: 'template-003',
            name: 'Full Body Circuit',
            createdAt: '2025-04-15T18:00:00Z',
            isActive: false,
            data: [
                {
                    day: 'Wednesday',
                    isActive: true,
                    exercises: [
                        { muscleGroup: 'Chest', name: 'Push-Up' },
                        { muscleGroup: 'Legs', name: 'Squat' },
                        { muscleGroup: 'FullBody', name: 'Burpee' },
                    ]
                },
                {
                    day: 'Friday',
                    isActive: true,
                    exercises: [
                        { muscleGroup: 'Legs', name: 'Lunge' },
                        { muscleGroup: 'Abs', name: 'Plank' },
                    ]
                }
            ]
        },
        {
            id: 'template-004',
            name: 'Push Day',
            createdAt: '2025-04-10T18:00:00Z',
            isActive: false,
            data: [
                {
                    day: 'Monday',
                    isActive: false,
                    exercises: [
                        { muscleGroup: 'Shoulders', name: 'Overhead Press' },
                        { muscleGroup: 'Triceps', name: 'Tricep Dip' },
                    ]
                },
                {
                    day: 'Thursday',
                    isActive: true,
                    exercises: [
                        { muscleGroup: 'Chest', name: 'Push-Up' },
                        { muscleGroup: 'Shoulders', name: 'Lateral Raise' },
                    ]
                }
            ]
        }
    ],
    workoutData: [
        {
            id: 'workout-001',
            name: 'Chest and Back',
            dateCompleted: '2025-04-16T18:00:00Z',
            data: {
                Monday: [
                    {
                        muscleGroup: 'Chest',
                        name: 'Barbell Bench Press',
                        soreness: 3,
                        jointPain: 2,
                        pump: 4,
                        intensity: 5,
                        sets: [
                            { reps: 8, weight: 135 },
                            { reps: 8, weight: 135 }
                        ]
                    },
                    {
                        muscleGroup: 'Chest',
                        name: 'Incline Bench Press',
                        soreness: 2,
                        jointPain: 1,
                        pump: 3,
                        intensity: 4,
                        sets: [
                            { reps: 10, weight: 115 },
                            { reps: 10, weight: 115 }
                        ]
                    },
                    {
                        muscleGroup: 'Back',
                        name: 'Wide-Grip Pull-Up',
                        soreness: 1,
                        jointPain: 1,
                        pump: 4,
                        intensity: 4,
                        sets: [
                            { reps: 8, weight: 0 },
                            { reps: 8, weight: 0 }
                        ]
                    }
                ]
            }
        },
        {
            id: 'workout-002',
            name: 'Chest and Back',
            dateCompleted: '2025-04-20T18:00:00Z',
            data: {
                Thursday: [
                    {
                        muscleGroup: 'Chest',
                        name: 'Incline Bench Press',
                        soreness: 2,
                        jointPain: 1,
                        pump: 3,
                        intensity: 4,
                        sets: [
                            { reps: 10, weight: 115 },
                            { reps: 10, weight: 115 }
                        ]
                    },
                    {
                        muscleGroup: 'Back',
                        name: 'Deadlift',
                        soreness: 2,
                        jointPain: 2,
                        pump: 5,
                        intensity: 5,
                        sets: [
                            { reps: 5, weight: 225 },
                            { reps: 5, weight: 225 }
                        ]
                    }
                ]
            }
        },
        {
            id: 'workout-003',
            name: 'Legs and Shoulders',
            dateCompleted: '2025-04-22T18:00:00Z',
            data: {
                Tuesday: [
                    {
                        muscleGroup: 'Legs',
                        name: 'Squat',
                        soreness: 3,
                        jointPain: 1,
                        pump: 5,
                        intensity: 5,
                        sets: [
                            { reps: 8, weight: 225 },
                            { reps: 8, weight: 225 }
                        ]
                    },
                    {
                        muscleGroup: 'Legs',
                        name: 'Lunge',
                        soreness: 2,
                        jointPain: 1,
                        pump: 4,
                        intensity: 4,
                        sets: [
                            { reps: 12, weight: 95 },
                            { reps: 12, weight: 95 }
                        ]
                    }
                ]
            }
        },
        {
            id: 'workout-004',
            name: 'Full Body Circuit',
            dateCompleted: '2025-04-24T18:00:00Z',
            data: {
                Wednesday: [
                    {
                        muscleGroup: 'Chest',
                        name: 'Push-Up',
                        soreness: 2,
                        jointPain: 1,
                        pump: 3,
                        intensity: 4,
                        sets: [
                            { reps: 10, weight: 0 },
                            { reps: 10, weight: 0 }
                        ]
                    },
                    {
                        muscleGroup: 'Legs',
                        name: 'Squat',
                        soreness: 3,
                        jointPain: 2,
                        pump: 4,
                        intensity: 5,
                        sets: [
                            { reps: 8, weight: 135 },
                            { reps: 8, weight: 135 }
                        ]
                    },
                    {
                        muscleGroup: 'FullBody',
                        name: 'Burpee',
                        soreness: 3,
                        jointPain: 1,
                        pump: 4,
                        intensity: 5,
                        sets: [
                            { reps: 15, weight: 0 },
                            { reps: 15, weight: 0 }
                        ]
                    }
                ],
                Friday: [
                    {
                        muscleGroup: 'Legs',
                        name: 'Lunge',
                        soreness: 2,
                        jointPain: 1,
                        pump: 3,
                        intensity: 4,
                        sets: [
                            { reps: 12, weight: 95 },
                            { reps: 12, weight: 95 }
                        ]
                    },
                    {
                        muscleGroup: 'Abs',
                        name: 'Plank',
                        soreness: 1,
                        jointPain: 0,
                        pump: 2,
                        intensity: 3,
                        sets: [
                            { reps: 1, weight: 0 },
                            { reps: 1, weight: 0 }
                        ]
                    }
                ]
            }
        },
        {
            id: 'workout-005',
            name: 'Push Day',
            dateCompleted: '2025-04-26T18:00:00Z',
            data: {
                Thursday: [
                    {
                        muscleGroup: 'Chest',
                        name: 'Push-Up',
                        soreness: 2,
                        jointPain: 1,
                        pump: 3,
                        intensity: 4,
                        sets: [
                            { reps: 12, weight: 0 },
                            { reps: 12, weight: 0 }
                        ]
                    },
                    {
                        muscleGroup: 'Shoulders',
                        name: 'Lateral Raise',
                        soreness: 2,
                        jointPain: 1,
                        pump: 3,
                        intensity: 4,
                        sets: [
                            { reps: 15, weight: 20 },
                            { reps: 15, weight: 20 }
                        ]
                    }
                ]
            }
        }
    ]
};

export default user;
