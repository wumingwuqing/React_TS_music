import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'

import InfoItem from './info-item'

import { InfoWrapper } from './style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
interface Iprops {
  children?: ReactNode
  infoData?: any
}

const SongInfo: FC<Iprops> = (props) => {
  const { infoData } = props
  const [isFull, setIsFull] = useState<boolean>(false)
  const { lyrics = [] } = useAppSelector(
    (state) => ({
      lyrics: state.player.lyrics
    }),
    shallowEqual
  )
  let lyricsList = null
  if (isFull) {
    lyricsList = lyrics.map((item) => {
      return (
        <p className="lyric" key={item.time}>
          {item.text}
        </p>
      )
    })
  } else {
    lyricsList = lyrics.slice(0, 10).map((item, index) => {
      return (
        <p className="lyric" key={item.time}>
          {item.text}
        </p>
      )
    })
  }
  return (
    <InfoWrapper>
      <div className="top">
        <div className="top-left">
          <div className="top-img">
            <img src={infoData?.al?.picUrl} alt="" />
            <div className="top-img-mask sprite_cover"></div>
          </div>
          <div className="top-text">
            <i className="sprite_icon2"></i>
            <a href="#/discover/player">生成外链播放器</a>
          </div>
        </div>
        <div className="top-right">
          <div className="top-right-top">
            <InfoItem infoData={infoData} />
          </div>
          <div className="top-right-bottom">
            {lyricsList}
            {isFull ? (
              <span
                className="top-right-bottom-button"
                onClick={() => setIsFull(false)}
              >
                收起
              </span>
            ) : (
              <span
                className="top-right-bottom-button"
                onClick={() => setIsFull(true)}
              >
                展开
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottom-top">
          <a href="#/discover/player">翻译歌词 </a>
          <a href="#/discover/player"> 报错</a>
        </div>
        <div className="bottom-bottom">
          <span>
            暂时没有翻译，<a href="#/discover/player">求翻译</a>
          </span>
        </div>
      </div>
    </InfoWrapper>
  )
}

export default memo(SongInfo)
