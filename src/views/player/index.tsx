import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'

import { PlayerWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'

import SongInfo from './c-cpns/song-info'
import PlayList from './c-cpns/playlist'
import SimilarSong from './c-cpns/similar-song'

import { fetchPlayListAction } from '../play-list/store/service'
import { getSimiSongAction } from './store/player'

interface Iprops {
  children?: ReactNode
}

const Player: FC<Iprops> = () => {
  //redux中的数据
  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong
    }),
    shallowEqual
  )
  //副作用代码
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchPlayListAction(currentSong?.id))
    dispatch(getSimiSongAction(currentSong?.id))
  }, [currentSong])
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <div className="left">
          <SongInfo infoData={currentSong} />
        </div>
        <div className="right">
          <PlayList />
          <SimilarSong />
        </div>
      </div>
    </PlayerWrapper>
  )
}

export default memo(Player)
