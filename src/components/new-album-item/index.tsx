import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { AlbumItemWrapper } from './style'
import { getImageSize } from '@/utils/format'
import { useNavigate } from 'react-router-dom'

interface Iprops {
  children?: ReactNode
  itemData?: any
}

const NewAlbumItem: FC<Iprops> = (props) => {
  const { itemData } = props
  const navigate = useNavigate()
  // 图片和名字点击后进入专辑详情页面
  function handleClick(id: number) {
    navigate(`/discover/albumdetail/${id}`)
  }
  //
  //artist点击后跳转歌手页面
  function handerArtistClick(id: number) {
    navigate(`/discover/artistdetail/${id}`)
  }
  return (
    <AlbumItemWrapper>
      <div className="top" onClick={() => handleClick(itemData.id)}>
        <img src={getImageSize(itemData.picUrl, 100)} alt="" />
        <span className="cover sprite_cover"></span>
      </div>
      <div className="bottom">
        <div className="name" onClick={() => handleClick(itemData.id)}>
          {itemData.name}
        </div>
        <div
          className="artist"
          onClick={() => handerArtistClick(itemData.artist.id)}
        >
          {itemData.artist.name}
        </div>
      </div>
    </AlbumItemWrapper>
  )
}

export default memo(NewAlbumItem)
