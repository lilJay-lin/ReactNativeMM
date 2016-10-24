/**
 * Created by liljay on 2016/10/23.
 */
import React, {Component, PropTypes} from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  Animated,
  Dimensions
} from 'react-native'
import TabBar from './TabBar'
import SceneComponent from './SceneComponent'

export default class MMScrollView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: this.props.initialPage,
      containerWidth: Dimensions.get('window').width,
      scrollValue: new Animated.Value(this.props.initialPage)
    }
  }
  static propTypes = {
    tabBarPosition: PropTypes.oneOf(['top', 'bottom', 'overlayTop', 'overlayBottom']),
    initialPage: PropTypes.number,
    onScroll: PropTypes.func,
    locked: PropTypes.bool
  }
  static defaultProps = {
    tabBarPosition: 'top',
    initialPage: 0,
    locked: false,
    onScroll () {}
  }
  _children (children = this.props.children) {
    return React.Children.map(children, (child) => child)
  }
  _makeSceneKey(child, idx) {
    return child.props.label + '_' + idx;
  }
  _shouldRenderSceneKey () {

  }
  _composeScenes () {
    const rn = this
    return rn._children().map((child, idx) => {
      let key = rn._makeSceneKey(child, idx)
      return (
        <SceneComponent
          key={key}
          shouldUpdated={this._shouldRenderSceneKey(idx, this.state.currentPage)}
          style={{width: this.state.containerWidth }}
        >
          {child}
        </SceneComponent>

      )
    })
  }
  _updateSelectedPage (page) {
    this.setState({
      currentPage: page
    })
  }
  _onMomentumScrollBeginAndEnd (e) {
    const offsetX = e.nativeEvent.contentOffset.x
    const page = Math.round(offsetX / this.state.containerWidth);
    if (this.state.currentPage !== page) {
      this._updateSelectedPage(page);
    }
  }
  _updateScrollValue (value) {
    this.state.scrollValue.setValue(value);
    this.props.onScroll(value);
  }
  renderScrollableContent () {
    const rn = this
    const scenes = rn._composeScenes();
    return (
      <ScrollView
        horizontal
        pagingEnabled
        automaticallyAdjustContentInsets={false}
        ref={(scrollView) => { this.scrollView = scrollView; }}
        contentOffset={{ x: rn.props.initialPage * rn.state.containerWidth}}
        showsHorizontalScrollIndicator={false}
        onScroll={(e) => {
          const offsetX = e.nativeEvent.contentOffset.x
          this._updateScrollValue(offsetX / this.state.containerWidth)
        }}
        directionalLockEnabled
        scrollEventThrottle={16}
        scrollEnabled={!rn.props.locked}
        onMomentumScrollBegin={(e) => this._onMomentumScrollBeginAndEnd(e)}
        onMomentumScrollEnd={(e) => this._onMomentumScrollBeginAndEnd(e)}
        keyboardDismissMode="on-drag">
        {scenes}
      </ScrollView>
    )
  }
  goToPage (page) {
    const rn = this
    const offset = page * rn.state.containerWidth;
    if (rn.scrollView) {
      rn.scrollView.scrollTo({x: offset, y: 0});
    }
    this.setState({
      currentPage: page
    })
  }
  renderTabBar (props) {
    return <TabBar {...props}></TabBar>
  }
  render () {
    const rn = this
    const tabBarProps = {
      goToPage: (page) => rn.goToPage(page),
      activeTab: rn.state.currentPage,
      tabs: rn._children().map((child) => child.props.label),
      scrollValue: rn.state.scrollValue,
      containerWidth: rn.state.containerWidth
    }
    if (this.props.tabBarActiveTextColor) {
      tabBarProps.activeTextColor = rn.props.tabBarActiveTextColor;
    }
    if (this.props.tabBarInactiveTextColor) {
      tabBarProps.inactiveTextColor = rn.props.tabBarInactiveTextColor;
    }
    tabBarProps.style = {
      position: 'absolute',
      left: 0,
      right: 0,
      [rn.props.tabBarPosition]: 0,
    }
    return (
      <View style={styles.scrollView}>
        {this.renderScrollableContent()}
        {rn.renderTabBar(tabBarProps)}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  scrollView: {
    flex: 1
  }
})