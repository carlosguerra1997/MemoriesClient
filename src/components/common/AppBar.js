import React from 'react'
import styled from 'styled-components'

import { Formik } from 'formik'

import { useHistory } from 'react-router-dom'
// import { useGetPage } from '../../../hooks/useGetPage'
// import { useSearchQuery } from '../../../hooks/useSearchQuery'

import { AppBar } from '@material-ui/core'

import { Buttons } from './Button'
import { ChipInputs } from './ChipInput'
import { TextFields } from './TextField'

export const AppBars = () => {
  const history = useHistory()

  const initialValues = {
    searchMemories: '',
    tags: []
  }

  const handleSubmit = (values) => {
    if (values.searchMemories.trim()) {
      console.log(values)
    } else {
      history.push('/')
    }
  }

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      // search post
    }
  }

  return (
    <>
      <StyledAppBar color='inherit' elevation={1} position='static'>
        <Formik initialValues={initialValues} onSubmit={(values, { resetForm }) => handleSubmit(values, resetForm)}>
          {({ handleSubmit }) => (
            <>
              <TextFields name='searchMemories' onKeyPress={handleKeyPress} placeholder='Buscar memorias' />
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
