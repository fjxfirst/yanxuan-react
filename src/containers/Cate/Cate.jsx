import React, {Component} from 'react'
import {getCateLists} from '../../redux/actions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import './Cate.less'
class Cate extends Component {
  static propTypes={
    getCateLists: PropTypes.func.isRequired
  }
  componentWillMount() {
    this.props.getCateLists();
  }

  render() {
    const {cateLists} = this.props;
    console.log(cateLists);
    const cate = cateLists[this.props.match.params.index]

    return (
      <div>
        <section className="poster-wrap">
          <div className="poster">
             <img src={cate.bannerUrl}/>
          </div>
        </section>
        <section className="Goods">
          <h1 className="Goods-header">{cate.name}好物</h1>
          <ul className="Goods-list">
            {
              cate.itemList.map((item,index)=>{
                return(
                  <li  key={index}>
                    <div className="goodInfo">
                      <img src={item.primaryPicUrl}/>
                      <p>{item.simpleDesc}</p>
                    </div>
                    <p className="goodTitle">{item.name}</p>
                    <span>￥{item.retailPrice}</span>
                  </li>
                )
              })
            }

        </ul>
      </section>
  </div>
    )
  }
}

export default connect(
  state => ({cateLists: state.cateLists}),
  {getCateLists}
)(Cate)