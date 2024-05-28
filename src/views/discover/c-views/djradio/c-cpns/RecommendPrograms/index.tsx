import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ProgramsWrapper } from './style'

import AreaHeaderV3 from '@/components/area-header-v3'
import { useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'

interface Iprops {
  children?: ReactNode
  itemCallback: (rid: number, isProgram?: boolean) => void
}

const RecommendPrograms: FC<Iprops> = ({ itemCallback }) => {
  const djRecommend = useAppSelector((state) => state.djradio.djRecommend)
  return (
    <ProgramsWrapper>
      <AreaHeaderV3
        title="推荐节目"
        moreText="更多&nbsp;&gt;"
        moreLink="discover/djradio#/discover/djradio"
      />
      <ul className="recommend-content">
        {djRecommend.map((item) => {
          return (
            <li key={item.id} onClick={() => itemCallback(item.id, true)}>
              <div className="recommend-item-left">
                <img src={getImageSize(item.coverUrl, 40)} alt="" />
                <div className="sprite_icon cover"></div>
              </div>
              <div className="recommend-item-center">
                <div className="center-up">
                  <span>{item.name}</span>
                </div>
                <div className="center-down">
                  <span>{item.dj.brand}</span>
                </div>
              </div>
              <div className="recommend-item-right">
                <button>{item.radio.category}</button>
              </div>
            </li>
          )
        })}
      </ul>
    </ProgramsWrapper>
  )
}

export default memo(RecommendPrograms)
