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
  TouchableOpacity,
  ScrollView
} from 'react-native'
import MMScrollView from './js/MMScrollView'
export default class ReactNativeMM extends Component {
  _handleLayout (e) {
    const {width, x, y, height} = e.nativeEvent.layout
  }
  render() {
    return (
      <View style={styles.container} onLayout = {this._handleLayout}>
        <MMScrollView locked={true} tabBarPosition='bottom'>
          <ScrollView label="home">
            <Text>sdfdsf</Text>
            <View style={{height: 500, backgroundColor: '#000'}}></View>
            <View style={{height: 300, backgroundColor: 'antiquewhite'}}></View>
          </ScrollView>
          <View label="accout"  style={{flex: 1, backgroundColor: 'antiquewhite'}}>
            <MMScrollView >
              <View style={{height: 100, paddingTop: 50}} label="1">
                <Text>1234</Text>
              </View>
              <View style={{height: 100, paddingTop: 50}} label="2">
                <Text>1234</Text>
              </View>
              <View style={{height: 100, paddingTop: 50}} label="3">
                <Text>1234</Text>
              </View>
            </MMScrollView>
          </View>
          <ScrollView label="game">
            <View style={{height: 300, backgroundColor: 'antiquewhite'}}></View>
          </ScrollView>
          <ScrollView label="soft">
            <View style={{height: 300, backgroundColor: 'antiquewhite'}}></View>
          </ScrollView>
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
    height: 800,
    backgroundColor: 'ivory'
  },
  soft: {
    height: 800,
    backgroundColor: 'antiquewhite'
  },
  game: {
    height: 800,
    backgroundColor: 'beige'
  },
  accout: {
    height: 800,
    backgroundColor: 'cornsilk'
  }
});

AppRegistry.registerComponent('ReactNativeMM', () => ReactNativeMM);
