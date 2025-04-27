import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Slider } from '@mui/material';

const SorenessDialog = ({ open, onClose, onSubmit, muscleGroup }) => {
    const [soreness, setSoreness] = useState(0);

    const handleSubmit = () => {
        onSubmit(soreness);
        onClose();
    };

    return (
        <Dialog open={open} onClose={handleSubmit}>
            <DialogTitle>Soreness Rating</DialogTitle>
            <DialogContent>
                <Typography gutterBottom>
                    How sore was your {muscleGroup} coming in to this workout from 0 to 5?
                </Typography>
                <Slider
                    value={soreness}
                    onChange={(e, newValue) => setSoreness(newValue)}
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

export default SorenessDialog