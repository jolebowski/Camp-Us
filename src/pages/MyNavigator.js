
import { Text, Image } from 'react-native';
import { Container, Content, Header, Left, Body, Icon } from 'native-base';
import { createDrawerNavigator, DrawerItems, DrawerView,createAppContainer } from 'react-navigation';
import React  from 'react'
import About from './About.js';
import Search from './Search.js';
import Cours from './Cours.js';
import Bar from './Bar.js';



const MyNavigator = createDrawerNavigator({
  Cours : Cours,
  Search : Search,
  About : About, 
 }
  ,{
    drawerPosition : 'left',
    initialRouteName : 'About',
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
  

export default createAppContainer(MyNavigator);
    
  