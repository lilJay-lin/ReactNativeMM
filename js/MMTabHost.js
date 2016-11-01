/**
 * Created by liljay on 2016/10/31.
 */
import React, {Component, PropTypes} from 'react'
import {
  View,
  Image,
  StyleSheet
} from 'react-native'
import TabBar from './TabBar'
import Button from './Button'
export default class MMTabHost extends Component{
  constructor(props){
    super(props)
  }
  static propTypes = {
    config: PropTypes.array
  }
  static defaultProps = {
    config: [
      {
        img: 'http://imgsrc.baidu.com/forum/pic/item/fa9025338744ebf8ccf1ed96d9f9d72a6259a78c.jpg',
        active: 'http://imgsrc.baidu.com/forum/pic/item/ac9d7cfbb2fb4316af9ff3d320a446230bf7d38c.jpg'
      },
      {
        img: 'http://imgsrc.baidu.com/forum/pic/item/deba09a4462309f757ef24bb720e0cf3d5cad68c.jpg',
        active: 'http://imgsrc.baidu.com/forum/pic/item/ac9d7cfbb2fb4316af9ff3d320a446230bf7d38c.jpg'
      },
      {
        img: 'http://imgsrc.baidu.com/forum/pic/item/fa9025338744ebf8ccf1ed96d9f9d72a6259a78c.jpg',
        active: 'http://imgsrc.baidu.com/forum/pic/item/ac9d7cfbb2fb4316af9ff3d320a446230bf7d38c.jpg'
      },
      {
        img: 'http://imgsrc.baidu.com/forum/pic/item/ac9d7cfbb2fb4316af9ff3d320a446230bf7d38c.jpg',
        active: 'http://imgsrc.baidu.com/forum/pic/item/deba09a4462309f757ef24bb720e0cf3d5cad68c.jpg'
      },
      {
        img: 'http://imgsrc.baidu.com/forum/pic/item/fa9025338744ebf8ccf1ed96d9f9d72a6259a78c.jpg',
        active: 'http://imgsrc.baidu.com/forum/pic/item/deba09a4462309f757ef24bb720e0cf3d5cad68c.jpg'
      }
    ]
  }
  _renderTab (name, page, active, onPressHandle) {
    const config = this.props.config
    const showImage = active ? config[page]['active'] : config[page]['img']
    const key = name
    return (
      <Button
        key={key}
        onPress={() => onPressHandle(page)}
      >
        <View style={styles.tab}>
          <Image source={{uri: showImage}} style={styles.tabImage}></Image>
        </View>
      </Button>
    )
  }
  render(){
    const rn = this
    const tabProps = {
      noUnderline: true,
      renderTab (name, page, active, goToPage) {
        return rn._renderTab(name, page, active, goToPage)
      }
    }
    return (
      <TabBar {...rn.props} {...tabProps}></TabBar>
    )
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    justifyContent: 'center'
  },
  tabImage: {
    width: 35,
    height: 42,
    marginTop: 3
  }
})