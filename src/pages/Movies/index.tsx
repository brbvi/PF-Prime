import React from 'react'

import { Container } from './styles'
import { Text } from 'react-native'
import { Header } from '../../components/Header'

export const Movies: React.FC = () => {
  return (
    <Container>
      <Header title="Movies" />
      <Text>Página Movies</Text>
    </Container>
  )
}
