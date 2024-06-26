import React, { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

import NavBar from './c-cpns/nav-bar/NavBar'

interface Iprops {
  children?: ReactNode
}

const Discover: FC<Iprops> = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback="loading...">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
