import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { ArtistWrapper } from './style'
import ArtistList from './cpns/ArtistList'
import ClassifyList from './cpns/ClassifyList'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchArtistListDataAction } from './store/artist'

interface Iprops {
  children?: ReactNode
}

const Artist: FC<Iprops> = () => {
  //获取当前选中的分类
  const [currentSelected, setCurrentSelected] = useState({
    cat: 5000,
    name: '推荐歌手',
    area: -1,
    type: 1
  })
  function getCurrentCat(
    cat: number,
    name: string,
    area: number,
    type: number
  ) {
    setCurrentSelected({ cat, name, area, type })
  }
  //服务器拿数据
  const fetchArtistListDataActionparam = {
    cat: currentSelected.cat,
    area: currentSelected.area,
    type: currentSelected.type,
    offset: 0,
    limit: 100,
    initial: ''
  }
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchArtistListDataAction(fetchArtistListDataActionparam))
  }, [currentSelected])

  return (
    <ArtistWrapper>
      <div className="content wrap-v2">
        <div className="content-left">
          <ClassifyList callback={getCurrentCat} />
        </div>
        <div className="content-right">
          <ArtistList currentCat={currentSelected.name} />
        </div>
      </div>
    </ArtistWrapper>
  )
}

export default memo(Artist)
