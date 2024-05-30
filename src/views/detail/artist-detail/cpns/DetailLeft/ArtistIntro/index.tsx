import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ArtistIntroListWrapper } from './style'

interface Iprops {
  children?: ReactNode
  name: string
  briefDesc: string
}

const SongList: FC<Iprops> = ({ name, briefDesc }) => {
  return (
    <ArtistIntroListWrapper>
      <h2>
        <i>&nbsp;</i>
        {name}简介
      </h2>
      <p>{briefDesc}</p>
    </ArtistIntroListWrapper>
  )
}

export default memo(SongList)
