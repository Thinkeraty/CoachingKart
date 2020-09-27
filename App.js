import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import AddDataScreen from './screens/AddDataScreen';

import { AppTabNavigator } from './components/AppTabNavigator';

export default class App extends React.Component {
  render() {
    return(
        <AppContainer />
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  // Welcome: { screen: WelcomeScreen },
  AddData: { screen: AddDataScreen },
  BottomTab: { screen: AppTabNavigator }
})

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  
});
