import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Artist: FC<Iprops> = () => {
  return (
    <div>
      <h1>Artist</h1>
    </div>
  )
}

export default memo(Artist)
