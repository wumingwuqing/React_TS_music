import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { ProgramWrapper } from './style'

interface Iprops {
  children?: ReactNode
}

const ProgramHeader: FC<Iprops> = () => {
  return (
    <ProgramWrapper>
      <h1>DetailHeader</h1>
    </ProgramWrapper>
  )
}

export default memo(ProgramHeader)
