/**
 * Created by linxiaojie on 2016/11/10.
 */
import React, {Component} from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView
} from 'react-native'
import SingleLineApp from './SingleLineApp.js'
import MMNavigatorHeader from './MMNavigatorHeader'
export default class MMDetailList extends Component{
    constructor(props){
      super(props)
      this.state = {
        items: []
      }
    }
    componentDidMount (){
      this.setState({
        items: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map(() => {
          return (
            <SingleLineApp navigator={this.props.navigator}  key={item.contentId}></SingleLineApp>
          )
        })
      })
    }
    render(){
      const navigator = this.props.navigator
      const items = this.state.items || <View></View>
        return (
            <View style={styles.container}>
              <MMNavigatorHeader navigator={navigator} title={this.props.title}></MMNavigatorHeader>
              <ScrollView
                label="home"
                directionalLockEnabled
                showsVerticalScrollIndicator={false}
                automaticallyAdjustContentInsets={false}>
                {items}
              </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})