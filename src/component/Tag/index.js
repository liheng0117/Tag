import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { SetTag } from '@/action/home'
import { Tag } from 'antd'

function Tags(props) {
    const { data } = props
    const close = (e) => {
        e = data.filter((v, i) => {
            return v.key != e.key
        })
        props.SetTag(e)
    }
    const { list } = props
    console.log(list, 2)
    return (
        <div>
            {
                list.map((v, i) => {
                    console.log(v)
                    return (
                        <Tag key={i} visible={true} closable onClose={() => close(v)}>{v.name}</Tag>
                    )
                })
            }
        </div>
    )
}
export default connect(({ home }) => {
    return {
        list: home.list
    }
}, {
        SetTag
    })(Tags)