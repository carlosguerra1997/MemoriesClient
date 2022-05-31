import React from 'react'

import { Button } from '@material-ui/core'

export const Buttons = ({ children, color, onClick, variant = 'contained', ...rest }) => {
  return (
    <Button color={color} onClick={onClick} variant={variant} {...rest}>
      {children}
    </Button>
  )
}
