import styled from 'styled-components'
import React from 'react'

import { Divider } from '@material-ui/core'

const StyledDivider = styled(Divider)`
    &&& {
        margin: 0 1.5rem 1rem 1.5rem;
        ${({ color, theme }) => color && `background-color: ${color}`};
    }
`

export const Dividers = ({
  children,
  color = 'black',
  ...rest
}) => <StyledDivider color={color} {...rest}>{children}</StyledDivider>
