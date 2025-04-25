const SelectField = ({
    label,
    value,
    options,
    onChange,
    id,
    disabled = false,
}) => (
    <FormControl fullWidth margin="normal" disabled={disabled}>
        <InputLabel id={`${id}-label`}>{label}</InputLabel>
        <Select
            labelId={`${id}-label`}
            value={value}
            onChange={onChange}
            label={label}>
            {options.map((opt) => (
                <MenuItem key={opt} value={opt}>
                    {opt}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);

export default SelectField