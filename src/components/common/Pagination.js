import styled from 'styled-components'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'

import { getAllPosts } from '../../actions/posts'

import { Pagination, PaginationItem } from '@material-ui/lab'
import { Paper } from '@material-ui/core'

export const Paginate = ({ page }) => {
  const dispatch = useDispatch()
  const { numberOfPages } = useSelector(state => state.posts)

  useEffect(() => {
    if (page) dispatch(getAllPosts(page))
  }, [page])

  return (
    <StyledPaper>
      <Pagination
        color='primary'
        count={Number(numberOfPages)}
        page={Number(page) || 1}
        renderItem={item => renderPaginationItem(item)}
        variant='outlined'
      />
    </StyledPaper>
  )
}

const renderPaginationItem = (item) => (
  <PaginationItem
    component={Link}
    to={`/posts?page=${item.page}`}
    {...item}
  />
)

const StyledPaper = styled(Paper)`
  border-radius: 4px;
  margin-top: 1rem;
  padding: 15px;
`
