import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { shallowEqual } from 'react-redux'

import { PlayerWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'

import SongInfo from './SongDetail/song-info'
import PlayList from './SongDetail/playlist'
import SimilarSong from './SongDetail/similar-song'

import { fetchPlayListAction, getSimiSongAction } from './store/player'

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
