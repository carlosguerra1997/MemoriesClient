import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { Formik } from 'formik'

import { Buttons } from '../../../common/Button'
import FileBase from 'react-file-base64'
import { Paper } from '@material-ui/core'
import { Text } from '../../../common/Text'
import { TextFields } from '../../../common/TextField'
import { addPost } from '../../../../actions/posts'

export const PostsForm = () => {
  const dispatch = useDispatch()
  const [photo, setPhoto] = useState('')

  const initialValues = {
    title: '',
    message: '',
    tags: [],
    file: ''
  }

  const handleSubmit = (values, resetForm) => {
    values.file = photo
    dispatch(addPost(values))
    resetForm()
  }

  return (
    <Formik initialValues={initialValues} onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}>
      {({ handleSubmit }) => (
          <Paper>
            <StyledText variant='h6'>Añadir recuerdo</StyledText>
            <StyledForm autoComplete='off'>
              <StyledTextField name='title' placeholder='Título' />
              <StyledTextField name='message' placeholder='Mensaje' />
              <StyledTextField name='tags' placeholder='Tags ej. #realfood #fruit' />
              <FileBase
                name='image'
                multiple={false}
                onDone={({ base64 }) => setPhoto(base64)}
                type='file'
              />
              <StyledButton color='primary' onClick={handleSubmit}>Publicar</StyledButton>
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

const StyledText = styled(Text)`
  padding-top: 1rem;
`

const StyledTextField = styled(TextFields)`
  margin-bottom: 1rem;
`

const StyledButton = styled(Buttons)`
  margin-top: 1rem;
`
