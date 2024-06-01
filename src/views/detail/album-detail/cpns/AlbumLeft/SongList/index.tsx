import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongListWrapper } from './style'
import PlayList from '@/components/PlayList'

interface Iprops {
  children?: ReactNode
  data: any
}

const SongList: FC<Iprops> = ({ data }) => {
  console.log(data)
  return (
    <SongListWrapper>
      <PlayList itemdata={data} trackCount={data.length} />
    </SongListWrapper>
  )
}

export default memo(SongList)
