/**
 * Created by linxiaojie on 2016/11/10
 */
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import MMScrollView from './MMScrollView'
import MMTabHost from './MMTabHost'
import MMRefreshableListView from './MMRefreshableListView'
import MMGameTabBar from './MMGameTabBar'
import MMGame from './MMGame'
import MMChoice from './MMChoice'
import MMEnjoy from './MMEnjoy'
import MMSoft from './MMSoft'
import MMWebView from './MMWebview'
import MMDetail from './MMDetail'
import MMDetailList from './MMDetailList'
export default class ReactNativeMM extends Component {
    constructor(props){
        super(props)
    }
    _handleLayout (e) {
        const {width, x, y, height} = e.nativeEvent.layout
    }
    renderTabBar (props) {
        return <MMTabHost {...props}></MMTabHost>
    }
    render() {
        const tabHostProps = {
            tabBarPosition: 'bottom',
            locked: true,
            renderTabBar: this.renderTabBar
        }
        let navigator = this.props.navigator
        return (
          <View style={styles.container} onLayout = {this._handleLayout}>
              <MMScrollView {...tabHostProps}>
                  <MMChoice label="choice" navigator={navigator}></MMChoice>
                  <MMSoft label="soft" navigator={navigator}></MMSoft>
                  <MMGame label="game" navigator={navigator}></MMGame>
                  <MMEnjoy label="enjoy" navigator={navigator}></MMEnjoy>
                  <View style={styles.flex} label="account">
                      <MMWebView></MMWebView>
                  </View>
              </MMScrollView>
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0'
    },
    flex: {
        flex: 1
    },
    home: {
        height: 800,
        backgroundColor: 'ivory'
    },
    soft: {
        height: 800,
        backgroundColor: 'antiquewhite'
    },
    game: {
        height: 800,
        backgroundColor: 'beige'
    },
    accout: {
        height: 800,
        backgroundColor: 'cornsilk'
    }
});
