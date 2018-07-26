import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './HomeMain.less'
import Swiper from 'swiper'
import BScroll from 'better-scroll'
import {
  getFocuslists,
  getTagLists,
  getNewItemLists,
  getPopularItemLists,
  getFlashSaleIndexVO,
  getTopicLists,
  getCateLists
} from '../../redux/actions'

class HomeMain extends Component {
  static propTypes = {
    getFocuslists: PropTypes.func.isRequired,
    getTagLists: PropTypes.func.isRequired,
    getNewItemLists: PropTypes.func.isRequired,
    getPopularItemLists: PropTypes.func.isRequired,
    getFlashSaleIndexVO: PropTypes.func.isRequired,
    getTopicLists: PropTypes.func.isRequired,
    getCateLists: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.getFocuslists();
    this.props.getTagLists();
    this.props.getNewItemLists();
    this.props.getPopularItemLists();
    this.props.getFlashSaleIndexVO();
    this.props.getTopicLists();
    this.props.getCateLists();

    /*new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        currentClass: 'my-pagination-current',
      }
    });*/
  }
componentDidMount(){
  new BScroll('.newGoods-container', {
    scrollX: true,
    scrollY: false
  });
  new BScroll('.popularIrem-container',{
    scrollX:true,
    scrollY: false
  });
  const thematicScroll = new BScroll('.thematic-container', {
    scrollX: true,
    scrollY: false
  });
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
    this.swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        currentClass: 'my-pagination-current',
      },
      observer:true
    });
  }
  render() {
    const {
      focusLists,
      tagLists,
      newItemLists,
      popularItemLists,
      flashSaleIndexVO,
      topicLists,
      cateLists
    } = this.props;

    const homeTagList = tagLists.slice(0, 4);
    return (
      <div>
        <section className="swiper">
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {
                focusLists.map((focu, index) => {
                  return (<div className="swiper-slide" key={index}>
                    <img src={focu.picUrl}/>
                  </div>)
                })
              }

            </div>
            <div className="swiper-pagination my-pagination-current"></div>
          </div>
          <div className="brand">
            <div className="brand-item"><i className="icon-dui2"></i><span>网易自营品牌</span></div>
            <div className="brand-item"><i className="icon-dui2"></i><span>30天无忧退货</span></div>
            <div className="brand-item"><i className="icon-dui2"></i><span>48小时快速退款</span></div>
          </div>
        </section>

        <section className="Manufacturer-wrap">
          <header className="Manufacturer-header">
            品牌制造商直供<i className="icon-rightcrl"></i>
          </header>
          <div className="Manufacturer-innerwrap clearFix">
            {
              homeTagList.map((tag, index) => {
                return (<div className="Manufacturer" key={index}>
                  <img src={tag.picUrl}/>
                  <p>{tag.name}</p>
                  <p>{tag.floorPrice}</p>
                </div>)
              })
            }

          </div>
        </section>

        <section className="newGoods">
          <header className="newGoods-header">
            <div className="newfa">新品首发</div>
            <div className="watchAll">查看全部&gt</div>
          </header>
          <div className="newGoods-container">
            <ul className="items-wrap">
              {
                newItemLists.map((newItem, index) => {
                  return (<li key={index}>
                    <div className="img-wrap">
                      <img src={newItem.primaryPicUrl}/>
                    </div>
                    <p>{newItem.name}</p>
                    <p>{newItem.simpleDesc}</p>
                    <span>￥{newItem.retailPrice}</span>
                  </li>)
                })
              }

             {/*<li>*/}
              {/*<div className="img-wrap">*/}
              {/*查看全部*/}
              {/*</div>*/}
              {/*</li>*/}
            </ul>
          </div>
        </section>

        <section className="newGoods">
          <header className="newGoods-header">
            <div className="newfa">人气推荐</div>
            <div className="watchAll">查看全部&gt</div>
          </header>
          <div className="newGoods-container popularIrem-container">
            <ul className="items-wrap">
              {
                popularItemLists.map((popularItem, index) => {
                  return (
                    <li key={index}>
                      <div className="img-wrap">
                        <img src={popularItem.primaryPicUrl}/>
                      </div>
                      <p>{popularItem.name}</p>
                      <p>{popularItem.simpleDesc}</p>
                      <span>￥{popularItem.retailPrice}</span>
                    </li>)
                })
              }

              {/*<li>*/}
              {/*<div className="img-wrap">*/}
              {/*查看全部*/}
              {/*</div>*/}
              {/*</li>*/}
            </ul>
          </div>
        </section>

        <section className="timeShopping">
          <div className="time-wrap">
            <p className="time-title">严选限时购</p>
            <div className="timer">
              <span>11</span>:
              <span>22</span>:
              <span>33</span>
            </div>
            <p className="time-info">下一场{'10:10'}开始</p>
          </div>
          <div className="time-img-wrap">
            <img src={flashSaleIndexVO.primaryPicUrl}/>
            <div className="price">
              <p className="smallprice">￥{flashSaleIndexVO.activityPrice}</p>
              <p className="bigprice">￥{flashSaleIndexVO.originPrice}</p>
            </div>
          </div>
        </section>

        <section className="fuli">
          {flashSaleIndexVO.saleIndexVO && <img src={flashSaleIndexVO.saleIndexVO.picUrl}/>}
        </section>

        <section className="thematic">
          <header className="thematic-header">专题精选 <i className="icon-rightcrl"></i></header>
          <div className="thematic-container">
            <ul className="thematic-wrap">
              {
                topicLists.map((topic, index) => {
                  return (
                    <li key={index}>
                      <img src={topic.itemPicUrl}/>
                      <p>{topic.title}<span>{topic.priceInfo}元起</span></p>
                      <p>{topic.subtitle}</p>
                    </li>
                  )
                })
              }

            </ul>
          </div>

        </section>

        {
          cateLists.map((cate, index) => {
            return (
              <section className="famliyGoods" key={index}>
                <h1 className="famliyGoods-header">{cate.name}好物</h1>
                <ul className="famliyGoods-list">
                  {
                    cate.itemList.map((item, index) => {
                      return (
                        <li key={index}>
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
            )
          })
        }


        <footer className="home-footer">
          <div className="footer-kind">
            <div className="download-app">下载APP</div>
            <div className="computer">电脑版</div>
          </div>
          <p className="copyright">
            <span>网易公司版权所有 © 1997-2018</span>
            <span>食品经营许可证：JY13301080111719</span>
          </p>
        </footer>

        <div className="rightfly"></div>
      </div>)
  }
}

export default connect(
  state => ({
    focusLists: state.focusLists,
    tagLists: state.tagLists,
    newItemLists: state.newItemLists,
    popularItemLists: state.popularItemLists,
    flashSaleIndexVO: state.flashSaleIndexVO,
    topicLists: state.topicLists,
    cateLists: state.cateLists
  }),
  {
    getFocuslists,
    getTagLists,
    getNewItemLists,
    getPopularItemLists,
    getFlashSaleIndexVO,
    getTopicLists,
    getCateLists
  }
)(HomeMain)