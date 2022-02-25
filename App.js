  
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import HomeStack from './src/navigation/mainnav'
import { NavigationContainer } from '@react-navigation/native';
export default class App extends Component{
  render() {
    return (
     
        <NavigationContainer >
            <HomeStack />
        </NavigationContainer>
    );
}
}
