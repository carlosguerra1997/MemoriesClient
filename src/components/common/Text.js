import React from 'react'
import { Typography } from '@material-ui/core'

/* eslint-disable react/prop-types */

export const Text = ({
  align = 'center',
  children,
  variant = 'body1',
  ...rest
}) => {
  return <Typography align={align} variant={variant} {...rest}>{children}</Typography>
}
