import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ListDetailWrapper } from './style'
import DetailHeader from './c-c-cpns/DetailHeader'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import PlayList from './c-c-cpns/PlayList'

interface Iprops {
  children?: ReactNode
}

const ListDetail: FC<Iprops> = () => {
  const { listDetial = {} } = useAppSelector<any>(
    (state) => ({
      listDetial: state.topList.listDetial
    }),
    shallowEqual
  )
  return (
    <ListDetailWrapper>
      <div className="deteil-content">
        <DetailHeader
          name={listDetial.name}
          commentCount={listDetial.commentCount}
          shareCount={listDetial.shareCount}
          coverImgUrl={listDetial.coverImgUrl}
          subscribedCount={listDetial.subscribedCount}
        />
      </div>
      <PlayList
        itemdata={listDetial.tracks || []}
        trackCount={listDetial.trackCount}
        playCount={listDetial.playCount}
      />
    </ListDetailWrapper>
  )
}

export default memo(ListDetail)
