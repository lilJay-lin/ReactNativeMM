/**
 * Created by liljay on 2016/11/3.
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'
import Label from './Label'
import DownloadButton from './DownloadButton'
export default class MMTopicCard extends Component{
  render(){
    return (
      <View style={styles.topic}>
        <Label text="专题" labelStyle={styles.labelStyle}></Label>
        <View style={styles.topicHd}>
          <Text>团购</Text>
          <Text>开启神奇的魔幻之旅</Text>
        </View>
        <View style={styles.topicBody}>
          <View style={styles.topicItem}>
            <Image  style={styles.logo} source={require('../images/1.png')}></Image>
            <Text style={styles.topicItemName}>美团</Text>
            <Text style={styles.topicItemSize}>35.66M</Text>
            <DownloadButton></DownloadButton>
          </View>
          <View style={styles.topicItem}>
            <Image  style={styles.logo} source={require('../images/1.png')}></Image>
            <Text style={styles.topicItemName}>美团</Text>
            <Text style={styles.topicItemSize}>35.66M</Text>
            <DownloadButton></DownloadButton>
          </View>
          <View style={styles.topicItem}>
            <Image  style={styles.logo} source={require('../images/1.png')}></Image>
            <Text style={styles.topicItemName}>美团</Text>
            <Text style={styles.topicItemSize}>35.66M</Text>
            <DownloadButton></DownloadButton>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topic: {
    backgroundColor: '#ffffff'
  },
  labelStyle: {
    left: 13
  },
  topicHd: {
    paddingVertical: 10,
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  topicTitle: {
    fontSize: 14,
    color: '#333333'
  },
  topicSecodeTitle: {
    fontSize: 11,
    color: '#999999'
  },
  topicBody: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 15,
    justifyContent: 'space-between'
  },
  topicItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  topicItemName: {
    fontSize: 14,
    color: '#333333'
  },
  topicItemSize: {
    fontSize: 11,
    color: '#999999',
    marginBottom: 4
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginBottom: 10
  }
})