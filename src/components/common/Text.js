/* eslint-disable react/prop-types */

import React from 'react'
import { Typography } from '@material-ui/core'

export const Text = ({
  align = 'center',
  children,
  variant = 'body1',
  ...rest
}) => {
  return <Typography align={align} variant={variant} {...rest}>{children}</Typography>
}
