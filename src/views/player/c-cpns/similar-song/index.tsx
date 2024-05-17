import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { SongWrapper } from './style'

import TitleInfo from '../lefti-item-title'
import { useAppDispatch, useAppSelector } from '@/store'
import { Link } from 'react-router-dom'
import { changeMusicAction, fetchCurrentSongAction } from '../../store/player'

interface Iprops {
  children?: ReactNode
  infoData?: number
}

const SimilarSong: FC<Iprops> = () => {
  //从iredix中获取数据
  const { simiSong } = useAppSelector((state) => ({
    simiSong: state.player.simiSong
  }))

  const dispatch = useAppDispatch()
  function handleClick(id: number) {
    console.log(id)
    dispatch(fetchCurrentSongAction(id))
  }
  return (
    <SongWrapper>
      <TitleInfo title="相似歌曲" />
      {simiSong?.map((item) => {
        return (
          <div key={item.id} className="song-info">
            <div className="txt">
              <Link
                to="#/discover/player"
                onClick={(e) => handleClick(item.id)}
                className="name"
              >
                {item.name}
              </Link>
              <div className="artists">{item?.artists?.[0]?.name}</div>
            </div>
            <div className="opt">
              <Link
                to="#/discover/player"
                onClick={(e) => handleClick(item.id)}
                className="play sprite_icon3"
              ></Link>
              <Link
                to="#/discover/player"
                onClick={(e) => handleClick(item.id)}
                className="add sprite_icon3"
              ></Link>
            </div>
          </div>
        )
      })}
    </SongWrapper>
  )
}

export default memo(SimilarSong)
