import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Slider } from '@mui/material';

const CompletionDialog = ({ open, onClose, onSubmit }) => {
    const [jointPain, setJointPain] = useState(0);
    const [pump, setPump] = useState(0);
    const [intensity, setIntensity] = useState(0);

    const handleSubmit = () => {
        onSubmit({ jointPain, pump, intensity });
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleSubmit}>
            <DialogTitle>Exercise Completion Ratings</DialogTitle>
            <DialogContent>
                <Typography gutterBottom>
                    Rate your joint pain for this exercise from 0 to 5
                </Typography>
                <Slider
                    value={jointPain}
                    onChange={(e, newValue) => setJointPain(newValue)}
                    step={1}
                    marks
                    min={0}
                    max={5}
                    valueLabelDisplay="auto"
                />
                <Typography gutterBottom style={{ marginTop: '1rem' }}>
                    Rate your pump for this exercise from 0 to 5
                </Typography>
                <Slider
                    value={pump}
                    onChange={(e, newValue) => setPump(newValue)}
                    step={1}
                    marks
                    min={0}
                    max={5}
                    valueLabelDisplay="auto"
                />
                <Typography gutterBottom style={{ marginTop: '1rem' }}>
                    Rate your how difficult this exercise was from 0 to 5
                </Typography>
                <Slider
                    value={intensity}
                    onChange={(e, newValue) => setIntensity(newValue)}
                    step={1}
                    marks
                    min={0}
                    max={5}
                    valueLabelDisplay="auto"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit}>OK</Button>
            </DialogActions>
        </Dialog>
    );
};

export default CompletionDialog