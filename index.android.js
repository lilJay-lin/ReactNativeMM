/**
 * Created by linxiaojie on 2016/11/10.
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import MMNavigator from './js/MMNavigator'
import MMMainScene from './js/MMMainScene'
export default class ReactNativeMM extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MMNavigator component={MMMainScene}></MMNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0'
  },
  flex: {
    flex: 1
  }
});

AppRegistry.registerComponent('ReactNativeMM', () => ReactNativeMM);