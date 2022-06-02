import React from 'react'

import { Button } from '@material-ui/core'

export const Buttons = ({ children, color, onClick, size = 'small', variant = 'contained', ...rest }) => {
  return (
    <Button color={color} onClick={onClick} size={size} variant={variant} {...rest}>
      {children}
    </Button>
  )
}
