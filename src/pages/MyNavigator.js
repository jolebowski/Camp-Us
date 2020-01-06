{/* MyNavigator component */ }
{/* To navigate between screen/stack */ }

import {
  createStackNavigator,
  createDrawerNavigator,
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';


import Cours from './Cours.js';
import Bar from '../components/Bar';
import Login from './Login';
import Home from './Home';
import SignUp from './SignUp';
import ForgetPassword from './ForgetPassword';
import TimeTable from './TimeTable';
//import BonPlans from './BonsPlans.js';
//import DetailBP from '../components/DetailBP';
//import AddBP1 from '../components/AddBPpart1';
//import AddBP2 from '../components/AddBPpart2';


const AuthStackNavigation = createStackNavigator(
  {
    Login: Login,
    SignUp: SignUp,
    ForgetPassword: ForgetPassword,
    Home: Home
  },
  {
    initialRouteName: 'Login',
  }
);



/*const BPStack = createStackNavigator({ // For header options
  ListBP: BonPlans,
  DetailBP: DetailBP,
  AddBP1: AddBP1,
  AddBP2: AddBP2

}, {
  initialRouteName: 'ListBP',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }

})*/


const MyDrawerNavigator = createDrawerNavigator({
  Home: Home,
  Cours: Cours,
  TimeTable: TimeTable
  //BonPlans : BPStack
}
  , {
    drawerPosition: 'left',
    initialRouteName: 'Home',
    contentComponent: Bar,
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
  AuthStack: AuthStackNavigation, // Utilise this.props.navigation.replace('HomeDrawer') après s'être connecté.
  HomeDrawer: MyDrawerNavigator
}, {
  initialRouteName: 'AuthStack',
})


export default createAppContainer(MainNavigation);

