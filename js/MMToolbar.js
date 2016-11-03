/**
 * Created by liljay on 2016/11/2.
 */
import React, {Component, PropTypes} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native'
export default class MMToolbar extends Component{
  constructor(props){
    super(props)
  }
  static propTypes = {
    style: View.propTypes.style
  }
  render () {
    return (
      <View style={[styles.toolbar, this.props.style]}>
        <Image source={require('../images/11.png')} style={styles.userImage}></Image>
        <View style={styles.search}>
          <Image source={require('../images/9.png')} style={styles.searchIcon}></Image>
          <View style={styles.inputField}>
            <Text>幻城</Text>
          </View>
          <Image source={require('../images/12.png')} style={styles.qcodeIcon}></Image>
        </View>
        <Image source={require('../images/11.png')} style={styles.downloadWrapper}>
          <Image  source={require('../images/10.png')} style={styles.download}></Image>
          <View style={styles.downloadNumberWrapper}>
            <Text style={styles.downloadNumber}>3</Text>
          </View>
        </Image>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: '#ffffff',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eaeaea',
  },
  userImage: {
    width: 32,
    height: 32
  },
  search: {
    flexDirection: 'row',
    flex: 1,
    height: 36,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 12,
    marginHorizontal: 8
  },
  searchText: {
    flex: 1,
    fontSize: 12,
    color: '#999999'
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  qcodeIcon: {
    width: 20,
    height: 20
  },
  inputField: {
    flex: 1,
    paddingLeft: 8
  },
  downloadWrapper: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  download: {
    width: 20,
    height: 20
  },
  downloadNumberWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 15,
    height: 15,
    backgroundColor: '#ff7800',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  downloadNumber: {
    fontSize: 11,
    color: '#ffffff'
  }
})