import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Download: FC<Iprops> = () => {
  return (
    <div>
      <h1>Download</h1>
    </div>
  )
}

export default memo(Download)
