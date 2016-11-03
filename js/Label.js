/**
 * Created by liljay on 2016/11/3.
 */
import React, { Component, PropTypes } from 'react'
import {
  StyleSheet,
  Text,
  Image
} from 'react-native'

export default class Label extends Component{
  static propTypes = {
    image: PropTypes.string,
    text: PropTypes.string,
    labelStyle: Image.propTypes.style
  }
  render(){
    return (
      <Image style={[styles.label, this.props.labelStyle]} source={require('../images/2.png')}>
        <Text style={styles.labelText}>{this.props.text}</Text>
      </Image>
    )
  }
}
const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    top:0,
    left: 0,
    width: 40,
    height: 20,
    zIndex: 1
  },
  labelText: {
    fontSize: 11,
    color: '#ffffff',
    textAlign: 'center'
  }
})