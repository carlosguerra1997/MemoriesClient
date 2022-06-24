import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import memories from '../../../assets/memories.png'
import styled from 'styled-components'

import { checkIfSingedIn, logout } from '../../../actions/auth'

import { AppBar, Toolbar } from '@material-ui/core'

import { Buttons } from '../Button'
import { Containers } from '../Container'
import { Image } from '../Image'
import { Text } from '../Text'

export const Navbar = () => {
  const { user } = useSelector(state => state.auth)

  return (
    <StyledAppBar color='inherit' position='static'>
      <Containers align='center' display='flex'>
        <Text variant='h2'>Recuerdos</Text>
        <Image alt='memories' height='60' src={memories} width='60' />
      </Containers>
      <StyledToolbar>
        { !user ? renderUserNotLogged() : renderUserLogged(user) }
      </StyledToolbar>
    </StyledAppBar>
  )
}

const renderUserLogged = (user) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkIfSingedIn())
  }, [])

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <>
      <StyledText variant='body1'>{user?.name}</StyledText>
      <Buttons color='primary' onClick={handleLogout}>
        <StyledLink to='/sign-in'>Cerrar sesión</StyledLink>
      </Buttons>
    </>
  )
}

const renderUserNotLogged = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkIfSingedIn())
  }, [])

  return (
    <Buttons color='primary'>
      <StyledLink to='/sign-in'>Iniciar sesion</StyledLink>
    </Buttons>
  )
}

const StyledAppBar = styled(AppBar)`
  align-items: center;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 0;
`

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: flex-end;
  width: 400px;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const StyledText = styled(Text)`
  margin-right: 1rem;
`
