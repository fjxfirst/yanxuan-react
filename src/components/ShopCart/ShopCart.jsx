import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import './ShopCart.less'
class ShopCart extends Component {
  goTo(path){
    this.props.history.replace(path)
  }

  render() {
    return (
      <div className="shopCart-wrap">
        <header className="shipcart-header">
          <p>购物车</p><span>领券</span>
        </header>
        <div className="three">
          <span><i></i>30天无忧退货</span>
          <span><i></i>48小时快速退货</span>
          <span><i></i>满88元免邮费</span>
        </div>
        <div className="img-content">
          <div className="shopcartimgwrap">
            <div className="shopcartImg"></div>
            <span>去添加点什么吧</span>
          </div>
          <div className="loginbtn" onClick={()=>{this.goTo('/Personage')}}>
          登录
        </div>
      </div>
  </div>
    )
  }
}
export default withRouter(ShopCart)