import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Album: FC<Iprops> = () => {
  return (
    <div>
      <h1>Album</h1>
    </div>
  )
}

export default memo(Album)
