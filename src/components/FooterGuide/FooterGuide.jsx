import React, {Component} from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import './FooterGuide.less'

class FooterGuide extends Component {


  render() {
    return (
      <div id="footer-wrap">
        <NavLink className={ this.props.location.pathname.split('/')[1]=== 'Home'?'footer active1' :'footer'} to="/Home">
          <i className="footer-icon"></i>
          <span className="footer-name">首页</span>
        </NavLink>
        <NavLink className={ this.props.location.pathname.split('/')[1]=== 'KnowGood'?'footer active2' :'footer'} to="/KnowGood">
          <i className="footer-icon"></i>
          <span className="footer-name">识物</span>
        </NavLink>
        <NavLink className={ this.props.location.pathname.split('/')[1]=== 'Kind'?'footer active3' :'footer'} to="/Kind">
          <i className="footer-icon"></i>
          <span className="footer-name">分类</span>
        </NavLink>
        <NavLink className={ this.props.location.pathname.split('/')[1]=== 'ShopCart'?'footer active4' :'footer'} to="/ShopCart">
          <i className="footer-icon"></i>
          <span className="footer-name">购物车</span>
        </NavLink>
        <NavLink className={ this.props.location.pathname.split('/')[1]=== 'Personage'?'footer active5' :'footer'} to="/Personage">
          <i className="footer-icon"></i>
          <span className="footer-name">个人</span>
        </NavLink>
      </div>
    )
  }
}

export default withRouter(FooterGuide)



