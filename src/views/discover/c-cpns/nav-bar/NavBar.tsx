import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

import { BarWrapper } from './style'

import { discoverMenu } from '@/assets/data/local_data'

interface Iprops {
  children?: ReactNode
}

const NavBar: FC<Iprops> = () => {
  return (
    <BarWrapper>
      <div className="nav wrap-v1">
        {discoverMenu.map((item) => {
          return (
            <div className="item" key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          )
        })}
      </div>
    </BarWrapper>
  )
}

export default memo(NavBar)
