import React from 'react'

import { Feather } from '@expo/vector-icons'

import { Container, MenuButton, Title } from './styles'
import { useNavigation, DrawerActions } from '@react-navigation/native'

interface HomeProps {
  title: string
}

export const Header: React.FC<HomeProps> = ({ title }) => {
  const navigation = useNavigation()

  return (
    <Container>
      <MenuButton onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <Feather name="menu" size={36} color="#FFF" />
      </MenuButton>
      <Title>{title}</Title>
    </Container>
  )
}
