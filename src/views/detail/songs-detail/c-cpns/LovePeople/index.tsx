import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { LoveWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { getImageSize } from '@/utils/format'

interface Iprops {
  children?: ReactNode
  peopleList: any[]
}

const LovePeople: FC<Iprops> = ({ peopleList }) => {
  return (
    <LoveWrapper>
      <AreaHeaderV2 title="喜欢这个歌单的人" />
      <ul className="avatar">
        {peopleList.map((item) => {
          return (
            <li key={item.userId} className="list">
              <img src={getImageSize(item.avatarUrl, 40)} alt="" />
            </li>
          )
        })}
      </ul>
    </LoveWrapper>
  )
}

export default memo(LovePeople)
