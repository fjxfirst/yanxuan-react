import React, {Component} from 'react'
import {NavLink, Route, Switch,Redirect} from 'react-router-dom'
import {getHeadCateList} from '../../redux/actions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import HomeMain from '../HomeMain/HomeMain'
import Cate from '../Cate/Cate'
import logotext from '../../assets/img/logotext.png'
import './Home.less'
import BScroll from 'better-scroll'

class Home extends Component {
  static propTypes = {
    getHeadCateList: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.getHeadCateList();
    new BScroll('.nav-wrap', {
      scrollX: true
    });
  }

  goTo(path) {
    this.props.history.replace(path)
  }

  render() {
    const {headCates} = this.props;
    return (
      <div>
        <header className="header">
          <div className="header-top-wrap clearFix">
            <NavLink className="logotext" to="/Home" replace>
              <img src={logotext}/>
            </NavLink>
            <NavLink className="search" to="">
              <i className="icon-search"></i>搜索商品，共10733款好物
            </NavLink>
          </div>
          <nav className="nav-wrap clearFix">
            <ul className="ulList">
              <li onClick={()=>{this.goTo('/Home/HomeMain')}} className={this.props.location.pathname==='/Home/HomeMain'?'active':''}>推荐</li>
              {
                headCates.map((headCate, index) => {
                  return (<li key={index} className={this.props.location.pathname===`/Home/Cate/${index}`?'active':''}
                              onClick={()=>{this.goTo(`/Home/Cate/${index}`)}}>{headCate.name}</li>)
                })
              }
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path='/Home/HomeMain' component={HomeMain}/>
          <Route path='/Home/Cate/:index' component={Cate}/>
          <Redirect to='/Home/HomeMain'/>
        </Switch>
      </div>
    )
  }
}

export default connect(
  state => ({headCates: state.headCates}),
  {getHeadCateList}
)(Home)