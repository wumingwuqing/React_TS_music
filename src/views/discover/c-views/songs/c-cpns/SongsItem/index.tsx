import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ItemWrapper } from './style'
import { formatCount, getImageSize } from '@/utils/format'
import { Link, useNavigate } from 'react-router-dom'
import { fetchSongsDetailAction } from '@/views/songs-detail/store/songs-detail'
import { useAppDispatch } from '@/store'

interface Iprops {
  children?: ReactNode
  itemData?: any
}

const SongsHeader: FC<Iprops> = (props) => {
  const { itemData } = props
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  function handleClick(id: number) {
    dispatch(fetchSongsDetailAction(id))
    navigate(`/discover/songsdetail`)
  }
  return (
    <ItemWrapper onClick={() => handleClick(itemData.id)}>
      <div className="top">
        <img src={getImageSize(itemData.coverImgUrl, 140)} alt="" />
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
      <div className="bottom">
        <div className="title">{itemData.name}</div>
        <div className="creator">
          <span>by</span>
          <span>{itemData.creator.nickname}</span>
        </div>
      </div>
    </ItemWrapper>
  )
}

export default memo(SongsHeader)
