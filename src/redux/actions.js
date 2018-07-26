import {RECEIVE_HEADCATES,
  RECEIVE_FOCUSLISTS,
  RECEIVE_TAGLISTS,
  RECEIVE_NEWITEMLISTS,
  RECEIVE_POPULARITEMLISTS,
  RECEIVE_FLASHSALEINDEXVO,
  RECEIVE_TOPICLISTS,
  RECEIVE_CATELISTS,
  RECEIVE_BANNERS,
  RECEIVE_COLUMNS,
  RECEIVE_RECOMMEND,
  RECEIVE_TENFIFTEENS,
  RECEIVE_ZHENPIN,
  RECEIVE_YXLOOK,
  RECEIVE_FINDMORES,
  RECEIVE_CATEGORYS
} from "./action-types";

import {reqHeadCateList,
  reqFocusList,
  reqPolicyDesclist,
  reqTagList,
  reqNewItemList,
  reqPopularItemList,
  reqFlashSaleIndexVO,
  reqTopicList,
  reqCateList,
  reqBanner,
  reqColumn,
  reqRecommend,
  reqTenfifteen,
  reqZhenpin,
  reqYxLook,
  reqFindMore,
  reqCategoryData
} from '../api/index'
const get_headCateList=(headCates)=>({type:RECEIVE_HEADCATES,data:headCates})
const get_focuslists=(focusLists)=>({type:RECEIVE_FOCUSLISTS,data:focusLists})
const get_tagLists=(tagLists)=>({type:RECEIVE_TAGLISTS,data:tagLists})
const get_newItemLists=(newItemLists)=>({type:RECEIVE_NEWITEMLISTS,data:newItemLists})
const get_popularItemLists=(popularItemLists)=>({type:RECEIVE_POPULARITEMLISTS,data:popularItemLists})
const get_flashSaleIndexVO=(flashSaleIndexVO)=>({type:RECEIVE_FLASHSALEINDEXVO,data:flashSaleIndexVO})
const get_topicLists=(topicLists)=>({type:RECEIVE_TOPICLISTS,data:topicLists})
const get_cateLists=(cateLists)=>({type:RECEIVE_CATELISTS,data:cateLists})

const get_banners=(banners)=>({type:RECEIVE_BANNERS,data:banners})
const get_columns=(columns)=>({type:RECEIVE_COLUMNS,data:columns})
const get_recommend=(recommend)=>({type:RECEIVE_RECOMMEND,data:recommend})
const get_tenfifteens=(tenfifteens)=>({type:RECEIVE_TENFIFTEENS,data:tenfifteens})
const get_zhenpin=(zhenpin)=>({type:RECEIVE_ZHENPIN,data:zhenpin})
const get_yxLook=(yxLook)=>({type:RECEIVE_YXLOOK,data:yxLook})
const get_findMores=(findMores)=>({type:RECEIVE_FINDMORES,data:findMores})

const get_categorys=(categorys)=>({type:RECEIVE_CATEGORYS,data:categorys})

export const getHeadCateList=()=>{
  return async dispatch=>{
    console.log('获取头部导航列表');
    const result=await reqHeadCateList();
    if(result.code===0){
      const headCates=result.data;
      dispatch(get_headCateList(headCates))
    }
  }
}
export const getFocuslists=()=>{
  return async dispatch=>{
    console.log('获取轮播图');
    const result=await reqFocusList();
    if(result.code===0){
      const focusLists=result.data;
      dispatch(get_focuslists(focusLists))
    }
  }
}
export const getTagLists=()=>{
  return async dispatch=>{
    console.log('获取品牌制造商');
    const result=await reqTagList();
    if(result.code===0){
      const tagLists=result.data;
      dispatch(get_tagLists(tagLists))
    }
  }
}
export const getNewItemLists=()=>{
  return async dispatch=>{
    const result=await reqNewItemList();
    if(result.code===0){
      const newItemLists=result.data;
      dispatch(get_newItemLists(newItemLists))
    }
  }
}
export const getPopularItemLists=()=>{
  return async dispatch=>{
    const result=await reqPopularItemList();
    if(result.code===0){
      const popularItemLists=result.data;
      dispatch(get_popularItemLists(popularItemLists))
    }
  }
}
export const getFlashSaleIndexVO=()=>{
  return async dispatch=>{
    const result=await reqFlashSaleIndexVO();
    if(result.code===0){
      const flashSaleIndexVO=result.data;
      dispatch(get_flashSaleIndexVO(flashSaleIndexVO))
    }
  }
}
export const getTopicLists=()=>{
  return async dispatch=>{
    const result=await reqTopicList();
    if(result.code===0){
      const topicLists=result.data;
      dispatch(get_topicLists(topicLists))
    }
  }
}
export const getCateLists=()=>{
  return async dispatch=>{
    const result=await reqCateList();
    if(result.code===0){
      const cateLists=result.data;
      dispatch(get_cateLists(cateLists))
    }
  }
}

export const getBanners=()=>{
  return async dispatch=>{
    const result=await reqBanner();
    if(result.code===0){
      const banners=result.data;
      dispatch(get_banners(banners))
    }
  }
}
export const getColumns=()=>{
  return async dispatch=>{
    const result=await reqColumn();
    if(result.code===0){
      const columns=result.data;
      dispatch(get_columns(columns))
    }
  }
}
export const getRecommend=()=>{
  return async dispatch=>{
    const result=await reqRecommend();
    if(result.code===0){
      const recommend=result.data;
      dispatch(get_recommend(recommend))
    }
  }
}
export const getTenfifteens=()=>{
  return async dispatch=>{
    const result=await reqTenfifteen();
    if(result.code===0){
      const tenfifteens=result.data;
      dispatch(get_tenfifteens(tenfifteens))
    }
  }
}
export const getZhenpin=()=>{
  return async dispatch=>{
    const result=await reqZhenpin();
    if(result.code===0){
      const zhenpin=result.data;
      dispatch(get_zhenpin(zhenpin))
    }
  }
}
export const getYxLook=()=>{
  return async dispatch=>{
    const result=await reqYxLook();
    if(result.code===0){
      const yxLook=result.data;
      dispatch(get_yxLook(yxLook))
    }
  }
}
export const getFindMores=()=>{
  return async dispatch=>{
    const result=await reqFindMore();
    if(result.code===0){
      const findMores=result.data;
      dispatch(get_findMores(findMores))
    }
  }
}

export const getCategorys=()=>{
  return async dispatch=>{
    const result=await reqCategoryData();
    if(result.code===0){
      const categorys=result.data;
      dispatch(get_categorys(categorys))
    }
  }
}