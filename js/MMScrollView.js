/**
 * Created by liljay on 2016/10/23.
 */
import React, {Component, PropTypes} from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Dimensions
} from 'react-native'
import TabBar from './TabBar'

export default class MMScrollView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: this.props.initialPage,
      containerWidth: Dimensions.get('window').width
    }
  }
  static propTypes = {
    initialPage: PropTypes.number
  }
  static defaultProps = {
    initialPage: 0
  }
  _children (children = this.props.children) {
    return React.Children.map(children, (child) => child)
  }
  _makeSceneKey(child, idx) {
    return child.props.label + '_' + idx;
  }
  _composeScenes () {
    const rn = this
    return rn._children().map((child, idx) => {
      let key = rn._makeSceneKey(child, idx)
      return (
        <View key={key} style={{width: this.state.containerWidth}}>
          {child}
        </View>
      )
    })
  }
  _onMomentumScrollBeginAndEnd (e) {
    const offsetX = e.nativeEvent.contentOffset.x
  }
  renderScrollableContent () {
    const rn = this
    const scenes = rn._composeScenes();
    return (
      <ScrollView
        horizontal = {true}
        ref={(scrollView) => { this.scrollView = scrollView; }}
        contentOffset={{ x: rn.props.initialPage * rn.state.containerWidth}}
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const offsetX = e.nativeEvent.contentOffset.x
        }}
        onMomentumScrollBegin={this._onMomentumScrollBeginAndEnd}
        onMomentumScrollEnd={this._onMomentumScrollBeginAndEnd}>
        {scenes}
      </ScrollView>
    )
  }
  goToPage (page) {
    this.setState({
      currentPage: page
    })
  }
  render () {
    const rn = this
    const tabBarProps = {
      goToPage: (page) => rn.goToPage(page),
      activeTab: rn.state.currentPage,
      tabs: rn._children().map((child) => child.props.label)
    }
    if (this.props.tabBarActiveTextColor) {
      tabBarProps.activeTextColor = this.props.tabBarActiveTextColor;
    }
    if (this.props.tabBarInactiveTextColor) {
      tabBarProps.inactiveTextColor = this.props.tabBarInactiveTextColor;
    }
    return (
      <View style={styles.scrollView}>
        {this.renderScrollableContent()}
        <TabBar {...tabBarProps}></TabBar>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  }
})