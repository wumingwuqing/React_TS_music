import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { LeftWrapper } from './style'
import { useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'
import classNames from 'classnames'
import SongList from './SongList'
import AlbumList from './AlbumList'
import MVList from './MVList'
import ArtistIntro from './ArtistIntro'

interface Iprops {
  children?: ReactNode
  id: number
}

const DetailLeft: FC<Iprops> = ({ id }) => {
  const { artistDesc, artistAblum, artistMV, simiarArtist } = useAppSelector(
    (state) => ({
      artistDesc: state.artistDetail.artistDesc,
      artistAblum: state.artistDetail.artistAblum,
      artistMV: state.artistDetail.artistMV,
      simiarArtist: state.artistDetail.simiarArtist
    })
  )
  //tage数据
  const tags = ['热门作品', '所有专辑', '相关MV', '艺人介绍']
  const [currentTag, setCurrentTag] = useState<string>('热门作品')
  function changeTags(tag: string) {
    setCurrentTag(tag)
  }
  //根据tage渲染组件
  function renderComponent(currentTag: string) {
    switch (currentTag) {
      case '热门作品':
        return <SongList />
      case '所有专辑':
        return <AlbumList totalCount={artistDesc.albumSize} id={id} />
      case '相关MV':
        return <MVList totalCount={artistDesc.mvSize} id={id} />
      case '艺人介绍':
        return (
          <ArtistIntro
            name={artistDesc.name}
            briefDesc={artistDesc.briefDesc}
          />
        )
    }
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
      {renderComponent(currentTag)}
    </LeftWrapper>
  )
}

export default memo(DetailLeft)
