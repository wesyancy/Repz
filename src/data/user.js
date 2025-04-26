let user = {
    mainInfo: {
        username: null,
        id: null,
        email: null,
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
          data: {
            Monday: [
              {
                muscleGroup: 'Chest',
                name: 'Barbell Bench Press'
              },
              {
                muscleGroup: 'Chest',
                name: 'Incline Bench Press'
              },
              {
                muscleGroup: 'Back',
                name: 'Wide-Grip Pull-Up'
              },
              {
                muscleGroup: 'Back',
                name: 'Deadlift'
              }
            ],
            Thursday: [
              {
                muscleGroup: 'Chest',
                name: 'Incline Bench Press'
              }
            ]
          }
        },
        {
            id: 'template-002',
            name: 'Chest and Backsss',
            createdAt: '2025-04-20T18:00:00Z',
            isActive: false,
            data: {
              Monday: [
                {
                  muscleGroup: 'Chest',
                  name: 'Barbell Bench Press'
                },
                {
                  muscleGroup: 'Chest',
                  name: 'Incline Bench Press'
                },
                {
                  muscleGroup: 'Back',
                  name: 'Wide-Grip Pull-Up'
                },
                {
                  muscleGroup: 'Back',
                  name: 'Deadlift'
                }
              ],
              Thursday: [
                {
                  muscleGroup: 'Chest',
                  name: 'Incline Bench Press'
                }
              ]
            }
          },
      ],
    workoutData: [
        {
            id: 'workout-002',
            name: 'Chest and Back',
            dateCompleted: '2025-04-20T18:00:00Z',
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
                            {
                                reps: 8,
                                weight: 135,
                            },
                            {
                                reps: 8,
                                weight: 135,
                            },
                        ],
                    },
                    {
                        muscleGroup: 'Chest',
                        name: 'Incline Bench Press',
                        soreness: 2,
                        jointPain: 1,
                        pump: 3,
                        intensity: 4,
                        sets: [
                            {
                                reps: 10,
                                weight: 115,
                            },
                        ],
                    },
                    {
                        muscleGroup: 'Back',
                        name: 'Wide-Grip Pull-Up',
                        soreness: 1,
                        jointPain: 1,
                        pump: 4,
                        intensity: 4,
                        sets: [
                            {
                                reps: 8,
                                weight: 0,
                            },
                        ],
                    },
                    {
                        muscleGroup: 'Back',
                        name: 'Deadlift',
                        soreness: 2,
                        jointPain: 2,
                        pump: 5,
                        intensity: 5,
                        sets: [
                            {
                                reps: 5,
                                weight: 225,
                            },
                        ],
                    },
                ],
                Thursday: [
                    {
                        muscleGroup: 'Chest',
                        name: 'Barbell Bench Press',
                        soreness: 3,
                        jointPain: 2,
                        pump: 4,
                        intensity: 5,
                        sets: [
                            {
                                reps: 8,
                                weight: 135,
                            },
                            {
                                reps: 8,
                                weight: 135,
                            },
                        ],
                    },
                    {
                        muscleGroup: 'Chest',
                        name: 'Incline Bench Press',
                        soreness: 2,
                        jointPain: 1,
                        pump: 3,
                        intensity: 4,
                        sets: [
                            {
                                reps: 10,
                                weight: 115,
                            },
                        ],
                    },
                    {
                        muscleGroup: 'Back',
                        name: 'Wide-Grip Pull-Up',
                        soreness: 1,
                        jointPain: 1,
                        pump: 4,
                        intensity: 4,
                        sets: [
                            {
                                reps: 8,
                                weight: 0,
                            },
                        ],
                    },
                    {
                        muscleGroup: 'Back',
                        name: 'Deadlift',
                        soreness: 2,
                        jointPain: 2,
                        pump: 5,
                        intensity: 5,
                        sets: [
                            {
                                reps: 5,
                                weight: 225,
                            },
                        ],
                    },
                ],
            },
        },
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
                            {
                                reps: 8,
                                weight: 135,
                            },
                            {
                                reps: 8,
                                weight: 135,
                            },
                        ],
                    },
                    {
                        muscleGroup: 'Chest',
                        name: 'Incline Bench Press',
                        soreness: 2,
                        jointPain: 1,
                        pump: 3,
                        intensity: 4,
                        sets: [
                            {
                                reps: 10,
                                weight: 115,
                            },
                        ],
                    },
                    {
                        muscleGroup: 'Back',
                        name: 'Wide-Grip Pull-Up',
                        soreness: 1,
                        jointPain: 1,
                        pump: 4,
                        intensity: 4,
                        sets: [
                            {
                                reps: 8,
                                weight: 0,
                            },
                        ],
                    },
                    {
                        muscleGroup: 'Back',
                        name: 'Deadlift',
                        soreness: 2,
                        jointPain: 2,
                        pump: 5,
                        intensity: 5,
                        sets: [
                            {
                                reps: 5,
                                weight: 225,
                            },
                        ],
                    },
                ],
                Thursday: [
                    {
                        muscleGroup: 'Chest',
                        name: 'Barbell Bench Press',
                        soreness: 3,
                        jointPain: 2,
                        pump: 4,
                        intensity: 5,
                        sets: [
                            {
                                reps: 8,
                                weight: 135,
                            },
                            {
                                reps: 8,
                                weight: 135,
                            },
                        ],
                    },
                    {
                        muscleGroup: 'Chest',
                        name: 'Incline Bench Press',
                        soreness: 2,
                        jointPain: 1,
                        pump: 3,
                        intensity: 4,
                        sets: [
                            {
                                reps: 10,
                                weight: 115,
                            },
                        ],
                    },
                    {
                        muscleGroup: 'Back',
                        name: 'Wide-Grip Pull-Up',
                        soreness: 1,
                        jointPain: 1,
                        pump: 4,
                        intensity: 4,
                        sets: [
                            {
                                reps: 8,
                                weight: 0,
                            },
                        ],
                    },
                    {
                        muscleGroup: 'Back',
                        name: 'Deadlift',
                        soreness: 2,
                        jointPain: 2,
                        pump: 5,
                        intensity: 5,
                        sets: [
                            {
                                reps: 5,
                                weight: 225,
                            },
                        ],
                    },
                ],
            },
        },
    ],
};
export default user;
