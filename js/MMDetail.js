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
import server from './server'
export default class MMDetail extends Component{
    render(){
        /*
        *
         {
         "appName": "欢乐斗地主",
         "iconUrl": "http://u5.mm-img.mmarket.com:80/rs/res2/21/2016/10/28/a497/234/49234497/logo120x1207615089820-png8.png",
         "contentId": "300008993578",
         "categoryurl": "mm://categorydetail?requestid=app_list_mm4.1&parentId=678936540&seqtype=hotlist&needNewActivity=true&defaultType=1",
         "category": "游戏>棋牌游戏",
         "slogan": "不花一分钱也能欢乐斗地主",
         "editorialReviews": "欢乐斗地主国民经典游戏再现，好玩速度快，全场零流量，装机必备，极力推荐！",
         "interested": "400万+下载",
         "providerId": "",
         "description": "《欢乐斗地主》是当前最好玩的欢乐斗地主游戏，由顶级设计倾力打造，游戏画面精美，节奏快，玩法简单，欢乐性强！\r\n1.无须登录、无须注册、下载即玩。\r\n2.游戏共有3个模式：自由对战、无限翻倍和残局破解\r\n3.清新典雅的风格，原汁原味的棋牌享受；\r\n4.超大牌面让您运指如飞，远离误操作的烦恼；",
         "thumbnails": [
         "http://u5.mm-img.mmarket.com/rs/res2/21/2015/08/18/a091/267/45267091/picture198x3309863542456.jpg",
         "http://u5.mm-img.mmarket.com/rs/res2/21/2015/08/18/a095/267/45267095/picture198x3309863545000.jpg",
         "http://u5.mm-img.mmarket.com/rs/res2/21/2015/08/18/a099/267/45267099/picture198x3309863545925.jpg",
         "http://u5.mm-img.mmarket.com/rs/res2/21/2015/08/18/a103/267/45267103/picture198x3309863548593.jpg"
         ],
         "orderUrl": "http://apk.mmarket.com/cdn/rs/prepublish_open21/23/2016/10/28/a458/235/49235458/com.i3game.hlddz_mm_1.8.10_90_300008993578_0000000002.apk?cid=300008993578&gid=0000x8627347801100008014793300008993578&MD5=71ce4364fc3bd8c040b8049944575856&ts=201611101751&tk=338C&v=1"
         },
        * */
        const detail = server.getDetail()
       const navigator = this.props.navigator
       return (
         <View style={styles.container}>
             <MMNavigatorHeader navigator={navigator} title={detail.appName}></MMNavigatorHeader>
             <ScrollView
               directionalLockEnabled
               showsVerticalScrollIndicator={false}
               automaticallyAdjustContentInsets={false}>
                 <View style={styles.item}>
                     <Image  style={styles.logo} source={{uri: detail.iconUrl}}></Image>
                     <Text style={styles.topicItemName}>{detail.appName}</Text>
                     <Text style={styles.topicItemSize}>35.66M</Text>
                 </View>
                 <View style={styles.itemImages}>
                     <ScrollView
                       horizontal
                       automaticallyAdjustContentInsets={false}
                       showsHorizontalScrollIndicator={false}>
                         <View style={styles.images}>
                             {
                               detail.thumbnails.map((url) => {
                                   return (
                                     <Image source={{uri: url}} style={styles.image}></Image>
                                   )
                               })
                             }
                         </View>
                     </ScrollView>
                 </View>
                 <View style={styles.desc}>
                     <Text>简介介绍</Text>
                     <Text>{detail.description}</Text>
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
        flex: 1,
        backgroundColor: '#f0f0f0'
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