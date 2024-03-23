import React from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectBox = (props) => {
  return (
    <FormControl>
        <InputLabel>{props.label}</InputLabel>
        <Select
            required={props.required} value={props.value}
            onChange={(e) => {
                props.select(e.target.value)
            }}
        >
            {props.options.map((option) => (
                <MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>
            ))}
        </Select>
    </FormControl>
  )
}

export default SelectBox