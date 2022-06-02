import React from 'react'
import styled from 'styled-components'

import DeleteIcon from '@material-ui/icons/Delete'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'

import { Buttons } from '../../common/Button'
import { CardActions } from '@material-ui/core'

export const PostActions = () => {
  return (
    <StyledActions>
        <Buttons color='primary' onClick={() => {}}>
          <ThumbUpAltIcon fontSize='small' />
        </Buttons>
        <Buttons color='primary' onClick={() => {}}>
          <DeleteIcon fontSize='small' />
        </Buttons>
      </StyledActions>
  )
}

const StyledActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`
