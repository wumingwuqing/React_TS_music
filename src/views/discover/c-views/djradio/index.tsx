import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { DjradioWrapper } from './style'

import DjradioHeader from './c-cpns/Header'
import {
  fetchCatlistDataAction,
  fetchDjRecommendByTypeDataAction,
  fetchDjRankingDataAction,
  fetchDjRecommendDataAction,
  fetchDjRadioListDataAction
} from './store/djradio'
import { useAppDispatch } from '@/store'
import RecommendPrograms from './c-cpns/RecommendPrograms'
import ProgramsRanking from './c-cpns/ProgramsRanking'
import DjList from './c-cpns/DjList'
import {
  fetchRadioDetailDataAction,
  fetchRadioProgramDataAction
} from '@/views/detail/djradio-detail/store/djradio-detail'
import { useNavigate } from 'react-router-dom'
interface Iprops {
  children?: ReactNode
}

const Djradio: FC<Iprops> = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCatlistDataAction())
    dispatch(fetchDjRecommendDataAction())
    dispatch(fetchDjRankingDataAction())
  }, [])

  const [currentCategoryId, setCurrentCategoryId] = useState<number>(-100)
  // 点击头部分类回调，切换分类重新求情数据
  function headerCallback(categoryId: number) {
    setCurrentCategoryId(categoryId)
    dispatch(fetchDjRecommendByTypeDataAction(categoryId))
    dispatch(
      fetchDjRadioListDataAction({ cateId: categoryId, offset: 0, limit: 26 })
    )
  }
  // 点击item的回调，获取电台详情以及电台节目列表数据并进入电台详情页面
  const navigate = useNavigate()
  function itemCallback(rid: number, isProgram = false) {
    console.log(isProgram)
    if (!isProgram) {
      dispatch(fetchRadioDetailDataAction(rid))
      dispatch(fetchRadioProgramDataAction({ rid }))
      navigate('/discover/djradiodetail')
    }
  }
  // 根据当前分类id判断是否显示推荐节目和节目排行榜
  function reanderSwitch(currentCategory: number) {
    if (currentCategoryId < 0) {
      return (
        <div className="list-v1">
          <div className="left">
            <RecommendPrograms itemCallback={itemCallback} />
          </div>
          <div className="right">
            <ProgramsRanking itemCallback={itemCallback} />
          </div>
        </div>
      )
    } else {
      return (
        <DjList categoryId={currentCategoryId} itemCallback={itemCallback}>
          {currentCategory}
        </DjList>
      )
    }
  }

  return (
    <DjradioWrapper>
      <div className="content wrap-v2">
        <DjradioHeader headerCallback={headerCallback} />
        {reanderSwitch(currentCategoryId)}
      </div>
    </DjradioWrapper>
  )
}

export default memo(Djradio)
