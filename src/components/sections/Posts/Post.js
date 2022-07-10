import styled from 'styled-components'
import React from 'react'
import { useHistory } from 'react-router-dom'

import { formatDate } from '../../../utils/formatDate'

import { Card, CardMedia } from '@material-ui/core'
import { Text } from '../../common/Text'

import { PostInfo } from './PostInfo'

export const Post = ({ createdAt, creator, file, _id, likes, message, name, tags, title }) => {
  const history = useHistory()

  const handlePostDetails = () => history.push(`/posts/${_id}`)

  return (
    <StyledCard elevation={4} raised>
      <StyledDiv onClick={handlePostDetails}>
        <StyledMedia image={file} title={title} />
        <StyledInfo>
          <Text align='left' variant='h6'>{name}</Text>
          <Text align='left' variant='body2'>{formatDate(createdAt)}</Text>
        </StyledInfo>
      </StyledDiv>
      <PostInfo creator={creator} id={_id} likes={likes} message={message} tags={tags} title={title} />
    </StyledCard>
  )
}

const StyledCard = styled(Card)`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`

const StyledMedia = styled(CardMedia)`
  padding-top: 60%;
  background-color: rgba(0, 0, 0, 0.5);
  background-blend-mode: darken;
`

const StyledDiv = styled.div`
  :hover  {
    cursor: pointer;
  }
`

const StyledInfo = styled.div`
  color: white;
  left: 20px;
  position: absolute;
  top: 20px;
`
