import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import React from 'react';

const RenderSelect = ({ label, value, onChange, options, id }) => (
    <FormControl fullWidth margin="normal">
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Select
            labelId={`${id}-label`}
            value={value}
            onChange={onChange}
            label={label}
        >
            {options.map((option) => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);

export default RenderSelect;