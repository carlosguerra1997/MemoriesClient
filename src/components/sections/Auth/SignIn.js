import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { Formik } from 'formik'

import { Auth } from './Auth'
import { Buttons } from '../../common/Button'
import { Text } from '../../common/Text'
import { TextFields } from '../../common/TextField'

export const SignIn = () => {
  const initialValues = {
    email: '',
    password: ''
  }

  const handleSubmit = values => {
    console.log('Values... ', values)
  }

  return (
    <Auth>
      <Text variant='h5'>Iniciar sesión</Text>
      <Formik initialValues={initialValues} onSubmit={(values) => handleSubmit(values)}>
        {({ handleSubmit }) => (
          <>
            <StyledTextFields name='email' placeholder='Correo electrónico' type='email' />
            <StyledTextFields name='password' placeholder='Contraseña' type='password' />
            <StyledButton color='primary' onClick={handleSubmit}>Iniciar sesión</StyledButton>
            <StyledLink to='/sign-up'>Todavía no tienes una cuenta? Regístrate</StyledLink>
          </>
        )}
      </Formik>
    </Auth>
  )
}

const StyledTextFields = styled(TextFields)`
  &&& {
    margin-top: 1rem;
  }
`

const StyledButton = styled(Buttons)`
  &&& {
    margin: 1.5rem 0 0 0;
    width: 100%;
  }
`

const StyledLink = styled(Link)`
  color: black;
  font-size: 12px;
  margin-top: 1rem;
  text-decoration: none;
`
