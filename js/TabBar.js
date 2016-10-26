/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native'
import Button from './Button'
export default class TabBar extends Component {
  static propTypes = {
    tabs: React.PropTypes.array,
    activeTab: PropTypes.number,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    backgroundColor: PropTypes.string,
    goToPage: PropTypes.func,
    tabStyle: View.propTypes.style,
    renderTab: React.PropTypes.func,
    underlineStyle: View.propTypes.style
  }
  static defaultProps  = {
    activeTextColor: 'navy',
    inactiveTextColor: 'black',
    backgroundColor: null
  }
  _renderTab (name, page, active, onPressHandle) {
    const {activeTextColor, inactiveTextColor} = this.props
    const textColor = active ? activeTextColor : inactiveTextColor
    return (
      <Button
        key={name}
        onPress={() => onPressHandle(page)}
        style={{flex: 1}}>
        <View style={[styles.tab, this.props.tabStyle]}>
          <Text style={[styles.text, {color: textColor}]}>
            {name}
          </Text>
        </View>
      </Button>
    )
  }
  render() {
    const rn = this
    const props = rn.props
    const containerWidth = rn.props.containerWidth;
    const numberOfTabs = rn.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: 4,
      backgroundColor: 'navy',
      bottom: 0
    }
    const left = props.scrollValue.interpolate({
      inputRange: [0, 1], outputRange: [0,  containerWidth / numberOfTabs]
    })
    return (
      <View style={[styles.tabs, props.style]}>
        {
          props.tabs.map((name, page) => {
            const active = page === props.activeTab
            return rn._renderTab(name, page, active, props.goToPage)
          })
        }
        <Animated.View style={[tabUnderlineStyle, { left}, props.underlineStyle ]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    backgroundColor: '#ffffff',
    borderColor: '#ccc'
  }
});
