import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumItemWrapper } from './style'
import { formatDate, getImageSize } from '@/utils/format'
import { useNavigate } from 'react-router-dom'

interface Iprops {
  children?: ReactNode
  itemData: any
}

const AlbumItem: FC<Iprops> = ({ itemData }) => {
  // 图片和名字点击后进入专辑详情页面
  function handleClick(id: number) {
    navigate(`/discover/albumdetail/${id}`)
  }

  //artist点击后跳转歌手页面
  const navigate = useNavigate()
  function handerArtistClick(id: number) {
    navigate(`/discover/artistdetail/${id}`)
  }
  return (
    <AlbumItemWrapper>
      <div className="image">
        <div className="img" onClick={() => handleClick(itemData.id)}>
          <img src={getImageSize(itemData.picUrl, 130)} alt="" />
          <span className="cover sprite_cover">
            <i className="icon sprite_icon"></i>
          </span>
        </div>
        <div className="info">
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
      </div>
    </AlbumItemWrapper>
  )
}

export default memo(AlbumItem)
