import { Button } from '@mui/material';
import React from 'react';

const RenderButton = ({
    label,
    onClick,
    variant = 'contained',
    color = 'primary',
    size = 'medium',
    style = {},
    disabled = false,
}) => (
    <Button
        onClick={onClick}
        variant={variant}
        color={color}
        size={size}
        style={style}
        disabled={disabled}
    >
        {label}
    </Button>
);

export default RenderButton;