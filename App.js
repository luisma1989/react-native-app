import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { Provider as PaperProvider } from 'react-native-paper'

import RootStackScreen from 'screens/RootStackScreen'

const App: () => React$Node = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
