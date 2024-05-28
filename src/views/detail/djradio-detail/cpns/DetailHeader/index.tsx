import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper } from './style'
import { getImageSize } from '@/utils/format'
import classNames from 'classnames'

interface Iprops {
  children?: ReactNode
  itemData: any
}

const DetailHeader: FC<Iprops> = ({ itemData }) => {
  console.log(itemData)
  function desc(desc: string) {
    return desc.split('\n')
  }
  return (
    <HeaderWrapper>
      <div className="img">
        <img src={getImageSize(itemData.picUrl, 200)} alt="" />
      </div>
      <div className="info">
        <h1 className="title">
          <i className="sprite_icon2"></i>
          <span className="name"> {itemData.name}</span>
        </h1>
        <div className="autor">
          <img src={getImageSize(itemData.dj.avatarUrl, 35)} alt="" />
          <span>{itemData.dj.nickname}</span>
        </div>
        <div className="desc">
          <span className="category">{itemData.category}</span>
          {desc(itemData.desc).map((item: string, index) => (
            <span
              className={classNames('desc-item', { 'first-item': index === 0 })}
              key={index}
            >
              {item}
              <br />
            </span>
          ))}
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default memo(DetailHeader)
