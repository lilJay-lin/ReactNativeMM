/**
 * Created by liljay on 2016/11/10.
 */

import React, {Component} from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
export default class MMNavigatorHeader extends Component{
  _goBack () {
    this.props.navigator.pop()
  }
   render () {
     return (
       <View style={styles.header}>
         <View style={styles.leftView}>
           <TouchableOpacity
             underlayColor='transparent'
             onPress={() => {this._goBack()}}>
             <View style={{flex: 1, width: 50, paddingLeft: 20, paddingTop: 5,alignItem: 'center'}}>
               <Image source={{uri: 'http://mmdm.aspire-tech.com/fx/demo/rn/27.png'}} style={styles.backImage}></Image>
             </View>
           </TouchableOpacity>
         </View>
         <View style={styles.titleView}>
           <Text style={styles.title} numberOfLines={1}>
             {this.props.title || "页面标题"}
           </Text>
         </View>
         <View style={styles.rightView}>

         </View>
       </View>
     )
   }
}
const styles = StyleSheet.create({
  backImage: {
    width: 18,
    height: 18,
    resizeMode: 'contain'
  },
  header: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: 'solid'
  },
  // 导航栏
  leftView: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    width: 60
  },
  rightView: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    width: 60
  },
  titleView: {
    paddingVertical: 10,
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  // 左面导航按钮
  leftNavButtonText: {
    color: '#000',
    fontSize: 18,
    marginLeft: 13
  },
  // 右面导航按钮
  rightNavButtonText: {
    color: '#000',
    fontSize: 18,
    marginRight: 13
  },
  // 标题
  title: {
    fontSize: 18,
    color: '#000',
    color: '#000',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})

