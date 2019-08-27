import React, { Component } from 'react';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import ForgetPassword from './src/pages/ForgetPassword';
import { createStackNavigator, createAppContainer } from 'react-navigation'; // Version can be specified in package.json

const RootStack = createStackNavigator(
  {
    Login: Login,
    SignUp: SignUp,
    ForgetPassword: ForgetPassword
  },
  {
    initialRouteName: 'Login',
  }
);
const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}
