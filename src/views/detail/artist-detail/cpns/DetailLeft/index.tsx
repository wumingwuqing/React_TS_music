import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { LeftWrapper } from './style'
import { useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'
import classNames from 'classnames'

interface Iprops {
  children?: ReactNode
}

const DetailLeft: FC<Iprops> = () => {
  const { artistsSong, artistDesc, artistAblum, artistMV, simiarArtist } =
    useAppSelector((state) => ({
      artistsSong: state.artistDetail.artistsSong,
      artistDesc: state.artistDetail.artistDesc,
      artistAblum: state.artistDetail.artistAblum,
      artistMV: state.artistDetail.artistMV,
      simiarArtist: state.artistDetail.simiarArtist
    }))
  const tags = ['热门作品', '所有专辑', '相关MV', '艺人介绍']
  const [currentTag, setCurrentTag] = useState<string>('热门作品')
  function changeTags(tag: string) {
    setCurrentTag(tag)
  }
  return (
    <LeftWrapper>
      <div className="header">
        <h1>
          <span className="chinese-name">{artistDesc.name}</span>
          <span className="english-name">{artistDesc.alias[0]}</span>
        </h1>
        <div className="img">
          <img src={getImageSize(artistDesc.picUrl, 640, 300)} alt="" />
        </div>
      </div>
      <ul className="tags tab">
        {tags.map((item, index) => {
          return (
            <li
              key={item}
              onClick={() => {
                changeTags(item)
              }}
            >
              <a
                className={classNames('tab', { seleted: item === currentTag })}
              >
                <span className={classNames('tab')}>{item}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </LeftWrapper>
  )
}

export default memo(DetailLeft)
