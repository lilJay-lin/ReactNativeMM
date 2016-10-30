/**
 * Created by liljay on 2016/10/26.
 */
import React, {Component} from 'react'
import {
  View,
  List,
  StyleSheet,
  Text
} from 'react-native'

export default class MMRefreshableListView extends Component {
  renderRefreshingIndicator () {

  }
  render () {
    return (
      <View style={style.container}>
        <View style={[style.fillParent]}>
          {this.renderRefreshingIndicator()}
        </View>
        {this.props.children}
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  fillParent: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
})