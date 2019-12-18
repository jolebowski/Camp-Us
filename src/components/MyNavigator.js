import React from 'react';

import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';


import Cours from '../pages/Cours.js';

import Bar from './Bar.js';
import Login from '../pages/Login.js';
import BonPlans from '../pages/BonsPlans.js';
import DetailBP from '../components/DetailBP';
import AddBP from '../components/AddBP';



const AuthStackNavigation = createStackNavigator({
  HomeStack: Cours,
  LoginStack: Login,
  RegisterStack: Login,
}, {
  initialRouteName: 'HomeStack',
})

const BPStack = createStackNavigator({ // For header options
  ListBP: BonPlans,
  DetailBP: DetailBP,
  AddBP: AddBP,
}, {
  initialRouteName: 'ListBP',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }

})


const MyDrawerNavigator = createDrawerNavigator({
  Cours : Cours,
  BonPlans : BPStack
 }
  ,{
    drawerPosition : 'left',
    initialRouteName : 'BonPlans',
    contentComponent : Bar,
    backgroundColor: '#E5E5E5',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    contentOptions: {
      activeTintColor: '#8CC7B1',
      inactiveTintColor: '#2B3B4B',
      activeBackgroundColor: 'white'
    }   
  
  }
  );

  const MainNavigation = createSwitchNavigator({
    HomeDrawer: MyDrawerNavigator,
    AuthStack: AuthStackNavigation, // You will use this.props.navigation.replace('HomeDrawer') after login process.
  })
  

export default createAppContainer(MainNavigation);
    
  