import { IStateType } from '@/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getPlayList } from '../service/service'

export const fetchPlayListAction = createAsyncThunk<
  void,
  number,
  { state: IStateType }
>('setPlayList', (id: number, { dispatch, getState }) => {
  //获取歌单
  getPlayList(id).then((res) => {
    dispatch(setPlayList(res.playlists))
  })
})

interface IPlayListState {
  playList: any[]
}

const initialState: IPlayListState = {
  playList: []
}

const playListSlice = createSlice({
  name: 'playList',
  initialState,
  reducers: {
    setPlayList(state, action) {
      state.playList = action.payload
    }
  }
})

export const { setPlayList } = playListSlice.actions
export default playListSlice.reducer
