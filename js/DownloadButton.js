/**
 * Created by liljay on 2016/11/3.
 */
import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class DownloadButton extends Component{
  static propTypes = {
    text: PropTypes.string,
    btnStyle: View.propTypes.style
  }
  static defaultProps = {
    text: '下载'
  }
  render(){
    return (
      <View style={[styles.btn, this.props.btnStyle]}>
        <Text style={[styles.btnText, this.props.btnTextStyle]}>{this.props.text}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  btn: {
    width: 50,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#23beff',
    borderRadius: 3
  },
  btnText: {
    fontSize: 12,
    color: '#23beff'
  }
})