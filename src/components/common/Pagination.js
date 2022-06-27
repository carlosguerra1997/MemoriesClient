import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { Pagination, PaginationItem } from '@material-ui/lab'
import { Paper } from '@material-ui/core'

export const Paginate = () => {
  return (
    <Paper>
      <StyledPagination
        color='primary'
        count={5}
        page={1}
        renderItem={item => renderPaginationItem(item)}
        variant='outlined'
      />
    </Paper>
  )
}

const renderPaginationItem = (item) => (
  <PaginationItem
    component={Link}
    to={`/posts?page=${1}`}
    {...item}
  />
)

const StyledPagination = styled(Pagination)`
  border-radius: 4px;
  margin-top: 1rem;
  padding: 15px;
`
