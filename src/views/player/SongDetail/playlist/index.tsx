import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { InfoWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'

import TitleInfo from '../lefti-item-title'

interface Iprops {
  children?: ReactNode
}

const OtherInfo: FC<Iprops> = () => {
  //redux中的数据
  const { playList } = useAppSelector(
    (state) => ({
      playList: state.player.playList
    }),
    shallowEqualApp
  )
  return (
    <InfoWrapper>
      <TitleInfo title="包含这首歌的歌单" />
      {playList?.map((item) => {
        return (
          <div className="playlist-info" key={item.id}>
            <div className="pic">
              <Link to="discover/playlist">
                <img src={getImageSize(item.coverImgUrl, 50)} alt="" />
              </Link>
            </div>
            <div className="info">
              <div className="name">
                <Link to="discover/playlist">{item.name}</Link>
              </div>
              <div className="creator">
                by <Link to="discover/playlist">{item?.creator?.nickname}</Link>
              </div>
            </div>
          </div>
        )
      })}
    </InfoWrapper>
  )
}

export default memo(OtherInfo)
