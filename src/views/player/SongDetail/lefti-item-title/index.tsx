import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'

import { TitleWrapper } from './style'

interface Iprops {
  children?: ReactNode
  title?: string
}

const TitleInfo: FC<Iprops> = (props) => {
  const { title } = props
  return (
    <TitleWrapper>
      <h3 className="title">{title}</h3>
    </TitleWrapper>
  )
}

export default memo(TitleInfo)
