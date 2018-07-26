import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getCategorys} from '../../redux/actions'
import {NavLink} from 'react-router-dom'
import BScroll from 'better-scroll'
import PropTypes from 'prop-types'
import RightContent from '../../components/RightContent/RightContent'
import './Kind.less'
class Kind extends Component {
  state={
    cateIndex:0,
  };
  static propTypes={
    getCategorys:PropTypes.func.isRequired
  };
  getCate(index){
    this.setState({
      cateIndex:index
    })
  }
  componentDidMount(){
    this.props.getCategorys()
  }
  render() {
    const{categorys}=this.props
    const {cateIndex}=this.state
    return (
      <div className="fenlei">
        <NavLink className="top-search" to="">
          <div className="search-inner">
            <i className="icon-search"></i>
            <p className="search-text">搜索商品，共<span>10857</span>款好物</p>
          </div>
        </NavLink>
        <section className="classify-content">
          <div className="leftClassify">
            <div className="classify-container">
              <ul className="classify-list">
                {
                  categorys.map((cate,index)=>{
                    return(
                      <li className={cateIndex===index?'on':''} key={index} onClick={()=>{this.getCate(index)}}>{cate.name}</li>
                    )
                  })
                }

            </ul>
          </div>
      </div>
          {categorys[cateIndex]&&
            <RightContent currentCate={categorys[cateIndex]}/>
          }

  </section>
  </div>
    )
  }
}
export default connect(
  state=>({categorys:state.categorys}),
  {getCategorys}
)(Kind)