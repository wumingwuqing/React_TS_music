import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumDetailWrapper } from './style'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchAblumDetailDataAction } from './store/album-detail'

interface Iprops {
  children?: ReactNode
}

const AlbumDetail: FC<Iprops> = () => {
  //获取歌手id
  const { id } = useParams()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchAblumDetailDataAction(Number(id)))
  }, [id])
  const albumDetail = useAppSelector((state) => state.albumDetail.albumDetail)
  console.log(albumDetail)
  return (
    <AlbumDetailWrapper>
      <h1>AlbumDetail</h1>
    </AlbumDetailWrapper>
  )
}

export default memo(AlbumDetail)
