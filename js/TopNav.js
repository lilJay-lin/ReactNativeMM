/**
 * Created by liljay on 2016/10/30.
 */
import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView
} from 'react-native'
import Button from './Button'

export default class TopNav extends Component{
  render(){
    return (
      <View style={styles.topNav}>
        <ScrollView
          horizontal
          automaticallyAdjustContentInsets={false}
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled
          contentContainerStyle={{paddingRight: 15}}>
          <View style={styles.item}>
            <Image style={styles.itemLogo} source={require('../images/3.png')}></Image>
            <Text style={styles.itemLabel}>首发</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.itemLogo} source={require('../images/4.png')}></Image>
            <Text style={styles.itemLabel}>网游</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.itemLogo} source={require('../images/5.png')}></Image>
            <Text style={styles.itemLabel}>全部</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.itemLogo} source={require('../images/6.png')}></Image>
            <Text style={styles.itemLabel}>必备</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.itemLogo} source={require('../images/7.png')}></Image>
            <Text style={styles.itemLabel}>应用PK</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.itemLogo} source={require('../images/5.png')}></Image>
            <Text style={styles.itemLabel}>全部</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.itemLogo} source={require('../images/6.png')}></Image>
            <Text style={styles.itemLabel}>必备</Text>
          </View>
          <View style={styles.item}>
            <Image style={styles.itemLogo} source={require('../images/7.png')}></Image>
            <Text style={styles.itemLabel}>应用PK</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topNav: {
    flex: 1,
    flexDirection: 'row',
    height: 70,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eaeaea',
    backgroundColor: '#ffffff'
  },
  item: {
    flex: 1,
    width: 38,
    alignItems: 'center',
    marginLeft: 15
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