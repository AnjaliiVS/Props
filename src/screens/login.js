import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={{flex: 1, width: '100%', height: '100%'}}>
        <TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              heigh: '10%',
              width: '50%',
              backgroundColor: 'red',
            }}></View>

          <View
            style={{
              backgroundColor: '#00cdac',
              height: '30%',
              width: '80%',
              borderRadius: 8,
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text
              onPress={() => {
                this.props.navigation.navigate('Test', {
                  postId: 3006,
                  otherParam: 'Pass whatever you want here',
                });
              }}
              style={{
                alignSelf: 'center',
                fontSize: 16,
                fontWeight: 'bold',
                color: 'white',
              }}>
              Login
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    height: 40,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'rgba(51, 52, 88, 0.06)',
    left: '9%',
  },
});
