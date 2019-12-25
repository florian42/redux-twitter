import React from 'react'
import {Input} from 'antd'

const {Search} = Input


export default function Compose() {
  return <Search placeholder='What is on your mind?' enterButton="Tweet" size='large'
                 onSearch={value => console.log('Tweeted: ', value)}/>

}