import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '@/store'

import { MenuItemWrapper } from './style'

import { formatCount, getImageSize } from '@/utils/format'

import {
  fetchSongsDetailAction,
  fetchRelatedSongsAction
} from '@/views/detail/songs-detail/store/songs-detail'

interface Iprops {
  children?: ReactNode
  itemData?: any
}

const SongMenuItem: FC<Iprops> = (props) => {
  const { itemData } = props
  //点击进入歌单详情
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  function handleClick(id: number) {
    dispatch(fetchSongsDetailAction(id))
    dispatch(fetchRelatedSongsAction(id))
    navigate(`/discover/songsdetail`)
  }
  return (
    <MenuItemWrapper onClick={() => handleClick(itemData.id)}>
      <div className="top">
        <img src={getImageSize(itemData.picUrl, 140)} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
            </span>
            <i className="play sprite_icon"></i>
          </div>
        </div>
      </div>
      <div className="bottom">{itemData.name}</div>
    </MenuItemWrapper>
  )
}

export default memo(SongMenuItem)
