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
        img: 'http://mmdm.aspire-tech.com/fx/demo/rn/22.png',
        active: 'http://mmdm.aspire-tech.com/fx/demo/rn/4.png'
      },
      {
        img: 'http://mmdm.aspire-tech.com/fx/demo/rn/5.png',
        active: 'http://mmdm.aspire-tech.com/fx/demo/rn/21.png'
      },
      {
        img: 'http://mmdm.aspire-tech.com/fx/demo/rn/6.png',
        active: 'http://mmdm.aspire-tech.com/fx/demo/rn/23.png'
      },
      {
        img: 'http://mmdm.aspire-tech.com/fx/demo/rn/7.png',
        active: 'http://mmdm.aspire-tech.com/fx/demo/rn/24.png'
      },
      {
        img: 'http://mmdm.aspire-tech.com/fx/demo/rn/8.png',
        active: 'http://mmdm.aspire-tech.com/fx/demo/rn/20.png'
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
    marginTop: 3,
    resizeMode: 'contain'
  }
})