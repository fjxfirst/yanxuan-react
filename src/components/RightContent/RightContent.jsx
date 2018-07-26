import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './RightContent.less'

export default class RightContent extends Component {
  static propTypes = {
    currentCate: PropTypes.object.isRequired
  }

  render() {

    let {currentCate} = this.props
    return (

      <div className="right-content-container">
        <div className="rightClassify">
          <div className="look"></div>
          {currentCate&&
          <div className="partition-title">—{currentCate.name}分类—</div>}
          {currentCate&&
          <section className="partition-container">
            <ul className="partition-list clearFix">
              {
                currentCate.subCateList.map((cateItem, index) => {
                  return (
                    <li key={index}>
                      <img src={cateItem.wapBannerUrl}/>
                      <div>{cateItem.name}</div>
                    </li>
                  )
                })
              }
            </ul>
          </section>}
        </div>
      </div>


    )
  }
}