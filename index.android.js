/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import MMScrollView from './js/MMScrollView'
export default class ReactNativeMM extends Component {
  _handleLayout (e) {
    const {width, x, y, height} = e.nativeEvent.layout
  }
  render() {
    return (
      <View style={styles.container} onLayout = {this._handleLayout}>
        <MMScrollView tabBarActiveTextColor='green'>
          <View label="home" style={styles.home}></View>
          <View label="accout" style={styles.accout}></View>
          <View label="game" style={styles.game}></View>
          <View label="soft" style={styles.soft}></View>
        </MMScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  home: {
    height: 300,
    backgroundColor: 'ivory'
  },
  soft: {
    height: 300,
    backgroundColor: 'antiquewhite'
  },
  game: {
    height: 300,
    backgroundColor: 'beige'
  },
  accout: {
    height: 300,
    backgroundColor: 'cornsilk'
  }
});

AppRegistry.registerComponent('ReactNativeMM', () => ReactNativeMM);
