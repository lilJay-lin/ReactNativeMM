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
    locked: PropTypes.bool,
    renderTabBar: PropTypes.any,
    tabHeight: PropTypes.number
  }
  static defaultProps = {
    tabBarPosition: 'top',
    initialPage: 0,
    locked: false,
    tabHeight: 50,
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
    if (this.props.renderTabBar === false) {
      return null;
    } else if (this.props.renderTabBar) {
      return this.props.renderTabBar(props)
    } else {
      return <TabBar {...props}></TabBar>
    }
  }
  render () {
    const rn = this
    const props = rn.props
    const tabBarProps = {
      goToPage: (page) => rn.goToPage(page),
      activeTab: rn.state.currentPage,
      tabs: rn._children().map((child) => child.props.label),
      scrollValue: rn.state.scrollValue,
      containerWidth: rn.state.containerWidth
    }
    if (props.tabBarActiveTextColor) {
      tabBarProps.activeTextColor = props.tabBarActiveTextColor;
    }
    if (props.tabBarInactiveTextColor) {
      tabBarProps.inactiveTextColor = props.tabBarInactiveTextColor;
    }
    if (props.tabBarTextStyle) {
      tabBarProps.textStyle = props.tabBarTextStyle;
    }
    if (props.tabBarUnderlineStyle) {
      tabBarProps.underlineStyle = props.tabBarUnderlineStyle;
    }
    tabBarProps.style = {
      position: 'absolute',
      left: 0,
      right: 0,
      [props.tabBarPosition]: 0,
      height: props.tabHeight
    }
    const padding = props.tabBarPosition === 'top' ? 'paddingTop' : 'paddingBottom'
    return (
      <View style={[styles.scrollView, {[padding]: props.tabHeight}]}>
        {rn.renderScrollableContent()}
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