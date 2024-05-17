import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingCardWrapper } from './style'
import RankingCardItem from '@/components/RankingCardItem'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'

interface Iprops {
  children?: ReactNode
  onRankingChange: (id: number) => void
}

const RankingCard: FC<Iprops> = (props) => {
  const { topList = [] } = useAppSelector(
    (state) => ({
      topList: state.topList.topList
    }),
    shallowEqual
  )
  //点击切换
  const handleClick = (id: number) => {
    props.onRankingChange(id)
  }
  return (
    <RankingCardWrapper>
      <h2 className="ranking-card-title">云音乐特色榜</h2>
      {topList.map((item, index) => {
        if (index <= 3) {
          return (
            <RankingCardItem
              itemData={item}
              key={item.id}
              itemClick={handleClick}
            />
          )
        }
        return null
      })}
      <h2 className="ranking-card-title">全球媒体榜</h2>
      {topList.map((item, index) => {
        if (!(index <= 3)) {
          return (
            <RankingCardItem
              itemData={item}
              key={item.id}
              itemClick={handleClick}
            />
          )
        }
        return null
      })}
    </RankingCardWrapper>
  )
}

export default memo(RankingCard)
