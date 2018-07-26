import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './Interlayer.less'
import yan from './img/yanxuan.jpg'
import newPerson from './img/newPerson.jpg'
import appDownload from './img/appDownload.jpg'
export default class Interlayer extends Component {
  render() {
    return (
      <div id="interlayer-wrap">
        <img src={yan}/>
        <img src={newPerson}/>
        <div id="app-wrap">
          <img src={appDownload}/>
          {/*<NavLink className="download" to=""></NavLink>*/}
          <NavLink className="phone-browse" to="/Home"></NavLink>
        </div>
      </div>
    )
  }
}