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
export default class MMBigCard extends MMComponent{
  render(){
    const item = server.getItem()
    return (
      <TouchableOpacity style={styles.topicItem} onPress = {() => this.gotoNext(item.name, 1)}>
        <Label text="首发" labelStyle={styles.label}></Label>
        <Image  style={styles.logo} source={{uri: item.iconurl}}></Image>
        <Text style={styles.topicItemName}>{item.name}</Text>
        <Text style={styles.topicItemSize}>{server.getSize()}M</Text>
        <DownloadButton></DownloadButton>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
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
  topicItem: {
    paddingRight: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 15,
    paddingTop: 13,
    alignItems: 'center',
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