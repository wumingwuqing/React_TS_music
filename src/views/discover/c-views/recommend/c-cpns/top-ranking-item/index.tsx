import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { RankingItemWrapper } from './style'
import { getImageSize } from '@/utils/format'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/views/player/store/player'
import { useNavigate } from 'react-router-dom'

interface Iprops {
  children?: ReactNode
  itemData?: any
}

const TopRankingItem: FC<Iprops> = (props) => {
  const { itemData } = props
  const { tracks = [] } = itemData

  const dispatch = useAppDispatch()
  function handlePlayClick(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }
  const navigate = useNavigate()
  function handNameClick(id: number) {
    dispatch(fetchCurrentSongAction(id))
    navigate(`/discover/player`)
  }
  return (
    <RankingItemWrapper>
      <div className="header">
        <div className="image">
          <img src={getImageSize(itemData.coverImgUrl, 80)} alt="" />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={item.id}>
              <div className="index">{index + 1}</div>
              <div className="info">
                <div className="name" onClick={(e) => handNameClick(item.id)}>
                  {item.name}
                </div>
                <div className="operator">
                  <button
                    className="btn sprite_02 play"
                    onClick={(e) => handlePlayClick(item.id)}
                  ></button>
                  <button className="btn sprite_icon2 add"></button>
                  <button className="btn sprite_02 favor"></button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <a href="#/discover/ranking">查看全部 &gt;</a>
      </div>
    </RankingItemWrapper>
  )
}

export default memo(TopRankingItem)
