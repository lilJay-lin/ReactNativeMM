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
export default class MMTwoUnitCard extends MMComponent{
  render(){
    const items = (server.getItem(2)).map((item) => {
      item.size = server.getSize()
      return (
        <TouchableOpacity style={styles.topicItem} onPress = {() => this.gotoNext()} key={item.contentId}>
          <View style={styles.flex}>
            <Label text="首发" labelStyle={styles.label}></Label>
            <Image  style={styles.logo} source={{uri: item.iconurl}}></Image>
            <Text style={styles.topicItemName} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.topicItemSize}>{item.size}M</Text>
            <DownloadButton></DownloadButton>
          </View>
        </TouchableOpacity>
      )
    })
    return (
      <View style={styles.topicBody}>
        {items[0]}
        <View style={styles.border}></View>
        {items[1]}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flex: {
    zIndex: 1,
    paddingBottom: 15,
    paddingTop: 13,
    alignItems: 'center',
  },
  backgroundItem: {
    zIndex: 0,
    position: 'absolute',
    scaleX: 2,
    scaleY: 2,
    shadowOpacity: 0.3,
    shadowColor: '#fff',
    shadowRadius: 4,
    top: -200
  },
  topicBody: {
    flexDirection: 'row',
    paddingRight: 1,
    backgroundColor: '#ffffff'
  },
  topicItem: {
    flex: 1
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
  },
  label: {
    left: 12
  },
  border: {
    width: 1,
    borderWidth: 1,
    borderColor: '#f1f1f1'
  }
})