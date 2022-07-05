import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import memoriesLogo from '../../../assets/memories-Logo.png'
import memoriesText from '../../../assets/memories-Text.png'

import styled from 'styled-components'

import { checkIfSingedIn, logout } from '../../../actions/auth'
import { getAllPosts } from '../../../actions/posts'

import { AppBar, Toolbar } from '@material-ui/core'

import { Buttons } from '../Button'
import { Image } from '../Image'
import { Text } from '../Text'

export const Navbar = () => {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const handleGoHome = () => {
    dispatch(getAllPosts())
  }

  return (
    <StyledAppBar color='inherit' position='static'>
      <StyledContainer to='/posts' onClick={handleGoHome}>
        <Image alt='memories' height='45' src={memoriesText} />
        <StyledImage alt='memories' height='40' src={memoriesLogo} />
      </StyledContainer>
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
  justify-content: space-between;
  margin: 30px 0;
`

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: flex-end;
  width: 400px;
`

const StyledContainer = styled(Link)`
  margin-left: 1rem;
`

const StyledImage = styled(Image)`
  margin-left: 1rem;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const StyledText = styled(Text)`
  margin-right: 1rem;
`
