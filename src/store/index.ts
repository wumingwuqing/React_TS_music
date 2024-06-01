import { configureStore } from '@reduxjs/toolkit'

import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { shallowEqual } from 'react-redux'

import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'
import playerReducer from '@/views/player/store/player'
import TopListReducer from '@/views/discover/c-views/ranking/store/ranking'
import SongsReducer from '@/views/discover/c-views/songs/store/songs'
import SongsDetailReducer from '@/views/detail/songs-detail/store/songs-detail'
import djradioReducer from '@/views/discover/c-views/djradio/store/djradio'
import radioDetailReducer from '@/views/detail/djradio-detail/store/djradio-detail'
import artistReducer from '@/views/discover/c-views/artist/store/artist'
import artistDetailReducer from '@/views/detail/artist-detail/store/artist-detail'
import ablumReducer from '@/views/discover/c-views/album/store/album'
import albumDetailReducer from '@/views/detail/album-detail/store/album-detail'
const store = configureStore({
  reducer: {
    // Add your reducers here
    recommend: recommendReducer,
    player: playerReducer,
    topList: TopListReducer,
    songs: SongsReducer,
    songsDetail: SongsDetailReducer,
    djradio: djradioReducer,
    radioDetail: radioDetailReducer,
    artist: artistReducer,
    artistDetail: artistDetailReducer,
    album: ablumReducer,
    albumDetail: albumDetailReducer
  }
})

//实现select自动类型推断 useAppSelector Hook
export type IStateType = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<IStateType> = useSelector //TypedUseSelectorHook<>是函数调用签名

export type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch

export const shallowEqualApp = shallowEqual

export default store
