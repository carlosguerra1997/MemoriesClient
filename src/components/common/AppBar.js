import React from 'react'
import styled from 'styled-components'

import { Formik } from 'formik'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { getAllPosts, getPostsBySearch } from '../../actions/posts'

import { AppBar } from '@material-ui/core'
import { Buttons } from './Button'
import { ChipInputs } from './ChipInput'
import { TextFields } from './TextField'

export const AppBars = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const initialValues = {
    searchMemories: '',
    tags: []
  }

  const handleSubmit = (values, resetForm) => {
    const { searchMemories } = values
    if (searchMemories.trim()) {
      dispatch(getPostsBySearch({ searchMemories }))
      history.push(`/posts/search?searchQuery=${searchMemories}`)
    } else {
      dispatch(getAllPosts())
      history.push('/posts')
    }
    resetForm()
  }

  return (
    <>
      <StyledAppBar color='inherit' elevation={1} position='static'>
        <Formik initialValues={initialValues} onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}>
          {({ handleSubmit }) => (
            <>
              <TextFields name='searchMemories' placeholder='Buscar memorias' />
              <ChipInputs name='tags' />
              <Buttons color='primary' onClick={handleSubmit}>Buscar</Buttons>
            </>
          )}
        </Formik>
      </StyledAppBar>
    </>
  )
}

const StyledAppBar = styled(AppBar)`
  border-radius: 4px;
  display: flex;
  margin-bottom: 1rem;
  padding: 15px;
`
