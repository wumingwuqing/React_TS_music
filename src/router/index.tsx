import React, { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
//路由懒加载
const Discover = lazy(() => import('@/views/discover'))
const Album = lazy(() => import('@/views/discover/c-views/album'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const SongsDetail = lazy(() => import('@/views/detail/songs-detail'))
const DjradioDetail = lazy(() => import('@/views/detail/djradio-detail'))
const ArtistDetail = lazy(() => import('@/views/detail/artist-detail'))
const AblumDetail = lazy(() => import('@/views/detail/album-detail'))
////////
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

const Player = lazy(() => import('@/views/player'))
//路由表
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: '/discover/album',
        element: <Album />
      },
      {
        path: '/discover/artist',
        element: <Artist />
      },
      {
        path: '/discover/djradio',
        element: <Djradio />
      },
      {
        path: '/discover/ranking',
        element: <Ranking />
      },
      {
        path: '/discover/recommend',
        element: <Recommend />
      },
      {
        path: '/discover/songs',
        element: <Songs />
      },
      {
        path: '/discover/player',
        element: <Player />
      },
      {
        path: '/discover/songsdetail',
        element: <SongsDetail />
      },
      {
        path: '/discover/djradiodetail',
        element: <DjradioDetail />
      },
      {
        path: '/discover/artistdetail/:id',
        element: <ArtistDetail />
      },
      {
        path: '/discover/albumdetail/:id',
        element: <AblumDetail />
      }
    ]
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routes
