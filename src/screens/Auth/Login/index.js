import React from 'react'

import { H1 } from 'components/Atoms/Fonts'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StatusBar,
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

import { Button } from 'react-native-paper'

import { styles } from './styles'

import * as color from 'utils/constants/colors'

import { useTheme } from 'react-native-paper'

const Login = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  })

  const { colors } = useTheme()

  const textInputChange = (val) => {
    const isValid = val.trim().length >= 4

    setData({
      ...data,
      username: val,
      check_textInputChange: isValid,
      isValidUser: isValid,
    })
  }

  const handlePasswordChange = (val) => {
    const isValidPassword = val.trim().length >= 8

    setData({
      ...data,
      password: val,
      isValidPassword,
    })
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    })
  }

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      })
    } else {
      setData({
        ...data,
        isValidUser: false,
      })
    }
  }

  const loginHandle = (userName, password) => {
    console.log(userName, password)
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle='light-content' />
      <View style={styles.header}>
        <H1 variant='white'>Welcome!</H1>
      </View>
      <Animatable.View
        animation='fadeInUpBig'
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
      >
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
            },
          ]}
        >
          Username
        </Text>
        <View style={styles.action}>
          <FontAwesome name='user-o' color={colors.text} size={20} />
          <TextInput
            placeholder='Your Username'
            placeholderTextColor='#666666'
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize='none'
            onChangeText={(val) => textInputChange(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation='bounceIn'>
              <Feather name='check-circle' color='green' size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation='fadeInLeft' duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 35,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <Feather name='lock' color={colors.text} size={20} />
          <TextInput
            placeholder='Your Password'
            placeholderTextColor='#666666'
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize='none'
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name='eye-off' color='grey' size={20} />
            ) : (
              <Feather name='eye' color='grey' size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation='fadeInLeft' duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{ color: '#009387', marginTop: 15 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <Button
            mode='contained'
            color={color.green}
            accessibilityLabel='Entrar'
            style={styles.buttons}
            onPress={() => {
              loginHandle(data.username, data.password)
            }}
          >
            Entrar
          </Button>

          <Button
            mode='outlined'
            color={color.green}
            accessibilityLabel='Regístrate'
            style={styles.buttons}
            onPress={() => navigation.navigate('SignUpScreen')}
          >
            Regístrate
          </Button>
        </View>
      </Animatable.View>
    </View>
  )
}

export default Login
