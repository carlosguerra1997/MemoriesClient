import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Formik } from 'formik'
import { commentSchema } from '../../../../../utils/validationSchemas'

import { commentAPost } from '../../../../../actions/posts'

import { Buttons } from '../../../../common/Button'
import { Containers } from '../../../../common/Container'
import { TextFields } from '../../../../common/TextField'
import { Text } from '../../../../common/Text'

export const Comments = ({ post }) => {
  const dispatch = useDispatch()
  const initialValues = { comment: '' }
  const [comments, setComments] = useState([1, 2, 3, 4])

  useEffect(() => {
    setComments([1, 2, 3, 4])
  }, [])

  const handleSubmit = (values, resetForm) => {
    dispatch(commentAPost(post._id, values))
    resetForm()
  }

  return (
    <div>
      <Containers display='flex'>
        <div>
          <Text align='left' gutterBottom variant='h6'>Comments</Text>
          {
            comments.map((c, i) => (
              <Text align='left' key={i} variant='subtitle1'>Comment {i}</Text>
            ))
          }
        </div>
        <Formik initialValues={initialValues} validationSchema={commentSchema} onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}>
          {({ handleSubmit }) => (
            <StyledContainer>
              <Text align='left' gutterBottom variant='h6'>Deja un comentario</Text>
              <TextFields multiline name='comment' maxRows={4} minRows={4} placeholder='Escribe un comentario...' variant='outlined' />
              <StyledButton color='primary' onClick={handleSubmit} type='submit' variant='contained'>Comentar</StyledButton>
            </StyledContainer>
          )}
        </Formik>
      </Containers>
    </div>
  )
}

const StyledContainer = styled(Containers)`
  &&& {
    margin: 0;
    margin-left: 3rem;
    padding: 0;
  }
`

const StyledButton = styled(Buttons)`
  &&& {
    margin-top: .5rem;
    width: 100%;
  }
`
