import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper } from './style'
import { formatDate, getImageSize } from '@/utils/format'
import Operator from '@/components/Operator'

interface Iprops {
  children?: ReactNode
  headerData: {
    coverImgUrl: string
    name: string
    creator: {
      avatarUrl: string
      nickname: string
    }
    createTime: number
    tags: string[]
    description: string
    operatorData?: {
      commentCount: number
      shareCount: number
      subscribedCount: number
    }
  }
}

const DetailHeader: FC<Iprops> = ({ headerData }) => {
  return (
    <HeaderWrapper>
      <div className="header-info">
        <div className="avatar">
          <img src={getImageSize(headerData.coverImgUrl, 200)} alt="" />
          <span className="msk sprite_cover"></span>
        </div>
        <div className="info">
          <div className="info-content">
            <div className="name">
              <i className="sprite_icon2"></i>
              <div className="tit">
                <h2>{headerData.name}</h2>
              </div>
            </div>
            <div className="creator">
              <div className="creator-avatar">
                <img
                  src={getImageSize(headerData.creator.avatarUrl, 40)}
                  alt=""
                />
              </div>
              <div className="nickname">{headerData.creator.nickname}</div>
              <div className="time">
                {formatDate(headerData.createTime)}&nbsp;创建
              </div>
            </div>
            <div className="operator">
              <Operator operatorData={headerData.operatorData}></Operator>
            </div>
            <div className="tags">
              <span>标签：</span>
              {headerData.tags.map((item) => {
                return (
                  <span className="tag sprite_button" key={item}>
                    <i className=" sprite_button">{item}</i>
                  </span>
                )
              })}
            </div>
            <div className="description">介绍：{headerData.description}</div>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default memo(DetailHeader)
