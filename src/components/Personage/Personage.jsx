import React, {Component} from 'react'
import HeaderGuide from '../HeaderGuide/HeaderGuide'
import {NavLink} from 'react-router-dom'
import './Personage.less'
export default class Personage extends Component {
  render() {
    return (
      <div className="person-wrap">
        <HeaderGuide/>
        <section className="login-switch-wrap">
          <div className="logo">
            <img src={require("./img/personlogo.png")}/>
          </div>
          <div className="login-switch">
            <NavLink className="switchPhone" to="/Login">
              <i className="icon-iphone"></i><span>手机号码登录</span>
            </NavLink>
            <NavLink className="switchEmail" to="">
              <i className="icon-email"></i><span>邮箱账号登录</span>
            </NavLink>
            <NavLink className="phoneSingIn" to="/Regist">
              手机号快捷注册<i className="icon-goahead"></i>
            </NavLink>
          </div>
          <div className="login-method">
            <span><i className="icon-weixin"></i>微信</span><i className="line"></i>
            <span><i className="icon-qq"></i>QQ</span><i className="line"></i>
            <span><i className="icon-weibo"></i>微博</span>
          </div>
        </section>
      </div>
    )
  }
}