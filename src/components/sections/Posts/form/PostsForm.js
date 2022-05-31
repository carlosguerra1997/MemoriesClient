import React, { useState } from 'react'
import styled from 'styled-components'

import { Formik } from 'formik'

import { Buttons } from '../../../common/Button'
import FileBase from 'react-file-base64'
import { Paper } from '@material-ui/core'
import { Text } from '../../../common/Text'
import { TextFields } from '../../../common/TextField'

export const PostsForm = () => {
  const [photo, setPhoto] = useState('')

  const initialValues = {
    creator: '',
    title: '',
    message: '',
    tags: [],
    image: photo
  }

  const handleSubmit = values => {
    console.log('Values... ', values)
  }

  return (
    <Formik initialValues={initialValues} onSubmit={values => handleSubmit(values)}>
      {({ handleSubmit }) => (
          <Paper>
            <Text variant='h6'>Añadir recuerdo</Text>
            <StyledForm autoComplete='off'>
              <StyledTextField name='creator' placeholder='Usuario' />
              <StyledTextField name='title' placeholder='Título' />
              <StyledTextField name='message' placeholder='Mensaje' />
              <StyledTextField name='tags' placeholder='Tags ej. #Comida' />
              <FileBase
                name='photo'
                multiple={false}
                onDone={({ base64 }) => setPhoto(base64)}
                type='file'
              />
              <StyledButton color='primary' onClick={handleSubmit}>Submit</StyledButton>
            </StyledForm>
          </Paper>
      )}
    </Formik>
  )
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flexWrap: wrap;
  justifyContent: center;
  padding: 1rem;
`

const StyledTextField = styled(TextFields)`
  margin-bottom: 1rem;
`

const StyledButton = styled(Buttons)`
  margin-top: 1rem;
`
