import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DetailWrapper } from './style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import DetailHeader from './c-cpns/DetailHeader'
import PlayList from '@/components/PlayList'
import DetailContent from './c-cpns/DetailContent'

interface Iprops {
  children?: ReactNode
}

const SongsDetail: FC<Iprops> = () => {
  const songsDetail = useAppSelector(
    (state) => state.songsDetail.songsDetail,
    shallowEqual
  )
  const headerData = {
    coverImgUrl: songsDetail.coverImgUrl || '',
    name: songsDetail.name || '',
    creator: {
      avatarUrl: songsDetail.creator.avatarUrl || '',
      nickname: songsDetail.creator.nickname || ''
    },
    createTime: songsDetail.createTime || 0,
    tags: songsDetail.tags || [],
    description: songsDetail.description || '',
    operatorData: {
      shareCount: songsDetail.shareCount,
      subscribedCount: songsDetail.subscribedCount,
      commentCount: songsDetail.commentCount
    }
  }
  console.log(songsDetail)
  return (
    <DetailWrapper>
      <div className="content wrap-v2">
        <div className="left">
          <DetailHeader headerData={headerData} />
          <DetailContent
            itemdata={songsDetail.tracks || []}
            playCount={songsDetail.playCount || 0}
            trackCount={songsDetail.trackCount || 0}
          />
        </div>
        <div className="right"></div>
      </div>
    </DetailWrapper>
  )
}

export default memo(SongsDetail)
