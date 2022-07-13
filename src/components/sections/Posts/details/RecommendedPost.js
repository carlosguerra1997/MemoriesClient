import styled from 'styled-components'
import React from 'react'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { formatDate } from '../../../../utils/formatDate'
import { setActivePost } from '../../../../actions/posts'

import { Card, CardMedia, Grid } from '@material-ui/core'
import { PostInfo } from '../PostInfo'
import { Text } from '../../../common/Text'

export const RecommendedPost = ({ creatorName, post }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { createdAt, _id, file, message, tags, title } = post

  const handleOpenPost = () => {
    dispatch(setActivePost(_id))
    history.push(`/posts/${_id}`)
  }

  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <StyledCard elevation={4} raised>
        <StyledDiv onClick={handleOpenPost}>
          <StyledMedia image={file} title={title} />
          <StyledInfo>
            <Text align='left' variant='h6'>{creatorName}</Text>
          <Text align='left' variant='body2'>{formatDate(createdAt)}</Text>
          </StyledInfo>
        </StyledDiv>
        <PostInfo creator={creatorName} id={_id} message={message} tags={tags} title={title} />
      </StyledCard>
    </Grid>
  )
}

const StyledCard = styled(Card)`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
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
