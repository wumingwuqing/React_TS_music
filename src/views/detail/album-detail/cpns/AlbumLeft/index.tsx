import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LeftContentWrapper } from './style'
import { useAppSelector } from '@/store'
import Header from './c-cpns/Header'
import SongList from './c-cpns/SongList'

interface Iprops {
  children?: ReactNode
}

const AlbumLeft: FC<Iprops> = () => {
  const albumDetail = useAppSelector((state) => state.albumDetail.albumDetail)

  return (
    <LeftContentWrapper>
      <Header data={albumDetail.album} />
      <SongList data={albumDetail.songs} />
    </LeftContentWrapper>
  )
}

export default memo(AlbumLeft)
