import React from 'react'
import styled from 'styled-components'

import { formatDate } from '../../../utils/formatDate'

import MoreHorizIcon from '@material-ui/icons/MoreHoriz'

import { Buttons } from '../../common/Button'
import { Card, CardMedia } from '@material-ui/core'
import { Text } from '../../common/Text'

import { PostInfo } from './PostInfo'

export const Post = ({ createdAt, creator, file, _id, likes, message, name, tags, title }) => {
  return (
    <StyledCard>
      <StyledMedia image={file} title={title} />
      <StyledInfo>
        <Text align='left' variant='h6'>{name}</Text>
        <Text align='left' variant='body2'>{formatDate(createdAt)}</Text>
      </StyledInfo>
      <StyledMoreInfo>
        <StyledButton onClick={() => {}}>
          <MoreHorizIcon fontSize='medium' />
        </StyledButton>
      </StyledMoreInfo>
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

const StyledInfo = styled.div`
  color: white;
  left: 20px;
  position: absolute;
  top: 20px;
`

const StyledMoreInfo = styled.div`
  color: white;
  right: 10px;
  position: absolute;
  top: 20px;
`

const StyledButton = styled(Buttons)`
  background-color: transparent;
  color: white;
  :hover {
    background-color: transparent;
  }
`
