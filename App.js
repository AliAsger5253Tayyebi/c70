import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './screens/search';
import Transaction from './screens/transaction';
export default class App extends React.Component {
  render(){
  return (
  <WRAP/> 
  );
}
}
const TabNavigator = createBottomTabNavigator({
Transaction:Transaction,
  Search:Search

})  
const WRAP = createAppContainer(
TabNavigator)


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
