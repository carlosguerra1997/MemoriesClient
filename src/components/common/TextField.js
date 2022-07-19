/* eslint-disable react/prop-types */
import React from 'react'
import { useField } from 'formik'

import { TextField } from '@material-ui/core'

export const TextFields = ({ name, onKeyPress, placeholder, type = 'text', ...rest }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <TextField
      error={meta.error}
      helperText={meta.error}
      fullWidth
      onChange={ ({ target }) => helpers.setValue(target.value) }
      onKeyPress={onKeyPress}
      placeholder={placeholder}
      type={type}
      value={field.value}
      {...rest}
    />
  )
}
