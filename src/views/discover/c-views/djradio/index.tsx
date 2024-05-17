import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface Iprops {
  children?: ReactNode
}

const Djradio: FC<Iprops> = () => {
  return (
    <div>
      <h1>Djradio</h1>
    </div>
  )
}

export default memo(Djradio)
