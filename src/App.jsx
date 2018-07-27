import React, {Component} from 'react'
import {Switch, Route,withRouter} from 'react-router-dom'
import Home from './containers/Home/Home'
import Interlayer from './components/Interlayer/Interlayer'
import FooterGuide from './components/FooterGuide/FooterGuide'
import KnowGood from './containers/KnowGood/KnowGood'
import Kind from './containers/Kind/Kind'
import ShopCart from './components/ShopCart/ShopCart'
import Login from './components/Login/Login'
import Personage from './components/Personage/Personage'
import Regist from './components/Regist/Regist'
import './assets/js/adaptive'
import './assets/less/clearFix.less'


class App extends Component {
state={
  paths:['Home','KnowGood','Kind','ShopCart']
}
componentWillUpdate(){
this.state.paths.find((path) => {
    /*console.log(path);
    console.log(this.props.location.pathname.split('/')[1]);*/
    return path === this.props.location.pathname.split('/')[1]
  });
}
  render() {
    return (
      <div id='appwrap'>
        <Switch>
          <Route path='/Home' component={Home}/>
          <Route path='/KnowGood' component={KnowGood}/>
          <Route path='/Kind' component={Kind}/>
          <Route path='/ShopCart' component={ShopCart}/>
          <Route path='/Personage' component={Personage}/>
          <Route path='/Login' component={Login}/>
          <Route path='/Regist' component={Regist}/>
          <Route component={Interlayer}/>
        </Switch>
        {/*{currentNav?<FooterGuide/>:null}*/}
        {this.state.paths.find((path) => {
          return path === this.props.location.pathname.split('/')[1]
        })?<FooterGuide/>:''}
      </div>
    )
  }
}
export default withRouter(App)