import React from 'react'

import { Container, SearchContainer, Input, SearchButton } from './styles'

import { Header } from '../../components/Header'
import { Feather } from '@expo/vector-icons'

export const Home: React.FC = () => {
  return (
    <Container>
      <Header title="Parças Flix Prime" />
      <SearchContainer>
        <Input placeholder="Ex vingadores" />
        <SearchButton>
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>
    </Container>
  )
}
