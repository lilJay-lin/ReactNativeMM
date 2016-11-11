/**
 * Created by liljay on 2016/11/3.
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'
import Label from './Label'
import DownloadButton from './DownloadButton'
import server from './server'
import MMComponent from './MMComponent'
export default class MMTopicCard extends MMComponent{
  render(){
    const items = ([1, 1, 1]).map(() => {
      const item = server.getItem()
      item.size = server.getSize()
      return (
        <TouchableOpacity style={styles.topicItem} onPress = {() => this.gotoNext(item.name, 1)} key={item.contentId}>
          <Image  style={styles.logo} source={{uri: item.iconurl}}></Image>
          <Text style={styles.topicItemName} numberOfLines={1}>{item.name}</Text>
          <Text style={styles.topicItemSize}>{item.size}M</Text>
          <DownloadButton></DownloadButton>
        </TouchableOpacity>
      )
    })
    const card = server.getCard()
    return (
      <View style={styles.topic}>
        <Label text={card.marktext} labelStyle={styles.labelStyle}></Label>
        <View style={styles.topicHd}>
          <Text>{card.name}</Text>
          <Text>{card.slogan}</Text>
        </View>
        <View style={styles.topicBody}>
          {items}
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
    color: '#333333',
    textAlign: 'center',
    paddingHorizontal: 10
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