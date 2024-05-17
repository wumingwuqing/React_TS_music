import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { RecommendWrapper } from './style'

import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'

import SongMenuItem from '@/components/song-menu-item'
import { shallowEqual } from 'react-redux'
interface Iprops {
  children?: ReactNode
}

const HotRecommend: FC<Iprops> = () => {
  const { hotRecommends } = useAppSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    shallowEqual
  )
  return (
    <RecommendWrapper>
      <AreaHeaderV1
        title="热门推荐"
        keywords={['华语', '摇滚', '流行', '民谣']}
        moreLink="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends.map((item, index) => {
          return <SongMenuItem key={item.id} itemData={item}></SongMenuItem>
        })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(HotRecommend)
