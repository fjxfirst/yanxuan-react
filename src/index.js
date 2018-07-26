import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'
import './mock/mockServer'
import App from './App'
import store from './redux/store'
import 'reset-css'
import './assets/css/index.css'
import 'swiper/dist/css/swiper.min.css'
ReactDOM.render(
  (
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  ),
  document.getElementById('app'));
