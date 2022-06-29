import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Pagination, PaginationItem } from '@material-ui/lab'
import { Paper } from '@material-ui/core'

export const Paginate = () => {
  return (
    <StyledPaper>
      <Pagination
        color='primary'
        count={5}
        page={1}
        renderItem={item => renderPaginationItem(item)}
        variant='outlined'
      />
    </StyledPaper>
  )
}

const renderPaginationItem = (item) => (
  <PaginationItem
    component={Link}
    to={`/posts?page=${1}`}
    {...item}
  />
)

const StyledPaper = styled(Paper)`
  border-radius: 4px;
  margin-top: 1rem;
  padding: 15px;
`
