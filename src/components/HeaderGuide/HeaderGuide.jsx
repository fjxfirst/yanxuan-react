import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import logotext from '../../assets/img/logotext.png'
import './HeaderGuide.less'
export default class HeaderGuide extends Component {
  render() {
    return (
      <header id="component-header">
        <NavLink className="home-icon" to="/Home"></NavLink>
        <NavLink className="logo-title" to="/Home">
          <img src={logotext}/>
        </NavLink>
        <NavLink className="search-icon" to="">
          <i className="icon-search"></i>
        </NavLink>
        <NavLink className="shopcart-icon" to="/ShopCart"></NavLink>
      </header>
    )
  }
}