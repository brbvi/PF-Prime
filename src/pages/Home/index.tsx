import React, { useState, useEffect } from 'react'
import { ScrollView } from 'react-native'

import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
  Title,
  BannerButton,
  Banner,
  SliderMovie
} from './styles'

import { Header } from '../../components/Header'
import { SliderItem } from '../../components/SliderItem'

import { Feather } from '@expo/vector-icons'

import { api, key } from '../../services/api'
import { getListMovies } from '../../utils/movie'

export const Home: React.FC = () => {
  const [nowMovies, setNowMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [topMovies, setTopMovies] = useState([])

  useEffect(() => {
    const isActive = true

    async function getMovies() {
      const [nowData, popularData, topData] = await Promise.all([
        api.get('/movie/now_playing', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1
          }
        }),
        api.get('/movie/popular', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1
          }
        }),
        api.get('/movie/top_rated', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1
          }
        })
      ])

      const nowList = getListMovies(10, nowData.data.results)
      const popularList = getListMovies(5, popularData.data.results)
      const topList = getListMovies(10, topData.data.results)

      setNowMovies(nowList)
      setPopularMovies(popularList)
      setTopMovies(topList)
    }
    getMovies()
  }, [])

  return (
    <Container>
      <Header title="Parças Flix Prime" />
      <SearchContainer>
        <Input placeholder="Ex vingadores" />
        <SearchButton>
          <Feather name="search" size={30} color="#FFF" />
        </SearchButton>
      </SearchContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em Cartaz</Title>
        <BannerButton activeOpacity={0.5} onPress={() => alert('TEST')}>
          <Banner
            resizeMethod="resize"
            source={{
              uri: 'https://images.unsplash.com/photo-1630710478039-9c680b99f800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
            }}
          />
        </BannerButton>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={nowMovies}
          renderItem={({ item }) => <SliderItem data={item} />}
          keyExtractor={(item, index) => String(index)}
        />

        <Title>Populares</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularMovies}
          renderItem={({ item }) => <SliderItem data={item} />}
          keyExtractor={(item, index) => String(index)}
        />

        <Title>Mais votados</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={topMovies}
          renderItem={({ item }) => <SliderItem data={item} />}
          keyExtractor={(item, index) => String(index)}
        />
      </ScrollView>
    </Container>
  )
}
