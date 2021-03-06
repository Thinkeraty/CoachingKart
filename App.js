
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import AddDataScreen from './screens/AddDataScreen';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import TeacherClasses from './screens/TeacherClasses'
import AddClasses from './screens/AddClasses';
import SearchClasses from './screens/SearchClasses';
import {AppDrawerNavigator} from './components/AppDrawerNavigator'
import ClassDetails from './screens/ClassDetails';
import EditClasses from './screens/EditClasses';
import StudentSettingScreen from './screens/StudentSettingScreen';
import TeacherSettingScreen from './screens/TeacherSettingScreen';

import { AppTabNavigator } from './components/AppTabNavigator';

export default class App extends React.Component {
  render() {
    return(
        <AppContainer />
    )
  }
}

const SwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  Signup:{ screen: SignupScreen },
  AddData: { screen: AddDataScreen },
  TeacherClasses: { screen: TeacherClasses },
  AddClasses: { screen: AddClasses },
  SearchClasses: { screen: SearchClasses },
  Drawer:{screen: AppDrawerNavigator},
  ClassDetails: {screen: ClassDetails},
  EditClasses: {screen: EditClasses},
  StudentSettingScreen: {screen: StudentSettingScreen},
  TeacherSettingScreen: {screen: TeacherSettingScreen}
  // BottomTab: { screen: AppTabNavigator }
  
})

const AppContainer = createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  
});
