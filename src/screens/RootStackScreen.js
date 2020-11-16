import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

import SplashScreen from './SplashScreen'
import Login from './Auth/Login'
import SignUpScreen from './SignUpScreen'

const RootStack = createStackNavigator()

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode='none'>
    <RootStack.Screen name='SplashScreen' component={SplashScreen} />
    <RootStack.Screen name='SignInScreen' component={Login} />
    <RootStack.Screen name='SignUpScreen' component={SignUpScreen} />
  </RootStack.Navigator>
)

export default RootStackScreen
