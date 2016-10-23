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
  TouchableOpacity
} from 'react-native'
import Button from './Button'
export default class TabBar extends Component {
  static propTypes = {
    tabs: React.PropTypes.array,
    activeTab: PropTypes.number,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    goToPage: PropTypes.func
  }
  _renderTab (name, page, active, onPressHandle) {
    const {activeTextColor, inactiveTextColor} = this.props
    const textColor = active ? this.props.activeTextColor : this.props.inactiveTextColor
    return (
      <Button
        key={name}
        onPress={() => onPressHandle(page)}
        style={{flex: 1}}>
        <View style={styles.tab}>
          <Text style={[styles.text, {color: textColor}]}>
            {name}
          </Text>
        </View>
      </Button>
    )
  }
  render() {
    return (
      <View style={styles.tabs}>
        {
          this.props.tabs.map((name, page) => {
            const active = page === this.props.activeTab
            return this._renderTab(name, page, active, this.props.goToPage)
          })
        }
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
    borderColor: '#ccc',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
});
