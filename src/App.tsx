import React, { Suspense, useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'

import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

import AppPlayerBar from './views/player/app-player-bar'
import { useAppDispatch } from './store'

import { fetchCurrentSongAction } from './views/player/store/player'
function App() {
  //获取某一首喜欢的歌
  // const dispatch = useAppDispatch()
  // useEffect(() => {
  //   dispatch(fetchCurrentSongAction(26439759))
  // }, [])
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />

      <AppPlayerBar />
    </div>
  )
}

export default App
