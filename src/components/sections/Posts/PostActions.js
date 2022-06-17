import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { deleteAPost, likeAPost } from '../../../actions/posts'

import DeleteIcon from '@material-ui/icons/Delete'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'

import { Buttons } from '../../common/Button'
import { CardActions } from '@material-ui/core'
import { Text } from '../../common/Text'

export const PostActions = ({ id, likes }) => {
  const dispatch = useDispatch()

  const handleLikePost = () => {
    dispatch(likeAPost(id))
  }

  const handleDeletePost = () => {
    dispatch(deleteAPost(id))
  }

  return (
    <StyledActions>
        <Buttons color='primary' onClick={handleLikePost}>
          <ThumbUpAltIcon fontSize='small' />
          <StyledText variant='h6'>{likes}</StyledText>
        </Buttons>
        <Buttons color='primary' onClick={handleDeletePost}>
          <DeleteIcon fontSize='small' />
        </Buttons>
      </StyledActions>
  )
}

const StyledActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`

const StyledText = styled(Text)`
  margin-left: .5rem;
`
