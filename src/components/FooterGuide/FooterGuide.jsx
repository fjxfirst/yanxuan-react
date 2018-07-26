import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './FooterGuide.less'

export default class FooterGuide extends Component {
  render() {
    return (
      <div id="footer-wrap">
        <NavLink className="footer" to="/Home">
          <i className="footer-icon"></i>
          <span className="footer-name">首页</span>
        </NavLink>
        <NavLink className="footer" to="/KnowGood">
          <i className="footer-icon"></i>
          <span className="footer-name">识物</span>
        </NavLink>
        <NavLink className="footer" to="/Kind">
          <i className="footer-icon"></i>
          <span className="footer-name">分类</span>
        </NavLink>
        <NavLink className="footer" to="/ShopCart">
          <i className="footer-icon"></i>
          <span className="footer-name">购物车</span>
        </NavLink>
        <NavLink className="footer" to="/Personage">
          <i className="footer-icon"></i>
          <span className="footer-name">个人</span>
        </NavLink>
      </div>
    )
  }
}




