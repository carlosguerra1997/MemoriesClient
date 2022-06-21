import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Formik } from 'formik'

import { Auth } from './Auth'
import { Buttons } from '../../common/Button'
import { Containers } from '../../common/Container'
import { Text } from '../../common/Text'
import { TextFields } from '../../common/TextField'

export const SignUp = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const handleSubmit = values => {
    console.log('Values... ', values)
  }

  return (
    <Auth>
      <Text variant='h5'>Registrarse</Text>
      <Formik initialValues={initialValues} onSubmit={(values) => handleSubmit(values)}>
      {({ handleSubmit }) => (
        <>
          <StyledContainer display='flex'>
            <StyledTextFields name='firstName' placeholder='Nombre' />
            <StyledTextFields name='lastName' placeholder='Apellido' />
          </StyledContainer>
          <StyledTextFields name='email' placeholder='Correo electrónico' type='email' />
          <StyledTextFields name='password' placeholder='Contraseña' type='password' />
          <StyledTextFields name='confirmPassword' placeholder='Confirmar contraseña' type='password' />
          <StyledButton color='primary' onClick={handleSubmit}>Registrarse</StyledButton>
          <StyledLink to='/sign-in'>Ya tienes una cuenta? Inicia sesión</StyledLink>
        </>
      )}
    </Formik>
    </Auth>
  )
}

const StyledContainer = styled(Containers)`
  &&& {
    margin-top: 1rem;
    padding: 0;
  }
`

const StyledTextFields = styled(TextFields)`
  &&& {
    padding: .5rem;
  }
`

const StyledButton = styled(Buttons)`
  &&& {
    margin: 1rem 0;
    width: 100%;
  }
`

const StyledLink = styled(Link)`
  color: black;
  font-size: 12px;
  text-decoration: none;
`
