import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { ArtistDetailWrapper } from './style'
import { useParams } from 'react-router-dom'
import {
  fetchArtistsAblumDataAction,
  fetchArtistsDataAction,
  fetchArtistsMVDataAction
  // fetchSimiarArtistDataAction
} from './store/artist-detail'
import { useAppDispatch } from '@/store'
import DetailLeft from './cpns/DetailLeft'

interface Iprops {
  children?: ReactNode
}

const ArtistDetail: FC<Iprops> = () => {
  //获取歌手id
  const { id } = useParams()
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchArtistsDataAction(Number(id)))
    dispatch(
      fetchArtistsAblumDataAction({ id: Number(id), offset: 0, limit: 12 })
    )
    dispatch(fetchArtistsMVDataAction({ id: Number(id), offset: 0, limit: 12 }))
    // dispatch(fetchSimiarArtistDataAction({ id: Number(id), limit: 6 }))
  }, [id])
  return (
    <ArtistDetailWrapper>
      <div className="content  wrap-v2">
        <div className="left">
          <DetailLeft />
        </div>
        <div className="right"></div>
      </div>
    </ArtistDetailWrapper>
  )
}

export default memo(ArtistDetail)
