/* eslint-disable react/prop-types */

import React from 'react'
import { Typography } from '@material-ui/core'

export const Text = ({
  align = 'center',
  children,
  component,
  variant = 'body1',
  ...rest
}) => {
  return <Typography align={align} component={component} variant={variant} {...rest}>{children}</Typography>
}
