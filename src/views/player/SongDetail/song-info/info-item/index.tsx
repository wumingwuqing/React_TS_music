import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/views/player/store/player'

interface Iprops {
  children?: ReactNode
  infoData: any
}

const InfoItem: FC<Iprops> = (props) => {
  const { infoData } = props
  const dispatch = useAppDispatch()
  function handlePlayClick(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }
  return (
    <ItemWrapper>
      <div className="song">
        <i className="sprite_icon2"></i>
        <div className="title">
          <div className="name">{infoData.name}</div>
        </div>
      </div>
      <div className="singer">
        歌手：<a href="#/discover/player">{infoData.ar?.[0]?.name}</a>
      </div>
      <div className="album">
        所属专辑：<a href="#/discover/player">{infoData.al?.name}</a>
      </div>
      <div className="operator">
        <div
          className="sprite_button btn play"
          onClick={(e) => handlePlayClick(infoData.id)}
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
    </ItemWrapper>
  )
}

export default memo(InfoItem)
