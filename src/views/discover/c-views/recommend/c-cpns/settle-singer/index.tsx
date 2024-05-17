import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { SingerWrapper } from './style'

import AreaHeaderV2 from '@/components/area-header-v2'
import { useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'
import { shallowEqual } from 'react-redux'
interface Iprops {
  children?: ReactNode
}

const SettleSinger: FC<Iprops> = () => {
  const { settleSingers } = useAppSelector(
    (state) => ({
      settleSingers: state.recommend.settleSingers
    }),
    shallowEqual
  )
  return (
    <SingerWrapper>
      <AreaHeaderV2
        title="入驻歌手"
        moreText="查看更多&gt;"
        moreLink="#/discover/artist"
      />
      <div className="artists">
        {settleSingers.slice(0, 5).map((item) => {
          return (
            <a href="#/discover/artist" key={item.id} className="item">
              <img src={getImageSize(item.picUrl, 62)} alt="" />
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="alia">{item.alias.join(' ')}</div>
              </div>
            </a>
          )
        })}
      </div>
      <div className="apply-for">
        <a href="#/">申请成为网易音乐人</a>
      </div>
    </SingerWrapper>
  )
}

export default memo(SettleSinger)
