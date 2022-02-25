import React, {Component} from 'react';

import {View, Text} from 'react-native';
export default class Success extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            backgroundColor: '#00cdac',
            height: '6%',
            width: '80%',
            borderRadius: 8,
            top: '25%',
            left: '9%',
          }}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: 'white',
              top: '25%',
              letterSpacing: 1,
            }}>
            Success
          </Text>
        </View>
      </View>
    );
  }
}
