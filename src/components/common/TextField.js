/* eslint-disable react/prop-types */
import React from 'react'
import { useField } from 'formik'

import { TextField } from '@material-ui/core'

export const TextFields = ({ name, placeholder, ...rest }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <TextField
      error={meta.error}
      fullWidth
      onChange={ ({ target }) => helpers.setValue(target.value) }
      placeholder={placeholder}
      value={field.value}
      {...rest}
    />
  )
}
