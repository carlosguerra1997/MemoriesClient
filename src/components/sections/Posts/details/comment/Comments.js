import styled from 'styled-components'
import React from 'react'
import { useDispatch } from 'react-redux'

import { Formik } from 'formik'
import { commentSchema } from '../../../../../utils/validationSchemas'

import { NO_COMMENTS } from '../../../../../constants'

import { commentAPost } from '../../../../../actions/posts'

import { Buttons } from '../../../../common/Button'
import { Containers } from '../../../../common/Container'
import { TextFields } from '../../../../common/TextField'
import { Text } from '../../../../common/Text'

export const Comments = ({ post }) => {
  const dispatch = useDispatch()
  const initialValues = { comment: '' }
  const { comments } = post

  const handleSubmit = (values, resetForm) => {
    dispatch(commentAPost(post._id, values))
    resetForm()
  }

  return (
    <div>
      <Containers display='flex' justify='space-between'>
        <div>
          <Text align='left' gutterBottom variant='h6'>Comentarios</Text>
          { comments.length ? renderComments(comments) : NO_COMMENTS }
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

const renderComments = comments => {
  return (
    <StyledCommentDiv>
      {
        comments.map(comment => (
          <Text align='left' key={comment} variant='subtitle1'>{comment}</Text>
        ))
      }
    </StyledCommentDiv>
  )
}

const StyledContainer = styled(Containers)`
  &&& {
    margin: 0;
    margin-left: 3rem;
    padding: 0;
    width: 50%;
  }
`

const StyledCommentDiv = styled(Containers)`
  &&& {
    padding: 0;
    width: 100%;
  }
`

const StyledButton = styled(Buttons)`
  &&& {
    margin-top: .5rem;
    width: 100%;
  }
`
