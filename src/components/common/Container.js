import React from 'react'
import styled from 'styled-components'

import { Container } from '@material-ui/core'

export const Containers = ({
  children,
  component,
  maxWidth,
  onClick,
  ...rest
}) => {
  return (
    <StyledDiv component={component} maxWidth={maxWidth} onClick={onClick} {...rest}>
      {children}
    </StyledDiv>
  )
}

const StyledDiv = styled(Container)`
    &&& {
      ${({ align }) => align ? `align-items: ${align}` : ''};
      ${({ display }) => display ? `display: ${display}` : ''};
      ${({ justify }) => justify ? `justify-content: ${justify}` : ''};
    }
`
