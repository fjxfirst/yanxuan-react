import React, {Component} from 'react'
import {Switch, Route,withRouter} from 'react-router-dom'
import Home from './containers/Home/Home'
import Interlayer from './components/Interlayer/Interlayer'
import FooterGuide from './components/FooterGuide/FooterGuide'
import KnowGood from './containers/KnowGood/KnowGood'
import Kind from './containers/Kind/Kind'
import './assets/js/adaptive'
import './assets/less/clearFix.less'


class App extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/Home' component={Home}/>
          <Route path='/KnowGood' component={KnowGood}/>
          <Route path='/Kind' component={Kind}/>
          <Route path='/ShopCart' component={KnowGood}/>
          <Route path='/Personage' component={KnowGood}/>
          <Route component={Interlayer}/>
        </Switch>
        {/*{currentNav?<FooterGuide/>:null}*/}
        <FooterGuide/>
      </div>
    )
  }
}
export default withRouter(App)