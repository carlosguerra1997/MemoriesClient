import styled from 'styled-components'
import React, { useEffect, useState } from 'react'

import { Formik } from 'formik'

import { Containers } from '../../../../common/Container'
import { TextFields } from '../../../../common/TextField'
import { Text } from '../../../../common/Text'

export const Comments = ({ post }) => {
  const initialValues = { newComment: '' }
  const [comments, setComments] = useState([1, 2, 3, 4])
  console.log('Post... ', post)

  useEffect(() => {
    setComments([1, 2, 3, 4])
  }, [])

  const handleSubmit = (values, resetForm) => {
    resetForm()
  }

  return (
    <div>
      <div>
        <div>
          <Text align='left' gutterBottom variant='h6'>Comments</Text>
          {
            comments.map((c, i) => (
              <Text align='left' key={i} variant='subtitle1'>Comment {i}</Text>
            ))
          }
        </div>
        <Formik initialValues={initialValues} onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}>
          {({ handleSubmit }) => (
            <StyledContainer>
              <Text gutterBottom variant='h6'>Deja un comentario</Text>
              <TextFields fullWidth name='newComment' placeholder='Escribe un comentario...' />
            </StyledContainer>
          )}
        </Formik>
      </div>
    </div>
  )
}

const StyledContainer = styled(Containers)`
  width: 70%;
`
