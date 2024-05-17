import React, { memo, useRef } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'

import { Carousel } from 'antd'

import { AlbumWrapper } from './style'

import AreaHeaderV1 from '@/components/area-header-v1'
import { useAppSelector } from '@/store'

import NewAlbumItem from '@/components/new-album-item'
import { shallowEqual } from 'react-redux'

interface Iprops {
  children?: ReactNode
}

const NewAlbum: FC<Iprops> = () => {
  //内部数据
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  //redux中获取数据
  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    shallowEqual
  )
  //事件处理
  function handleClick(isRight: boolean) {
    isRight ? carouselRef.current?.next() : carouselRef.current?.prev()
  }
  return (
    <AlbumWrapper>
      <AreaHeaderV1 title="新碟上架" moreLink="/discover/album" />
      <div className="content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={() => handleClick(false)}
        ></button>
        <div className="banner ">
          <Carousel dots={false} speed={500} ref={carouselRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <NewAlbumItem itemData={album} key={album.id} />
                    })}
                  </div>
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={() => handleClick(true)}
        ></button>
      </div>
    </AlbumWrapper>
  )
}

export default memo(NewAlbum)
