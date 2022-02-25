//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
export default class Test extends Component {
  render() {
    const {postId, otherParam} = this.props.route.params;
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', padding: '5%'}}>
          <Text>Post id is: {postId}</Text>
          <Text>{otherParam}</Text>

          <Text
            style={styles.txt1}
            onPress={() => this.props.navigation.navigate('Success')}>
            Testing
          </Text>
        </View>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  txt1: {
    textAlign: 'center',
    top: '7%',
  },
});
