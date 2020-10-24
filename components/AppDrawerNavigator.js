import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import TeacherClasses from '../screens/TeacherClasses'
import AddClasses from '../screens/AddClasses';
import TeacherSettingScreen from '../screens/TeacherSettingScreen';

import { Icon } from 'react-native-elements'
import { materialicons } from '@expo/vector-icons';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions: {
      drawerIcon: <Icon name="home" type='font-awesome5'/>
    }
  },
  AddClasses : {
    screen : AddClasses,
    navigationOptions: {
      drawerIcon: <Icon name="gift" type='font-awesome'/>,
      drawerLabel: 'My Donations'
    }
  },
  
  Settings : {
    screen : TeacherSettingScreen,
    navigationOptions: {
      drawerIcon: <Icon type={'materialicon'} name={'settings'} />,
      drawerLabel: 'Settings'
    }
  },
//   Notification : {
//     screen : NotificationScreen,
//     navigationOptions: {
//       drawerIcon: <Icon name="bell" type='font-awesome'/>,
//       drawerLabel: 'Notifications'
//     }
//   },
  
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })