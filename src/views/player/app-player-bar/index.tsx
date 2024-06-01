import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Slider, message } from 'antd'

import { getSongPlayUrl } from '@/utils/handle-player'

import { PlayerBarWrapper } from './style'
import { BarControl } from './style'
import { BarPlayerInfo } from './style'
import { BarOperator } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { formatTime, getImageSize } from '@/utils/format'
import { changeMusicAction, setLyricIndex, setPlayMode } from '../store/player'

interface Iprops {
  children?: ReactNode
}

const AppPlayBar: FC<Iprops> = () => {
  //组件内定义的的数据
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const audioRef = React.useRef<HTMLAudioElement>(null)
  //从redux中获取的数据
  const {
    currentSong,
    lyrics = [],
    lyricIndex,
    playMode
  } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode
    }),
    shallowEqual
  )

  //组件内的副作用操作
  useEffect(() => {
    audioRef.current!.src = getSongPlayUrl(currentSong.id)
    setIsPlaying(true)
    //1.播放音乐
    audioRef.current
      ?.play()
      .then(() => {
        console.log('singing')
      })
      .catch((error) => {
        if (
          'NotSupportedError: Failed to load because no supported source was found.' ===
          error.toString()
        ) {
          //展示歌词
          const config = {
            className: 'message',
            content: '歌曲无法播放!',
            duration: 2
          }
          message.open(config)
        }
      })
    //记录总时间
    setDuration(currentSong.dt)
  }, [currentSong])

  //音乐播放的进度
  const dispatch = useAppDispatch()
  const [messageApi, contextHolder] = message.useMessage()
  function handleTimeUpdate() {
    if (isPlaying) {
      //获取当前播放时间
      const currentTime = audioRef.current!.currentTime * 1000
      //计算当前歌曲进度@typescript-esl
      const progress = (currentTime / duration) * 100
      setProgress(progress)
      setCurrentTime(currentTime)

      //匹配歌词
      let index = lyrics.length - 1
      for (let i = 0; i < lyrics.length; i++) {
        if (currentTime < lyrics[i].time) {
          index = i - 1
          break
        }
      }
      //匹配到对应歌词的index
      dispatch(setLyricIndex(index))
      if (lyricIndex === index || index === -1) return
    }
  }
  function handkeSliderChange(value: number) {
    //获取当前点击位置的时间
    const currentTime = (value / 100) * duration
    //设置当前播放的时间
    audioRef.current!.currentTime = currentTime / 1000
    //3.currentTime/setPogress
    setProgress(value)
    setCurrentTime(currentTime)
  }
  //切换播放模式
  function handleChangePlayMode() {
    const newPlayMode = (playMode + 1) % 3
    dispatch(setPlayMode(newPlayMode))
  }
  //切换歌曲
  function handleChangeMusic(isNext: boolean) {
    dispatch(changeMusicAction(isNext))
  }
  //事件处理
  function handlePlayBtnClick() {
    // 1.控制播放器的播放/暂停
    isPlaying
      ? audioRef.current?.pause()
      : audioRef.current?.play().catch(() => setIsPlaying(false))

    // 2.改变isPlaying的状态
    setIsPlaying(!isPlaying)
  }
  function handleTimeEnded() {
    if (playMode == 2) {
      audioRef.current!.currentTime = 0
      audioRef.current?.play().catch(() => setIsPlaying(false))
    } else {
      handleChangeMusic(true)
    }
  }
  return (
    <PlayerBarWrapper className="bar sprite_playbar">
      <div className="content wrap-v2">
        {/* 左边的三个按钮 */}
        <BarControl isplaying={isPlaying ? 1 : 0}>
          <button
            className="btn sprite_playbar prev"
            onClick={(e) => handleChangeMusic(false)}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={(e) => handleChangeMusic(true)}
          ></button>
        </BarControl>
        {/* 中间的歌曲信息 */}
        <BarPlayerInfo>
          <Link to="/player">
            <img
              className="image"
              src={getImageSize(currentSong?.al?.picUrl, 50)}
              alt=""
            />
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
              <span className="lyrics">{lyrics?.[lyricIndex]?.text}</span>
            </div>
            <div className="progress">
              <Slider
                step={1}
                value={progress}
                tooltip={{ formatter: null }}
                onChange={handkeSliderChange}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(currentSong.dt)}</span>
              </div>
            </div>
          </div>
        </BarPlayerInfo>
        {/* 右边的剩余操作 */}
        <BarOperator playmode={playMode}>
          <div className="left">
            <button className="btn pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar loop"
              onClick={handleChangePlayMode}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </BarOperator>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        autoPlay={false}
        onEnded={() => handleTimeEnded()}
      />
    </PlayerBarWrapper>
  )
}

export default memo(AppPlayBar)
