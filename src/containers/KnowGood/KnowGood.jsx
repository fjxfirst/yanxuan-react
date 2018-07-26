import React, {Component} from 'react'
import {connect} from 'react-redux'
import {
  getBanners,
  getColumns,
  getRecommend,
  getTenfifteens,
  getZhenpin,
  getYxLook,
  getFindMores
} from '../../redux/actions'
import HeaderGuide from '../../components/HeaderGuide/HeaderGuide'
import PropTypes from 'prop-types'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import './KnowGood.less'
import '../../assets/less/line.less'

class KnowGood extends Component {
  static propTypes = {
    getBanners: PropTypes.func.isRequired,
    getColumns: PropTypes.func.isRequired,
    getRecommend: PropTypes.func.isRequired,
    getTenfifteens: PropTypes.func.isRequired,
    getZhenpin: PropTypes.func.isRequired,
    getYxLook: PropTypes.func.isRequired,
    getFindMores: PropTypes.func.isRequired
  }


  componentDidMount() {
    console.log('xxx');
    this.props.getBanners()
    this.props.getColumns()
    this.props.getRecommend()
    this.props.getTenfifteens()
    this.props.getZhenpin()
    this.props.getYxLook()
    this.props.getFindMores()
    new BScroll('.recommend-article', {
      scrollY: false,
      scrollX: true
    });
    new BScroll('.ten-container', {
      scrollY: false,
      scrollX: true
    })
  }

  componentWillUnmount() {
    if (this.swiper) { // 销毁swiper
      this.swiper.destroy()
    }
  }
  componentDidUpdate(){
    if(this.swiper){
      this.swiper.slideTo(0, 0)
      this.swiper.destroy()
      this.swiper = null;
    }
    this.swiper = new Swiper('.yxrecommend-container', {
      loop: true,
      slidesOffsetBefore: window.innerWidth * 0.04,
      width: window.innerWidth - window.innerWidth * 0.08,
      observer:true
    });

  }
  render() {
    const {banners, columns, recommend, tenfifteens, zhenpin, yxLook, findMores} = this.props;
    return (
      <div className='knowgood'>
        <HeaderGuide/>
        <div className="knowgood-scroll-wrap">
          <div className="knowgood-content">
            <section className="yxrecommend clearFix">
              <div className="yxrecommend-container swiper-container">
                <ul className="recommend-list swiper-wrapper">
                  {
                    banners.map((banner, index) => {
                      return (
                        <li className="swiper-slide" key={index}>
                          <div className="img-wrap">
                            <img src={banner.picUrl}/>
                            <div className="img-mask">
                              <p>—{banner.subTitle}—</p>
                              <p>{banner.title}</p>
                              <p>{banner.desc}</p>
                            </div>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
              <div className="recommend-article">
                <ul className="article-list">
                  {
                    columns.map((column, index) => {
                      return (
                        <li key={index}>
                          <div className="article-img">
                            <img src={column.picUrl}/>
                            <p className="article-count">{column.articleCount}</p>
                          </div>
                          <p className="recommend-name">{column.title}</p>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </section>

            {
              recommend.recommendBanner &&
              <section className="foryourecommend">
                <header className="recommend-header">为你推荐</header>
                <div className="first-recommend">
                  <div className="recommendimg-wrap">
                    <img src={recommend.recommendBanner.picUrl}/>
                    <p>{recommend.recommendBanner.typeName}</p>
                  </div>
                  <p>{recommend.recommendBanner.title}<span>{recommend.recommendBanner.priceInfo}</span></p>
                  <span className="style">{recommend.recommendBanner.subtitle}</span>
                </div>
                {
                  recommend.recommends.map((re, index) => {
                    return (
                      <div className="person-recommend clearFix" key={index}>
                        <div className="comment">
                          <div className="person">
                            <img src={re.avatar}/>
                            <span>{re.nickname}</span>
                          </div>
                          <p className="goodInfo">{re.title},...</p>
                        </div>
                        <div className="imginfo">
                          <img src={re.picUrl}/>
                          <p>{re.typeName}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </section>
            }
            <section className="ten">
              <header className="ten-head">十点一刻</header>
              <div className="ten-container">
                <ul className="ten-list">
                  {
                    tenfifteens.map((item, index) => {
                      return (
                        <li key={index}>
                          <div className="tem-item">
                            <p className="topic">—今日话题—</p>
                            <p className="danshen">{item.title}</p>
                            <p className="saydanshen">{item.desc}</p>
                            <div className="join">
                              {
                                item.participantAvatar.map((part, index) => {
                                  return (
                                    <img src={part} key={index}/>
                                  )
                                })
                              }
                              <span className="join-count">{item.participantNum}</span><span
                              className="join-info">人参与话题</span>
                            </div>
                          </div>
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </section>

            {zhenpin.zhenOne&&
              <section className="foryourecommend">
                <header className="recommend-header">为你推荐</header>
                <div className="first-recommend">
                  <div className="recommendimg-wrap">
                    <img src={zhenpin.zhenOne.picUrl}/>
                    <p>{zhenpin.zhenOne.nickname}</p>
                  </div>
                  <p>{zhenpin.zhenOne.title}<span>{zhenpin.zhenOne.priceInfo}</span></p>
                  <span className="style">{zhenpin.zhenOne.subtitle}</span>
                </div>
                {
                  zhenpin.zhenpins.map((re, index) => {
                    return (
                      <div className="person-recommend clearFix" key={index}>
                        <div className="comment">
                          <div className="person">
                            <img src={re.avatar}/>
                            <span>{re.nickname}</span>
                          </div>
                          <p className="goodInfo">{re.title},...</p>
                        </div>
                        <div className="imginfo">
                          <img src={re.picUrl}/>
                          <p>{re.typeName}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </section>
            }
            <section className="yxLook">
              <header className="yxLook-header">严选LOOK</header>
              <div className="yxLook-imgwrap">
                <img src={yxLook.picUrl}/>
              </div>
              <div className="author-wrap">
                <div className="author">
                  <img src={yxLook.avatar}/>
                  <span>{yxLook.nickname}</span>
                </div>
                <div className="yxLook-author-say">{yxLook.content}</div>
              </div>

            </section>
            <div className="line-title">
              <div className="line-text">更多精彩</div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({
    banners: state.banners,
    columns: state.columns,
    recommend: state.recommend,
    tenfifteens: state.tenfifteens,
    zhenpin: state.zhenpin,
    yxLook: state.yxLook,
    findMores: state.findMores
  }),
  {
    getBanners,
    getColumns,
    getRecommend,
    getTenfifteens,
    getZhenpin,
    getYxLook,
    getFindMores
  }
)(KnowGood)
