import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper } from './style'
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import Tags from './c-cpns'

interface Iprops {
  children?: ReactNode
  headerClick: (name: string) => void
}

const SongsHeader: FC<Iprops> = ({ headerClick }) => {
  const { tilte = '默认', catlist = {} } = useAppSelector(
    (state) => ({
      tilte: state.songs.playlist.cat,
      catlist: state.songs.catlist
    }),
    shallowEqual
  )
  //tag的显示
  const [isActive, setIsActive] = useState(false)
  function handleOnClick() {
    setIsActive(!isActive)
  }

  function tageClick(name: string) {
    headerClick(name)
    setIsActive(false)
  }
  return (
    <HeaderWrapper>
      <div className="content">
        <div className="left">
          <h1>{tilte}</h1>
          <button className="sprite_button" onClick={() => handleOnClick()}>
            <i className="sprite_button">
              选择分类
              <i className="arrow-down sprite_icon2"></i>
            </i>
          </button>
        </div>
        <div className="right">
          <div className="sprite_button2">
            <a href="">热门</a>
          </div>
        </div>
      </div>
      <div style={{ display: isActive ? 'block' : 'none' }}>
        <Tags tageClick={tageClick} />
      </div>
    </HeaderWrapper>
  )
}

export default memo(SongsHeader)
