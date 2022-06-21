import React from 'react'
import styled from 'styled-components'

import LockOutlinedIcon from '@material-ui/icons/LockOutlined'

import { Avatar, Paper } from '@material-ui/core'

import { Containers } from '../../common/Container'

export const Auth = ({ children }) => {
  return (
    <Containers component='main' maxWidth='xs'>
      <StyledPaper elevation={2}>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        { children }
      </StyledPaper>
    </Containers>
  )
}

const StyledPaper = styled(Paper)`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  padding: 1rem;
`

const StyledAvatar = styled(Avatar)`
  margin-bottom: 1rem;
`
