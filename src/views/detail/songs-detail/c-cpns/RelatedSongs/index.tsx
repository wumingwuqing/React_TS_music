import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RelatedWrapper } from './style'
import AreaHeaderV2 from '@/components/area-header-v2'
import { getImageSize } from '@/utils/format'

interface Iprops {
  children?: ReactNode
  relatedSongs: any[]
}

const LovePeople: FC<Iprops> = ({ relatedSongs }) => {
  return (
    <RelatedWrapper>
      <AreaHeaderV2 title="相关推荐" />
      <ul className="related">
        {relatedSongs?.map((item) => {
          return (
            <li key={item?.userId} className="list">
              <div className="left">
                <img
                  src={getImageSize(item?.coverImgUrl, 50)}
                  alt={item?.nickname}
                />
              </div>
              <div className="right">
                <div className="name">{item?.name}</div>
                <div className="creator">
                  <span>by</span>&nbsp;{item?.creator.nickname}
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </RelatedWrapper>
  )
}

export default memo(LovePeople)
