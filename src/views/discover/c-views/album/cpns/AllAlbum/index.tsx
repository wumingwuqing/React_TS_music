import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { AllAlbumWrapper } from './style'
import AlbumItem from '../AlbumItem'
import { useAppSelector } from '@/store'

interface Iprops {
  children?: ReactNode
  callBack: (area: 'ALL' | 'ZH' | 'EA' | 'KR' | 'JP') => void
}

const AllAlbum: FC<Iprops> = ({ callBack }) => {
  //头部标签
  const areaList: Array<{
    name: string
    area: 'ALL' | 'ZH' | 'EA' | 'KR' | 'JP'
  }> = [
    {
      name: '全部',
      area: 'ALL'
    },
    {
      name: '华语',
      area: 'ZH'
    },
    {
      name: '欧美',
      area: 'EA'
    },
    {
      name: '韩国',
      area: 'KR'
    },
    {
      name: '日本',
      area: 'JP'
    }
  ]

  const allAlbum = useAppSelector((state) => state.album.allAlbum)
  return (
    <AllAlbumWrapper>
      <h1 className="header">
        全部新碟
        <span className="area-list">
          {areaList.map((item, index) => {
            return (
              <span key={item.area}>
                <span className="name" onClick={() => callBack(item.area)}>
                  {item.name}
                </span>
                {index < areaList.length - 1 && (
                  <span className="split">|</span>
                )}
              </span>
            )
          })}
        </span>
      </h1>
      <ul className="hot-album-list">
        {allAlbum
          .filter((item, index) => index < 10)
          .map((item) => {
            return (
              <li key={item.id} className="hot-album-list-item">
                <AlbumItem itemData={item} />
              </li>
            )
          })}
      </ul>
    </AllAlbumWrapper>
  )
}

export default memo(AllAlbum)
