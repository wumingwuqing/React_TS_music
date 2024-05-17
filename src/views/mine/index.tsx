import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Mine: FC<Iprops> = () => {
  return (
    <div>
      <h1>Mine</h1>
    </div>
  )
}

export default memo(Mine)
