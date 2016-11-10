/**
 * Created by liljay on 2016/11/10.
 */

import React, { Component } from 'react'
import MMDetailList from './MMDetailList'
import MMDetail from './MMDetail'
export default class MMComponent extends Component{
  /**
   * 跳转页面至SecondPage
   * @param name 传递参数
   * @param type 动画类型
   */
  gotoNext() {
    const props = this.props.detail ? {title: "应用列表", component: MMDetailList} : {title: "应用详情", component: MMDetail}
    this.props.navigator.push({
      component: props.component,
      passProps: {},
      title: props.title
    })
  }
}