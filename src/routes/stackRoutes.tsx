import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../pages/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export const StackRoutes = () => {
  return (
    <Navigator>
      <Screen name="Home" component={Home} options={{ headerShown: false }} />
    </Navigator>
  )
}
