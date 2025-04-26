import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Grid, Card, CardContent, Typography } from '@mui/material';

import user from '../data/user';

export default function Workouts() {
    const location = useLocation();
    const [message, setMessage] = useState(location.state?.message || null);
    const [templates, setTemplates] = useState(user.workoutTemplates || []);

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [message]);

    return (
        <>
        <h2>Workouts</h2>
            {message && (
                <div
                    style={{
                        padding: '1rem',
                        backgroundColor: '#d4edda',
                        color: '#155724',
                        marginBottom: '1rem',
                        borderRadius: '5px',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        transition: 'opacity 0.5s ease',
                    }}>
                    {message}
                </div>
            )}

            <h2>Templates</h2>
            {templates.length === 0 ? (
              <Typography>No saved templates yet.</Typography>
            ) : (
              <Grid container spacing={2} style={{ marginTop: '1rem' }}>
                {templates.map((template) => (
                  <Grid item key={template.id} xs={12} sm={6} md={4}>
                    <Card>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {template.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                          Created on {new Date(template.createdAt).toLocaleDateString()}
                        </Typography>
                        {Object.entries(template.data).map(([day, exercises]) => (
                          <div key={day} style={{ marginTop: '0.5rem' }}>
                            <Typography variant="subtitle2" color="primary">
                              {day}
                            </Typography>
                            {exercises.map((exercise, idx) => (
                              <Typography key={idx} variant="body2">
                                {exercise.muscleGroup} – {exercise.name}
                              </Typography>
                            ))}
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
        </>
    );
}
