import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumDetailWrapper } from './style'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '@/store'
import { fetchAblumDetailDataAction } from './store/album-detail'
import AlbumLeft from './cpns/AlbumLeft'
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

  return (
    <AlbumDetailWrapper>
      <div className="content  wrap-v2">
        <div className="left">
          <AlbumLeft />
        </div>
        <div className="right"></div>
      </div>
    </AlbumDetailWrapper>
  )
}

export default memo(AlbumDetail)
