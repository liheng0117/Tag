import React, { useState } from 'react'
import { Table, Radio, Divider } from 'antd'
import { connect } from 'react-redux'
import { SetCheckBox } from '@/action/home'
import Tag from '@/component/Tag'

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '地址',
    dataIndex: 'address',
  },
]

export default connect(
  ({ home }) => {
    return {
      list: home.list,
    }
  },
  {
    SetCheckBox,
  }
)(Home)
function Home(props) {
  const { list } = props
  const onSelectChange = (selectedRowKeys, a) => {
    console.log(selectedRowKeys, 1)
    props.SetCheckBox(a)
  }
  const data = [
    {
      key: '1',
      name: '小花',
      age: 11,
      address: '1111',
    },
    {
      key: '2',
      name: '小兰',
      age: 22,
      address: '2222',
    },
    {
      key: '3',
      name: '小白',
      age: 33,
      address: '3333',
    },
  ]

  const rowSelection = {
    selectedRowKeys: list.map((v, i) => v.key),
    onChange: onSelectChange,
  }

  return (
    <div>
      <Tag data={list} />
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  )
}
