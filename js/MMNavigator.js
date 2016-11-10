/**
 * Created by linxiaojie on 2016/11/10.
 */
import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Navigator
} from 'react-native'

export default class MMNavigator extends Component {
    /**
     * 使用动态页面加载
     * @param route 路由
     * @param navigator 导航器
     * @returns {XML} 页面
     */
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight;
    }

    render() {
        return (
            <Navigator
                style={{flex:1}}
                initialRoute={{component: this.props.component}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}/>
        );
    }
}
const styles = StyleSheet.create({
    // 导航栏
    leftView: {
        paddingVertical: 10,
        backgroundColor: '#fff'
    },
    rightView: {
        paddingVertical: 10,
        backgroundColor: '#fff'
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
});