/**
 * Created by liljay on 2016/10/30.
 */
import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import Button from './Button'
import MMComponent from './MMComponent'
export default class TopNav extends MMComponent{
  render(){
    return (
      <View style={styles.topNav}>
        <TouchableOpacity style={styles.item} onPress = {() => this.gotoNext('首发')}>
          <Image style={styles.itemLogo} source={require('../images/3.png')}></Image>
          <Text style={styles.itemLabel}>首发</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress = {() => this.gotoNext('网游')}>
          <Image style={styles.itemLogo} source={require('../images/4.png')}></Image>
          <Text style={styles.itemLabel}>网游</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress = {() => this.gotoNext('全部')}>
          <Image style={styles.itemLogo} source={require('../images/5.png')}></Image>
          <Text style={styles.itemLabel}>全部</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress = {() => this.gotoNext('必备')}>
          <Image style={styles.itemLogo} source={require('../images/6.png')}></Image>
          <Text style={styles.itemLabel}>必备</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.item} onPress = {() => this.gotoNext('应用PK')}>
          <Image style={styles.itemLogo} source={require('../images/7.png')}></Image>
          <Text style={styles.itemLabel}>应用PK</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topNav: {
    flexDirection: 'row',
    height: 70,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eaeaea',
    backgroundColor: '#ffffff'
  },
  item: {
    flex: 1,
    width: 38,
    alignItems: 'center'
  },
  itemLogo: {
    marginTop: 5,
    width: 38,
    height: 41
  },
  itemLabel: {
    marginTop: 3,
    fontSize: 10,
    color: '#444444'
  }
})