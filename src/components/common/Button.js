import React from 'react'

import { Button } from '@material-ui/core'

export const Buttons = ({ children, color, onClick, size = 'small', type = 'submit', variant = 'contained', ...rest }) => {
  return (
    <Button color={color} onClick={onClick} size={size} type={type} variant={variant} {...rest}>
      {children}
    </Button>
  )
}
