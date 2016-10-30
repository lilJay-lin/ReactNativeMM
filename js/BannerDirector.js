/**
 * Created by liljay on 2016/10/31.
 */
import React, {Component, PropTypes} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import TabBar from './TabBar'
import Button from './Button'
export default class BannerDirector extends Component{
  _renderTab (name, page, active, onPressHandle) {
    const director = active ? styles.active : styles.inactive
    return (
      <Button
        key={name}
        onPress={() => onPressHandle(page)}
        >
        <View style={[director, styles.director]}></View>
      </Button>
    )
  }
  render(){
    const tabStyle = {
      style: styles.tabStyle,
      underlineStyle: styles.tabUnderlineStyle,
      renderTab: this._renderTab
    }
    return (
      <TabBar {...this.props} {...tabStyle}></TabBar>
    )
  }
}

const styles = StyleSheet.create({
  tabStyle: {
    backgroundColor: 'transparent',
    height: 10,
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 5,
    borderWidth: 0
  },
  director: {
    borderRadius: 5,
    height: 10,
    width: 10,
    marginHorizontal: 2
  },
  active: {
    backgroundColor: '#fff'
  },
  inactive: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  tabUnderlineStyle: {
    height: 0,
    width: 0
  }
})