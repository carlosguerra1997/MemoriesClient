/* eslint-disable react/prop-types */
import React from 'react'
import { useForm } from 'react-hook-form'

import { TextField } from '@material-ui/core'

export const TextFields = ({ children, label, name, required, variant = 'standard', ...rest }) => {
  const { formState: { errors }, register } = useForm()

  return (
    <TextField
      label={label}
      fullWidth
      name={name}
      required={required}
      {...register(name, { required })}
      variant={variant}
      {...rest}
    >
      {children}
    </TextField>
  )
}
