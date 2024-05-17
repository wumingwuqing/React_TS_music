import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchTopListDataAction, fetchTopListDetail } from './store/ranking'
import RankingCard from './c-cpns/RankingCard'
import ListDetail from './c-cpns/ListDetail'
import { shallowEqual } from 'react-redux'
import { message } from 'antd'

interface Iprops {
  children?: ReactNode
}

const Ranking: FC<Iprops> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchTopListDataAction())
  }, [])
  //设置默认是第一个
  const { topList = [] } = useAppSelector(
    (state) => ({
      topList: state.topList.topList
    }),
    shallowEqual
  )
  useEffect(() => {
    if (topList.length > 0) {
      dispatch(fetchTopListDetail(topList[0]?.id))
    }
  }, [topList])

  //子组件（选了不同的榜单）
  function handleRankingChange(id: number) {
    dispatch(fetchTopListDetail(id))
    message.loading('切换榜单中', 1)
  }
  return (
    <RankingWrapper>
      <div className="ranking-content wrap-v2 ">
        <div className="ranking-left">
          <RankingCard onRankingChange={handleRankingChange} />
        </div>
        <div className="ranking-right">
          <ListDetail />
        </div>
      </div>
    </RankingWrapper>
  )
}

export default memo(Ranking)
