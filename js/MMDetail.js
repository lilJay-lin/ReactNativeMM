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
import DownloadButton from './DownloadButton'
import MMNavigatorHeader from './MMNavigatorHeader'
export default class MMDetail extends Component{
    render(){
       const navigator = this.props.navigator
       return (
         <View style={styles.container}>
             <MMNavigatorHeader navigator={navigator} title={this.props.title}></MMNavigatorHeader>
             <ScrollView
               directionalLockEnabled
               showsVerticalScrollIndicator={false}
               automaticallyAdjustContentInsets={false}>
                 <View style={styles.item}>
                     <Image  style={styles.logo} source={require('../images/1.png')}></Image>
                     <Text style={styles.topicItemName}>美团</Text>
                     <Text style={styles.topicItemSize}>35.66M</Text>
                 </View>
                 <View style={styles.itemImages}>
                     <ScrollView
                       horizontal
                       pagingEnabled
                       automaticallyAdjustContentInsets={false}
                       showsHorizontalScrollIndicator={false}>
                         <View style={styles.images}>
                             <Image source={require('../images/1.png')} style={styles.image}></Image>
                             <Image source={require('../images/1.png')} style={styles.image}></Image>
                             <Image source={require('../images/1.png')} style={styles.image}></Image>
                             <Image source={require('../images/1.png')} style={styles.image}></Image>
                         </View>
                     </ScrollView>
                 </View>
                 <View style={styles.desc}>
                     <Text>简介介绍</Text>
                 </View>
             </ScrollView>
             <View style={styles.download}>
                 <DownloadButton btnStyle={styles.btnStyle} btnTextStyle={styles.btnTextStyle}></DownloadButton>
             </View>
         </View>
       )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 5,
        marginBottom: 10
    },
    item: {
        paddingTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
    topicItemName: {
        fontSize: 14,
        color: '#333333'
    },
    topicItemSize: {
        fontSize: 11,
        color: '#999999',
        marginBottom: 4
    },
    desc: {
        marginTop: 8,
        backgroundColor: "#fff",
        height: 200,
        paddingLeft: 10,
        paddingVertical: 10
    },
    itemImages: {
        paddingVertical: 8,
        marginTop: 8,
        backgroundColor: "#fff"
    },
    images: {
        flexDirection: 'row',
        height: 200
    },
    image: {
        width: 100,
        height: 200,
        marginRight: 5
    },
    download: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 65,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: '#fff'
    },
    btnStyle: {
        flex: 1,
        height: 45,
        backgroundColor: '#23beff'
    },
    btnTextStyle: {
        color: '#fff'
    }
})