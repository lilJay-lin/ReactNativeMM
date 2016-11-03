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
import MMTabHost from './js/MMTabHost'
import MMRefreshableListView from './js/MMRefreshableListView'
import MMGameTabBar from './js/MMGameTabBar'
import MMGame from './js/MMGame'
import MMChoice from './js/MMChoice'
import MMEnjoy from './js/MMEnjoy'
import MMSoft from './js/MMSoft'
export default class ReactNativeMM extends Component {
  constructor(props){
    super(props)
  }
  _handleLayout (e) {
    const {width, x, y, height} = e.nativeEvent.layout
  }
  renderTabBar (props) {
    return <MMTabHost {...props}></MMTabHost>
  }
  render() {
    const tabHostProps = {
      tabBarPosition: 'bottom',
      locked: true,
      renderTabBar: this.renderTabBar
    }
    return (
      <View style={styles.container}onLayout = {this._handleLayout}>
        <MMScrollView {...tabHostProps}>
          <MMChoice label="choice"></MMChoice>
          <MMSoft label="soft"></MMSoft>
          <MMGame label="game"></MMGame>
          <MMEnjoy label="enjoy"></MMEnjoy>
          <View style={styles.flex} label="account">

          </View>
        </MMScrollView>
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
