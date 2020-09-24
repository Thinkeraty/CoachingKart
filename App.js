import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

export default class App extends React.Component {
  render() {
    return(
      <AppContainer />
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Login: { screen: LoginScreen },
  Signup: { screen: SignupScreen }
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  
});
