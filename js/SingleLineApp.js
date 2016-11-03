/**
 * Created by liljay on 2016/10/30.
 */
import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'
import Button from './Button'

export default class SingleLineApp extends Component{
  render(){
/*    return (
      <Button>
        <View style={styles.app}>
          <View style={styles.logoWrapper}>
            <Image style={styles.label} source={require('../images/2.png')}>
              <Text style={styles.labelText}>赚流量</Text>
            </Image>
            <Image style={styles.logo} source={require('../images/1.png')}></Image>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoTitle}>龙珠ol</Text>
            <Text style={styles.infoDownload}>3万+感兴趣 </Text>
            <Text style={styles.infoSlogan}>我是歌手歌曲独家下载</Text>
          </View>
          <Button>
            <View style={styles.btn}>
              <Text style={styles.btnText}>下载</Text>
            </View>
          </Button>
        </View>
      </Button>
    )*/

    return (
      <Button>
        <View style={styles.app}>
          <View style={styles.logoWrapper}>
            <Image style={styles.label} source={require('../images/2.png')}>
              <Text style={styles.labelText}>赚流量</Text>
            </Image>
            <Image style={styles.logo} source={require('../images/1.png')}></Image>
          </View>
          <View style={styles.info}>
            <View style={styles.flex}>
              <Text style={styles.infoTitle}>龙珠ol</Text>
              <Text style={[styles.appLabel, {backgroundColor: '#ff7800'}]}>评测</Text>
            </View>
            <Text style={styles.infoDownload}>3万+感兴趣 </Text>
            <View style={styles.flex}>
              <Text style={[styles.appLabel2, {color: '#ff91cd', borderColor: '#ff91cd'}]}>神奇宝贝</Text>
              <Text style={[styles.appLabel2, {color: '#90d557', borderColor: '#90d557'}]}>钢琴百块</Text>
              <Text style={[styles.appLabel2, {color: '#63d1ff', borderColor: '#63d1ff'}]}>策略</Text>
            </View>
          </View>
          <Button>
            <View style={styles.btn}>
              <Text style={styles.btnText}>下载</Text>
            </View>
          </Button>
        </View>
      </Button>
    )
  }

}

const styles = StyleSheet.create({
  flex: {
    flexDirection: "row",
    alignItems: 'center'
  },
  app: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    height: 80,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eaeaea'
  },
  logoWrapper: {
    height: 80,
    width: 50,
    marginLeft: 10,
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 5
  },
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
  },
  info: {
    height: 50,
    flex: 1,
    justifyContent: 'space-between'
  },
  infoTitle: {
    fontSize: 14,
    color: '#262626'
  },
  infoDownload: {
    fontSize: 11,
    color: '#999999'
  },
  infoSlogan: {
    fontSize: 11,
    color: '#999999'
  },
  btn: {
    width: 50,
    height: 25,
    marginRight: 10,
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
  },
  appLabel: {
    borderRadius: 2,
    padding: 2,
    fontSize: 7,
    color: "#ffffff",
    marginRight: 4
  },
  appLabel2: {
    borderRadius: 2,
    fontSize: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    marginRight: 4,
    height: 14,
    paddingLeft: 2
  }
})