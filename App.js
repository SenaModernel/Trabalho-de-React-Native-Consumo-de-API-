import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import LoginScreen from './src/screens/Login';
import HomeScreen from './src/screens/Home';
import ProductDetailsScreen from './src/screens/ProductDetails';
import GroupInfoScreen from './src/screens/GroupInfo';

const screens = {
  Login: LoginScreen,
  Home: HomeScreen,
  ProductDetails: ProductDetailsScreen,
  GroupInfo: GroupInfoScreen,
};

export default function App() {
  return <AppNavigator screens={screens} initialRoute="Login" />;
}
