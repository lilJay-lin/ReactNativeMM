/**
 * Created by liljay on 2016/10/22.
 */
import React, {Component} from 'react'
import {
  TouchableOpacity,
  StyleSheet
} from 'react-native'

export default class Button extends Component {
  render () {
    return (
      <TouchableOpacity
        {...this.props}>
        {this.props.children}
      </TouchableOpacity>
    )
  }
}