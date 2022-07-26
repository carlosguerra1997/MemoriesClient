import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'

import { Formik } from 'formik'

import { signIn } from '../../../actions/auth'

import { Auth } from './Auth'
import { Buttons } from '../../common/Button'
import { Error } from '../../common/Error'
import { Text } from '../../common/Text'
import { TextFields } from '../../common/TextField'

export const SignIn = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { error, hasError } = useSelector(state => state.loading)

  const initialValues = {
    email: '',
    password: ''
  }

  useEffect(() => {
    const user = localStorage.getItem('profile')
    if (user) history.push('/posts')
  }, [])

  const handleSubmit = values => {
    dispatch(signIn(values))
    if (!hasError) history.push('/')
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
      { hasError && <Error>{error}</Error> }
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
