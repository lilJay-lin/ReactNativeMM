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
import TopNav from './TopNav'
import SingleLineApp from './SingleLineApp'
import MarginView from './MarginView'
import MMTopicCard from './MMTopicCard'
export default class MMGame extends Component{
  renderTabBar (props) {
    return <MMGameTabBar {...props}></MMGameTabBar>
  }
  render(){
    const tabProps = {
      tabBarPosition: 'top',
      renderTabBar: this.renderTabBar,
      tabHeight: 97
    }
    return (
      <View style={{flex: 1}}>
        <MMScrollView {...tabProps}>
          <View style={{height: 100}} label="分类">
            <TopNav></TopNav>
            <MMTopicCard></MMTopicCard>
            <MarginView></MarginView>
            <SingleLineApp></SingleLineApp>
            <MarginView></MarginView>
            <SingleLineApp></SingleLineApp>
            <SingleLineApp></SingleLineApp>
            <SingleLineApp></SingleLineApp>
            <SingleLineApp></SingleLineApp>
          </View>
          <View style={{height: 100}} label="推荐">
            <TopNav></TopNav>
            <Text>1234</Text>
          </View>
          <View style={{height: 100}} label="榜单">
            <TopNav></TopNav>
            <Text>1234</Text>
          </View>
          <View style={{height: 100}} label="上新">
            <TopNav></TopNav>
            <Text>1234</Text>
          </View>
        </MMScrollView>
      </View>
    )
  }
}
