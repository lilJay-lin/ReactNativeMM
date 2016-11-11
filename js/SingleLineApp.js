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
import server from './server'
import MMDetailList from './MMDetailList'
import MMComponent from './MMComponent'

export default class SingleLineApp extends MMComponent{
  render(){
    /*
    *
    * {
     "name": "博雅斗牛",
     "interested": "60万+下载",
     "appuid": "com.boyaa.bullfight.mmarket",
     "contentid": "300008222044",
     "iconurl": "http://u5.mm-img.mmarket.com:80/rs/res2/21/2016/11/07/a219/281/49281219/logo120x1208507760955-png8.png",
     "appsize": 16939,
     "detailurl": "http://odp.mmarket.com/t.do?requestid=app_info_forward_v2&spm=null&goodsid=0000x8627289836100007246012300008222044&share=true",
     "orderurl": "http://apk.mmarket.com/cdn/rs/prepublish_open20/23/2016/08/31/a638/892/48892638/crazybull_mm_2.8.0_300008222044_0000000002.apk?cid=300008222044&gid=0000x8627289836100007246012300008222044&MD5=9bfb9b472b9105e3e470fc0be15d5731&ts=201611101740&tk=9A5E&v=1",
     "slogan": "只要你敢来，话费我买单！"
     }
     */
    const app = server.getItem()
    const label = Math.floor(Math.random()) > 0 ? "首发" : "赚流量"
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
      <Button onPress = {() => this.gotoNext(app.name, 1)}>
        <View style={styles.app}>
          <View style={styles.logoWrapper}>
            <Image style={styles.label} source={require('../images/2.png')}>
              <Text style={styles.labelText}>{label}</Text>
            </Image>
            <Image style={styles.logo} source={{uri: app.iconurl}}></Image>
          </View>
          <View style={styles.info}>
            <View style={styles.flex}>
              <Text style={styles.infoTitle}>{app.name}</Text>
              <Text style={[styles.appLabel, {backgroundColor: '#ff7800'}]}>评测</Text>
            </View>
            <Text style={styles.infoDownload}>{app.interested}</Text>
            <View style={styles.flex}>
              <Text style={styles.infoDownload}>{app.slogan}</Text>
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