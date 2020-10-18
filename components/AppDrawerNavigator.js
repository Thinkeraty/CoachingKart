import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import TeacherClasses from '../screens/TeacherClasses'
import AddClasses from '../screens/AddClasses';
// import NotificationScreen from '../screens/NotificationScreen';
// import SettingScreen from '../screens/SettingScreen';

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
//    RecievedBookScreen: {
//     screen : RecievedBookScreen,
//     navigationOptions: {
//       drawerIcon: <Icon name="gift" type='font-awesome'/>,
//       drawerLabel: 'Recieved Books'
//     }
//   },
//   Notification : {
//     screen : NotificationScreen,
//     navigationOptions: {
//       drawerIcon: <Icon name="bell" type='font-awesome'/>,
//       drawerLabel: 'Notifications'
//     }
//   },
//   Setting : {
//     screen : SettingScreen,
//     navigationOptions: {
//       drawerIcon: <Icon type={'materialicon'} name={'settings'} />,
//       drawerLabel: 'Settings'
//     }
//   }
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })