import { configureStore } from '@reduxjs/toolkit'

import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { shallowEqual } from 'react-redux'

import recommendReducer from '@/views/discover/c-views/recommend/store/recommend'
import playerReducer from '@/views/player/store/player'
import playListReducer from '@/views/play-list/store/service'
import TopListReducer from '@/views/discover/c-views/ranking/store/ranking'
import SongsReducer from '@/views/discover/c-views/songs/store/songs'

const store = configureStore({
  reducer: {
    // Add your reducers here
    recommend: recommendReducer,
    player: playerReducer,
    playList: playListReducer,
    topList: TopListReducer,
    songs: SongsReducer
  }
})

//实现select自动类型推断 useAppSelector Hook
export type IStateType = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<IStateType> = useSelector //TypedUseSelectorHook<>是函数调用签名

export type DispatchType = typeof store.dispatch
export const useAppDispatch: () => DispatchType = useDispatch

export const shallowEqualApp = shallowEqual

export default store
