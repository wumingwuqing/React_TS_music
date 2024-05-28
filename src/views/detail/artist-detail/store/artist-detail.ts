import { IStateType } from '@/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getArtistAlbum,
  getArtistMV,
  getArtists,
  getSimiarArtist
} from '../service/artist-detail'
import { IArtistDetailState } from './type'
//获取数据
export const fetchArtistsDataAction = createAsyncThunk<
  void,
  number,
  { state: IStateType }
>('artists', async (id, { dispatch }) => {
  const res = await getArtists(id)
  dispatch(setArtistDesc(res.artist))
  dispatch(setArtistsSong(res.hotSongs))
})

export const fetchArtistsAblumDataAction = createAsyncThunk<
  void,
  { id: number; offset: number; limit: number },
  { state: IStateType }
>('artistAlbum', async ({ id, offset = 0, limit = 12 }, { dispatch }) => {
  const res = await getArtistAlbum(id, offset, limit)
  dispatch(setArtistAblum(res.hotAlbums))
})

export const fetchArtistsMVDataAction = createAsyncThunk<
  void,
  { id: number; offset: number; limit: number },
  { state: IStateType }
>('artistsMV', async ({ id, offset = 0, limit = 12 }, { dispatch }) => {
  const res = await getArtistMV(id, offset, limit)
  dispatch(setArtistMV(res.mvs))
})

// export const fetchSimiarArtistDataAction = createAsyncThunk<
//   void,
//   { id: number; limit: number },
//   { state: IStateType }
// >('artistAlbum', async ({ id, limit = 6 }, { dispatch }) => {
//   const res = await getSimiarArtist(id, limit)
//   console.log(res)
//   dispatch(setSimiarArtist(res))
// })
//定义slice
const initialState: IArtistDetailState = {
  artistsSong: [],
  artistDesc: {
    img1v1Id: 0,
    topicPerson: 0,
    followed: false,
    picId: 0,
    musicSize: 0,
    albumSize: 0,
    briefDesc: '',
    picUrl: '',
    img1v1Url: '',
    trans: '',
    alias: [],
    name: '',
    id: 0,
    publishTime: 0,
    accountId: 0,
    picId_str: '',
    img1v1Id_str: '',
    mvSize: 0
  },
  artistAblum: [],
  artistMV: [],
  simiarArtist: []
}
const artistDetailSlice = createSlice({
  name: 'artistDetail',
  initialState,
  reducers: {
    setArtistsSong(state, { payload }) {
      state.artistsSong = payload
    },
    setArtistDesc(state, { payload }) {
      state.artistDesc = payload
    },
    setArtistAblum(state, { payload }) {
      state.artistAblum = payload
    },
    setArtistMV(state, { payload }) {
      state.artistMV = payload
    },
    setSimiarArtist(state, { payload }) {
      state.simiarArtist = payload
    }
  }
})
export const {
  setArtistsSong,
  setArtistDesc,
  setArtistAblum,
  setArtistMV,
  setSimiarArtist
} = artistDetailSlice.actions
export default artistDetailSlice.reducer
