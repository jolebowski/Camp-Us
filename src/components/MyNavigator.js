
import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Cours from '../pages/Cours.js';

import Bar from './Bar.js';
import Login from '../pages/Login.js';
import BonPlans from '../pages/BonsPlans.js';


const MyNavigator = createDrawerNavigator({
  Cours : Cours,
  BonPlans : BonPlans
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
  

export default createAppContainer(MyNavigator);
    
  