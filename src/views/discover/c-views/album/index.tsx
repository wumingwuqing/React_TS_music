import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { AlbumWrapper } from './style'
import { useAppDispatch } from '@/store'
import { fetchAllAblumDataAction, fetchHotAblumDataAction } from './store/album'
import HotAlbum from './cpns/HotAlbum'
import AllAlbum from './cpns/AllAlbum'
import { message } from 'antd'

interface Iprops {
  children?: ReactNode
}

const Album: FC<Iprops> = () => {
  const [currentArea, setCurrentArea] = useState<
    'ALL' | 'ZH' | 'EA' | 'KR' | 'JP'
  >('ALL')

  const dispacth = useAppDispatch()
  useEffect(() => {
    dispacth(fetchHotAblumDataAction())
  }, [])
  useEffect(() => {
    dispacth(
      fetchAllAblumDataAction({ offest: 0, area: currentArea, limit: 35 })
    )
  }, [currentArea])

  function callBack(area: 'ALL' | 'ZH' | 'EA' | 'KR' | 'JP') {
    message.info(`数据正在加载...`, 1)
    setCurrentArea(area)
  }
  return (
    <AlbumWrapper>
      <div className="content wrap-v2">
        <HotAlbum />
        <AllAlbum callBack={callBack} />
      </div>
    </AlbumWrapper>
  )
}

export default memo(Album)
