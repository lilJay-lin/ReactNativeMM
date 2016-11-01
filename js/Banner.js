/**
 * Created by liljay on 2016/10/30.
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
import MMScrollView from './MMScrollView'
import Button from './Button'
import BannerDirector from './BannerDirector'

export default class Banner extends Component{
  constructor(props){
    super(props)
    this.state = {
      containerWidth: Dimensions.get('window').width
    }
  }
  static propsTypes = {
    pictures: PropTypes.array
  }
  _handleLayout(e){
    const rn = this
    const {width} = e.nativeEvent.layout
    if (width !== rn.state.containerWidth) {
      rn.setState({containerWidth: width})
    }
  }
  renderTabBar(props){
    return <BannerDirector {...props}></BannerDirector>
  }
  render(){
    let containerWidth = this.state.containerWidth
    let height = containerWidth * 0.413
    const scrollProps = {
      tabHeight: 0,
      renderTabBar: this.renderTabBar
    }
    const imageStyle = {
      width: containerWidth,
      height: height,
      resizeMode: 'cover'
    }
    return (
      <View style={[styles.banner, {height: height}]} onLayout={(e) => this._handleLayout(e)}>
        <MMScrollView {...scrollProps}>
          {
            this.props.pictures.map((img, idx) => {
              let key = 'banner_item' + idx + containerWidth
              return (
                <Button label={key}  key={key} style={{height: height}}>
                  <Image style={imageStyle} source={{uri: img}} ></Image>
                </Button>
              )
            })
          }
        </MMScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  banner: {
    flex: 1,
    backgroundColor: '#000'
  }
})