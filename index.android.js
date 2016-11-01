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
import MMRefreshableListView from './js/MMRefreshableListView'
import SingleLineApp from './js/SingleLineApp'
import TopNav from './js/TopNav'
import Banner from './js/Banner'
import MMTabHost from './js/MMTabHost'
export default class ReactNativeMM extends Component {
  constructor(props){
    super(props)
    this.state = {
      banners: [
        'http://fun.youth.cn/yl24xs/201609/W020160926358612422930.png',
        'http://2t.5068.com/uploads/allimg/161001/1-1610010S524-50.jpg'
      ]
    }
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
          <ScrollView label="home" directionalLockEnabled>
            <TopNav></TopNav>
            <View style={{marginTop: 8}}></View>
            <SingleLineApp></SingleLineApp>
            <SingleLineApp></SingleLineApp>
            <View style={{marginTop: 8}}></View>
            <Banner pictures={this.state.banners}></Banner>
            <View style={{marginTop: 8}}></View>
            <SingleLineApp></SingleLineApp>
            <SingleLineApp></SingleLineApp>
            <View style={{marginTop: 8}}></View>
          </ScrollView>
          <View label="accout"  style={{flex: 1, backgroundColor: 'antiquewhite'}}>
            <MMScrollView >
              <View style={{height: 100}} label="1">
                <Text>1234</Text>
              </View>
              <View style={{height: 100}} label="2">
                <Text>1234</Text>
              </View>
              <View style={{height: 100}} label="3">
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
          <ScrollView label="main">
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
    backgroundColor: '#f0f0f0'
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
