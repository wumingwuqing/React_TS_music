//react
import React, { memo, useEffect } from 'react'
import type { FC, ReactNode } from 'react'
//store
import {
  fetchActistsDataAction,
  fetchBannerDataAction,
  fetchHotRecommendDataAction,
  fetchNewAlbumDataAction,
  fetchRankingDataAction
} from './store/recommend'
import { useAppDispatch } from '@/store'
//c-cpns
import TopBanner from './c-cpns/top-banner'

import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import TopRanking from './c-cpns/top-ranking'

import UserLogin from './c-cpns/user-login'
import SettleSinger from './c-cpns/settle-singer'
import HotAnchor from './c-cpns/hot-anchor'

import { RecommendWrapper } from './style'

interface Iprops {
  children?: ReactNode
}

const Recommend: FC<Iprops> = () => {
  //发起action请求数据
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
    dispatch(fetchHotRecommendDataAction())
    dispatch(fetchNewAlbumDataAction())
    dispatch(fetchRankingDataAction())
    dispatch(fetchActistsDataAction())
  }, [])
  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <HotRecommend />
          <NewAlbum />
          <TopRanking />
        </div>
        <div className="right">
          <UserLogin />
          <SettleSinger />
          <HotAnchor />
        </div>
      </div>
    </RecommendWrapper>
  )
}

export default memo(Recommend)
