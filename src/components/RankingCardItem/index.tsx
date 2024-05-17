import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingCardWrapper } from './style'
import { getImageSize } from '@/utils/format'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import classNames from 'classnames'

interface Iprops {
  children?: ReactNode
  itemData?: any
  itemClick: (id: number) => void
}

const RankingCardItem: FC<Iprops> = ({ itemData, itemClick }) => {
  //处理点击
  function handleClick(id: number) {
    itemClick(id)
  }
  //获取当前活跃的榜单
  const activeid = useAppSelector(
    (state) => state.topList.listDetial.id,
    shallowEqual
  )
  console.log(activeid)
  return (
    <RankingCardWrapper>
      <div
        className={classNames('ranking-card-item', {
          active: activeid === itemData.id
        })}
        onClick={() => handleClick(itemData.id)}
      >
        <div className="ranking-card-item-left">
          <img src={getImageSize(itemData.coverImgUrl, 40)} alt="" />
        </div>
        <div className="ranking-card-item-right">
          <div className="ranking-card-item-right-up">{itemData.name}</div>
          <div className="ranking-card-item-right-down">
            {itemData.updateFrequency}
          </div>
        </div>
      </div>
    </RankingCardWrapper>
  )
}

export default memo(RankingCardItem)
