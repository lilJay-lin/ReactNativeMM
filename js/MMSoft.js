/**
 * Created by liljay on 2016/11/3.
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView
} from 'react-native'
import MMScrollView from './MMScrollView'
import SingleLineApp from './SingleLineApp'
import TopNav from './TopNav'
import Banner from './Banner'
import MMToolbar from './MMToolbar'
import MMTwoUnitCard from  './MMTwoUnitCard'
import MMBigCard from './MMBigCard'
import MMTopicCard from './MMTopicCard'
import MMGameTabBar from './MMGameTabBar'
export default class MMSoft extends Component{
  renderTabBar (props) {
    return <MMGameTabBar {...props}></MMGameTabBar>
  }
  render(){
    let navigator = this.props.navigator
    const tabProps = {
      tabBarPosition: 'top',
      renderTabBar: this.renderTabBar,
      tabHeight: 97
    }
    return (
      <View style={{flex: 1}}>
        <MMScrollView {...tabProps}>
          <View style={{flex: 1}} label="分类">
            <ScrollView
              label="home"
              directionalLockEnabled
              showsVerticalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}>
                <TopNav navigator={navigator}></TopNav>
                <MMTopicCard navigator={navigator}></MMTopicCard>
                <SingleLineApp navigator={navigator}></SingleLineApp>
                <SingleLineApp navigator={navigator}></SingleLineApp>
                <SingleLineApp navigator={navigator}></SingleLineApp>
                <SingleLineApp navigator={navigator}></SingleLineApp>
                <SingleLineApp navigator={navigator}></SingleLineApp>
              </ScrollView>
          </View>
          <View style={{flex: 1}} label="推荐">
            <ScrollView
              label="home"
              directionalLockEnabled
              showsVerticalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}>
              <SingleLineApp navigator={navigator}></SingleLineApp>
              <SingleLineApp navigator={navigator}></SingleLineApp>
              <SingleLineApp navigator={navigator}></SingleLineApp>
              <SingleLineApp navigator={navigator}></SingleLineApp>
              </ScrollView>
          </View>
          <View style={{flex: 1}} label="榜单">
            <ScrollView
              label="home"
              directionalLockEnabled
              showsVerticalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}>
              <MMBigCard navigator={navigator}></MMBigCard>
              <View style={{marginTop: 8}}></View>
              <SingleLineApp navigator={navigator}></SingleLineApp>
              <SingleLineApp navigator={navigator}></SingleLineApp>
              <SingleLineApp navigator={navigator}></SingleLineApp>
              <SingleLineApp navigator={navigator}></SingleLineApp>
            </ScrollView>
          </View>
          <View style={{flex: 1}} label="上新">
            <ScrollView
              label="home"
              directionalLockEnabled
              showsVerticalScrollIndicator={false}
              automaticallyAdjustContentInsets={false}>
              <SingleLineApp navigator={navigator}></SingleLineApp>
              <SingleLineApp navigator={navigator}></SingleLineApp>
              <SingleLineApp navigator={navigator}></SingleLineApp>
              <SingleLineApp navigator={navigator}></SingleLineApp>
            </ScrollView>
          </View>
        </MMScrollView>
      </View>
    )
  }
}
