import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongsDetailWrapper } from './style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import DetailHeader from './c-cpns/DetailHeader'
import DetailContent from './c-cpns/DetailContent'
import LovePeople from './c-cpns/LovePeople'
import RelatedSongs from './c-cpns/RelatedSongs'

interface Iprops {
  children?: ReactNode
}

const SongsDetail: FC<Iprops> = () => {
  const { songsDetail, relatedSongs } = useAppSelector(
    (state) => ({
      songsDetail: state.songsDetail.songsDetail,
      relatedSongs: state.songsDetail.relatedSongs
    }),
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

  return (
    <SongsDetailWrapper>
      <div className="content wrap-v2">
        <div className="left">
          <DetailHeader headerData={headerData} />
          <DetailContent
            itemdata={songsDetail?.tracks || []}
            playCount={songsDetail?.playCount || 0}
            trackCount={songsDetail?.trackCount || 0}
          />
        </div>
        <div className="right">
          <LovePeople peopleList={songsDetail?.subscribers || []} />
          <RelatedSongs relatedSongs={relatedSongs || []} />
        </div>
      </div>
    </SongsDetailWrapper>
  )
}

export default memo(SongsDetail)
