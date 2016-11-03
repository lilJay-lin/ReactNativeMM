/**
 * Created by liljay on 2016/11/3.
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import MMScrollView from './MMScrollView'
import MMGameTabBar from './MMGameTabBar'
export default class MMGame extends Component{
  renderTabBar (props) {
    return <MMGameTabBar {...props}></MMGameTabBar>
  }
  render(){
    const tabProps = {
      tabBarPosition: 'top',
      renderTabBar: this.renderTabBar
    }
    return (
      <View style={{flex: 1, backgroundColor: 'antiquewhite'}}>
        <MMScrollView {...tabProps}>
          <View style={{height: 100}} label="1">
            <Text>1233334</Text>
          </View>
          <View style={{height: 100}} label="2">
            <Text>1234</Text>
          </View>
          <View style={{height: 100}} label="3">
            <Text>1234</Text>
          </View>
          <View style={{height: 100}} label="上新">
            <Text>1234</Text>
          </View>
        </MMScrollView>
      </View>
    )
  }
}
