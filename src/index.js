import React from 'react';
import ReactDOM from 'react-dom';   //  前端渲染页面 
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Router from '@/router'
import { store } from '@/store'

ReactDOM.render(
  <Provider store={store}>
    <Router />
</Provider>,
  document.querySelector('#root')
);

