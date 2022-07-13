import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { deleteAPost, likeAPost } from '../../../actions/posts'

import DeleteIcon from '@material-ui/icons/Delete'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined'

import { Buttons } from '../../common/Button'
import { CardActions } from '@material-ui/core'
import { Text } from '../../common/Text'

export const PostActions = ({ creator, id, likes }) => {
  const user = JSON.parse(localStorage.getItem('profile'))
  const dispatch = useDispatch()

  const handleLikePost = () => {
    dispatch(likeAPost(id))
  }

  const handleDeletePost = async () => {
    dispatch(deleteAPost(id))
  }

  return (
    <StyledActions>
        <Buttons color='primary' onClick={handleLikePost} variant='text'>
          <Likes likes={likes} />
        </Buttons>
        { user?.userInfo.id === creator &&
          <Buttons color='primary' onClick={handleDeletePost} variant='text'>
            <DeleteIcon fontSize='small' />
          </Buttons>
        }
      </StyledActions>
  )
}

const Likes = (likes) => {
  const user = JSON.parse(localStorage.getItem('profile'))

  if (likes?.likes?.length > 0) {
    return likes.likes.find(like => like === user?.userInfo.id)
      ? (
        <>
          <ThumbUpAltIcon fontSize='small' />
          <StyledText variant='body2'>{likes.likes.length} likes</StyledText>
        </>
        )
      : (
        <>
          <ThumbUpAltOutlined fontSize='small' />
          <StyledText variant='body2'>Like</StyledText>
        </>
        )
  }

  return (
    <>
      <ThumbUpAltOutlined fontSize='small' />
      <StyledText variant='body2'>Like</StyledText>
    </>
  )
}

const StyledActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`

const StyledText = styled(Text)`
  margin-left: .5rem;
`
