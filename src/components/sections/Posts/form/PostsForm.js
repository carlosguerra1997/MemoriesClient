import React from 'react'
import styled from 'styled-components'

import { TextField, Paper, Button} from '@material-ui/core'
import { Text } from '../../../common/Text'

export const PostsForm = () => {

  const handleSubmit = () => {

  }

  return (
    <Paper>
      <StyledForm autoComplete='off' onSubmit={handleSubmit}>

      </StyledForm>
    </Paper>
  )
}

const StyledForm = styled.form`
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
`
