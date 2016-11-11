/**
 * Created by liljay on 2016/11/3.
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
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
export default class MMGame extends Component{
  constructor(props){
    super(props)
    this.state = {
      banners: [
        'http://mmdm.aspire-tech.com/fx/demo/rn/9.png',
        'http://mmdm.aspire-tech.com/fx/demo/rn/3.png'
      ]
    }
  }
  render(){
    let navigator = this.props.navigator
    return (
      <View style={styles.flex}>
        <MMToolbar></MMToolbar>
        <ScrollView
          label="home"
          directionalLockEnabled
          showsVerticalScrollIndicator={false}
          automaticallyAdjustContentInsets={false}>
          <Banner pictures={this.state.banners} navigator={navigator}></Banner>
          <TopNav navigator={navigator}></TopNav>
          <View style={{marginTop: 8}}></View>
          <MMTopicCard navigator={navigator}></MMTopicCard>
          <View style={{marginTop: 8}}></View>
          <MMBigCard navigator={navigator}></MMBigCard>
          <View style={{marginTop: 8}}></View>
          <MMTwoUnitCard navigator={navigator}></MMTwoUnitCard>
          <View style={{marginTop: 8}}></View>
          <SingleLineApp navigator={navigator}></SingleLineApp>
          <SingleLineApp navigator={navigator}></SingleLineApp>
          <View style={{marginTop: 8}}></View>
          <View style={{marginTop: 8}}></View>
          <SingleLineApp navigator={navigator}></SingleLineApp>
          <SingleLineApp navigator={navigator}></SingleLineApp>
          <View style={{marginTop: 8}}></View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
})
