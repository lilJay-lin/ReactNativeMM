/**
 * Created by liljay on 2016/10/31.
 */
import React, {Component, PropTypes} from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'
import TabBar from './TabBar'
import MMToolbar from './MMToolbar'
export default class MMGameTabBar extends Component{
  constructor(props){
    super(props)
  }
  static propTypes = {
    background: PropTypes.string
  }
  render(){
    const rn = this
    const tabProps = {
      underlineStyle: {
        backgroundColor: '#22beff',
        borderRadius: 4,
      },
      activeTextColor: '#41c7ff',
      inactiveTextColor: '#333333',
      textStyle: {
        fontSize: 12
      },
      style: {
      }
    }
    return (
      <View style={[styles.tabContainer]}>
        <MMToolbar style={{borderBottomWidth: 0}}></MMToolbar>
        <TabBar {...rn.props} {...tabProps}></TabBar>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    borderColor: '#000'
  }
})