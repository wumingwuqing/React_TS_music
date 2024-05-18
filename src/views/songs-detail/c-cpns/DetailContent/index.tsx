import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ContentWrapper } from './style'
import PlayList from '@/components/PlayList'

interface Iprops {
  children?: ReactNode
  itemdata: any[]
  playCount: number
  trackCount: number
}

const DetailContent: FC<Iprops> = ({ itemdata, trackCount, playCount }) => {
  return (
    <ContentWrapper>
      <PlayList
        itemdata={itemdata}
        playCount={playCount}
        trackCount={trackCount}
        isRenderAlbum={true}
      />
    </ContentWrapper>
  )
}

export default memo(DetailContent)
