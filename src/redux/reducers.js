import {
  RECEIVE_HEADCATES,
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
import {combineReducers} from 'redux'

function headCates(state = [], action) {
  switch (action.type) {
    case RECEIVE_HEADCATES:
      return action.data;
    default:
      return state;
  }
}

function focusLists(state = [], action) {
  switch (action.type) {
    case RECEIVE_FOCUSLISTS:
      return action.data;
    default:
      return state;
  }
}

function tagLists(state = [], action) {
  switch (action.type) {
    case RECEIVE_TAGLISTS:
      return action.data;
    default:
      return state;
  }
}

function newItemLists(state = [], action) {
  switch (action.type) {
    case RECEIVE_NEWITEMLISTS:
      return action.data;
    default:
      return state;
  }
}

function popularItemLists(state = [], action) {
  switch (action.type) {
    case RECEIVE_POPULARITEMLISTS:
      return action.data;
    default:
      return state;
  }
}

function flashSaleIndexVO(state = {}, action) {
  switch (action.type) {
    case RECEIVE_FLASHSALEINDEXVO:
      return action.data;
    default:
      return state;
  }
}

function topicLists(state = [], action) {
  switch (action.type) {
    case RECEIVE_TOPICLISTS:
      return action.data;
    default:
      return state;
  }
}

function cateLists(state = [], action) {
  switch (action.type) {
    case RECEIVE_CATELISTS:
      return action.data;
    default:
      return state;
  }
}

function banners(state = [], action) {
  switch (action.type) {
    case RECEIVE_BANNERS:
      return action.data;
    default:
      return state;
  }
}

function columns(state = [], action) {
  switch (action.type) {
    case RECEIVE_COLUMNS:
      return action.data;
    default:
      return state;
  }
}

function recommend(state = {}, action) {
  switch (action.type) {
    case RECEIVE_RECOMMEND:
      return action.data;
    default:
      return state;
  }
}

function tenfifteens(state = [], action) {
  switch (action.type) {
    case RECEIVE_TENFIFTEENS:
      return action.data;
    default:
      return state;
  }
}

function zhenpin(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ZHENPIN:
      return action.data;
    default:
      return state;
  }
}

function yxLook(state = {}, action) {
  switch (action.type) {
    case RECEIVE_YXLOOK:
      return action.data;
    default:
      return state;
  }
}

function findMores(state = [], action) {
  switch (action.type) {
    case RECEIVE_FINDMORES:
      return action.data;
    default:
      return state;
  }
}

function categorys(state = [], action) {
  switch (action.type) {
    case RECEIVE_CATEGORYS:
      return action.data;
    default:
      return state;
  }
}
export default combineReducers({
  headCates, focusLists, tagLists, newItemLists, popularItemLists, flashSaleIndexVO, topicLists, cateLists,
  banners, columns, recommend, tenfifteens, zhenpin, yxLook, findMores,
  categorys
})