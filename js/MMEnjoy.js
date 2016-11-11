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
export default class MMEnjoy extends Component{
  constructor(props){
    super(props)
    this.state = {
      banners: [
        'http://fun.youth.cn/yl24xs/201609/W020160926358612422930.png',
        'http://2t.5068.com/uploads/allimg/161001/1-1610010S524-50.jpg'
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
          <MMTopicCard navigator={navigator}></MMTopicCard>
          <View style={{marginTop: 8}}></View>
          <MMBigCard navigator={navigator}></MMBigCard>
          <View style={{marginTop: 8}}></View>
          <MMTwoUnitCard navigator={navigator}></MMTwoUnitCard>
          <View style={{marginTop: 8}}></View>
          <SingleLineApp navigator={navigator}></SingleLineApp>
          <SingleLineApp navigator={navigator}></SingleLineApp>
          <SingleLineApp navigator={navigator}></SingleLineApp>
          <SingleLineApp navigator={navigator}></SingleLineApp>
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
