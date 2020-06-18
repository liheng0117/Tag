import React from 'react'
import Loadable from 'react-loadable'
import { Spin } from 'antd'
import './style.less'

const Loading = () => (
  <div className="load">
    <Spin tip="Loading..." />
  </div>
)

export default function (loader, loading = Loading) {
  return Loadable({
    loader,
    loading,
  })
}
