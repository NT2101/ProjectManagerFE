/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import React from 'react';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form'
InputField.propTypes = {

};

function InputField({ form, name, label }) {
    const { formState } = form;
    const { errors } = formState;
    const hasError = errors[name];

    return (
        <div>
            <Controller
                control={form.control}
                name={name}
                render={({
                    field: { onChange, onBlur, name },
                }) => (
                    <TextField
                        onBlur={onBlur} // notify when input is touched
                        onChange={onChange} // send value to hook form
                        fullWidth
                        variant="outlined"
                        label={label}
                        id={name}
                        error={!!hasError}
                        helperText={errors[name]?.message}
                        margin='normal'
                    />
                )}
            />
        </div>
    );
}

export default InputField;