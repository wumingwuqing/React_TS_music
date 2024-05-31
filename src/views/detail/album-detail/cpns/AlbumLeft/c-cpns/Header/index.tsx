import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderWrapper } from './style'
import Operator from '@/components/Operator'
import { formatDate, getImageSize } from '@/utils/format'
import { useNavigate } from 'react-router-dom'

interface Iprops {
  children?: ReactNode
  data: any
}

const Header: FC<Iprops> = ({ data }) => {
  const navigate = useNavigate()
  function artistNameClick(id: number) {
    navigate(`/discover/artistdetail/${id}`)
  }
  return (
    <HeaderWrapper>
      <div className="up">
        <div className="image">
          <img src={getImageSize(data.picUrl, 177)} alt="" />
          <span className="cover sprite_cover">
            <i className="icon sprite_icon"></i>
          </span>
        </div>
        <div className="info">
          <div className="title">
            <i className="icon sprite_icon2"></i>
            <span className="name"> {data.name}</span>
          </div>
          <div className="artist">
            <p onClick={() => artistNameClick(data.artist.id)}>
              歌手：<span className="name">{data.artist.name}</span>
            </p>
            <p>
              发行时间：
              <span className="time">{formatDate(data.publishTime)}</span>
            </p>
            <p>
              发行公司：<span className="company">{data.company}</span>
            </p>
          </div>
          <div className="operator">
            <Operator />
          </div>
        </div>
      </div>
      <div className="down">
        <h3 className="title">专辑介绍：</h3>
        <p className="content">{data.description}</p>
      </div>
    </HeaderWrapper>
  )
}

export default memo(Header)
