import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    TextField,
    Button,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Rating,
} from '@mui/material';

export default function Feedback() {
    const [category, setCategory] = useState('');
    const [rating, setRating] = useState(0);
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    return (
        <Card style={{ maxWidth: '60%', margin: '2rem auto' }}>
            <CardContent>
                <Typography variant="h4" gutterBottom>
                    Feedback
                </Typography>
                <FormControl fullWidth margin="normal">
                    <InputLabel id="category-label">Category</InputLabel>
                    <Select
                        labelId="category-label"
                        value={category}
                        label="Category"
                        onChange={(e) => setCategory(e.target.value)}>
                        <MenuItem value="Bug">Bug Report</MenuItem>
                        <MenuItem value="Feature">Feature Request</MenuItem>
                        <MenuItem value="UX">UX/UI Feedback</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                    </Select>
                </FormControl>
                <Typography component="legend">Rating</Typography>
                <Rating
                    name="feedback-rating"
                    value={rating}
                    onChange={(_, newValue) => setRating(newValue)}
                />
                <TextField
                    label="Your Email (optional)"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    margin="normal"
                />
                <TextField
                    label="Comments"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    fullWidth
                    multiline
                    rows={4}
                    margin="normal"
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() =>
                        console.log({ category, rating, email, message })
                    }
                    style={{ marginTop: '1rem' }}>
                    Submit Feedback
                </Button>
            </CardContent>
        </Card>
    );
}
