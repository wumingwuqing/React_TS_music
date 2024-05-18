import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DetailHeaderWrapper } from './style'
import { getImageSize } from '@/utils/format'
import Operator from '@/components/Operator'

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
  function handlePlayClick(): void {
    console.log('asdfaskdl')
  }
  const operatorData = { commentCount, shareCount, subscribedCount }
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
        <Operator playClick={handlePlayClick} operatorData={operatorData} />
      </div>
    </DetailHeaderWrapper>
  )
}

export default memo(DetailHeader)
