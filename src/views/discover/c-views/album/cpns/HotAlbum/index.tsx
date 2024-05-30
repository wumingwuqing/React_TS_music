import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HotAlbumWrapper } from './style'
import { useAppSelector } from '@/store'
import AlbumItem from '../AlbumItem'

interface Iprops {
  children?: ReactNode
}

const HotAlbum: FC<Iprops> = () => {
  const hotAlbum = useAppSelector((state) => state.album.hotAlbum)
  return (
    <HotAlbumWrapper>
      <h1 className="header">热门新碟</h1>
      <ul className="hot-album-list">
        {hotAlbum
          .filter((item, index) => index < 10)
          .map((item) => {
            return (
              <li key={item.id} className="hot-album-list-item">
                <AlbumItem itemData={item} />
              </li>
            )
          })}
      </ul>
    </HotAlbumWrapper>
  )
}

export default memo(HotAlbum)
