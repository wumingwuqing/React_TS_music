import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ListWrapper } from './style'
import { useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'
import { useNavigate } from 'react-router-dom'

interface Iprops {
  children?: ReactNode

  currentCat: string
}

const ArtistList: FC<Iprops> = ({ currentCat }) => {
  const artistList = useAppSelector((state) => state.artist.artistList)
  // 点击去往歌手详情页
  const navigate = useNavigate()
  function handleClick(id: number) {
    navigate(`/discover/artistdetail/${id}`)
  }

  return (
    <ListWrapper>
      <div className="list-content">
        <div className="header">
          <h2>{currentCat}</h2>
        </div>
        <ul className="conent-area">
          {artistList.map((item) => (
            <li
              key={item.id}
              onClick={() => {
                handleClick(item.id)
              }}
            >
              <div className="avatar">
                <img src={getImageSize(item.picUrl, 130)} alt="" />
                <div className="msk sprite_cover"></div>
              </div>
              <div className="name">
                <p>{item.name}</p>
                <i></i>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </ListWrapper>
  )
}

export default memo(ArtistList)
