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
export default class MMGame extends Component{
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
    return (
      <View style={styles.flex}>
        <MMToolbar></MMToolbar>
        <ScrollView
          label="home"
          directionalLockEnabled
          showsVerticalScrollIndicator={false}>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1
  }
})
