import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Focus: FC<Iprops> = () => {
  return (
    <div>
      <h1>Focus</h1>
    </div>
  )
}

export default memo(Focus)
