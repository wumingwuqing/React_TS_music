import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderV2Wrapper } from './style'

interface Iprops {
  children?: ReactNode
  title?: string
  moreText?: string
  moreLink?: string
}

const AreaHeaderV2: FC<Iprops> = (props) => {
  const { title, moreText = '查看更多', moreLink } = props
  return (
    <HeaderV2Wrapper>
      <h3 className="title">
        <a href={moreLink}>{title}</a>
      </h3>
      {moreText && moreLink && <a href={moreLink}>{moreText}</a>}
    </HeaderV2Wrapper>
  )
}

export default memo(AreaHeaderV2)
