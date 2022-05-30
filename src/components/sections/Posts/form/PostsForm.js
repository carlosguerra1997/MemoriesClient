import React from 'react'
import styled from 'styled-components'

import { Paper } from '@material-ui/core'
import { Text } from '../../../common/Text'
import { TextFields } from '../../../common/TextField'

export const PostsForm = () => {
  const handleSubmit = () => {

  }

  return (
    <Paper>
      <StyledForm autoComplete='off' onSubmit={handleSubmit}>
        <Text variant='h6'>Añadir recuerdo</Text>
        <TextFields label='Creator' name='creator' variant='outlined' />
      </StyledForm>
    </Paper>
  )
}

const StyledForm = styled.form`
  display: flex;
  flexWrap: wrap;
  justifyContent: center;
`
