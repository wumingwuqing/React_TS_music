import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DetailHeaderWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface Iprops {
  children?: ReactNode
  name: string
  commentCount: number
  shareCount: number
  coverImgUrl: string
  subscribedCount: number
}

const DetailHeader: FC<Iprops> = ({
  name,
  commentCount,
  shareCount,
  coverImgUrl,
  subscribedCount
}) => {
  function handlePlayClick(id: any): void {
    throw new Error('Function not implemented.')
  }

  return (
    <DetailHeaderWrapper>
      <div className="detail-left">
        <img src={getImageSize(coverImgUrl, 150)} alt="" />
        <div className="sprite_cover  cover"></div>
      </div>
      <div className="detail-right">
        <div className="detail-info">
          <h2 className="detail-name">{name}</h2>
        </div>
        <div className="detail-operator">
          <div
            className="sprite_button btn play"
            onClick={(e) => handlePlayClick(1)}
          >
            <span>播放</span>
          </div>
          <div className="sprite_button btn add"></div>
          <div className="sprite_button btn favor">
            <span>收藏</span>
          </div>
          <div className="sprite_button btn share">
            <span>分享</span>
          </div>
          <div className="sprite_button btn download">
            <span>下载</span>
          </div>
          <div className="sprite_button btn comment">
            <span>评论</span>
          </div>
        </div>
      </div>
    </DetailHeaderWrapper>
  )
}

export default memo(DetailHeader)
