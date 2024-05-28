import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCatlist, getPlaylist } from '../service/songs'
import { IStateType } from '@/store'

export const fetchCatlistDataAction = createAsyncThunk(
  'catlist',
  async (arg, { dispatch }) => {
    const res = await getCatlist()
    dispatch(setCatlistAction({ categories: res.categories, sub: res.sub }))
  }
)
type IParams = {
  limit: number
  offset: number
  cat?: string
}
export const fetchPlaylistDataAction = createAsyncThunk<
  void,
  IParams,
  { state: IStateType }
>('playlist', async ({ cat, limit = 35, offset = 0 }, { dispatch }) => {
  const res = await getPlaylist({ cat, limit, offset })
  dispatch(setPlaylistAction(res))
})
//定义slice
interface ISongsState {
  catlist: { categories: any; sub: any[] }
  playlist: any
}
const initialState: ISongsState = {
  catlist: { categories: {}, sub: [] },
  playlist: {}
}

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    setCatlistAction(state, action) {
      state.catlist = action.payload
    },
    setPlaylistAction(state, action) {
      state.playlist = action.payload
    }
  }
})

export const { setCatlistAction, setPlaylistAction } = songsSlice.actions
export default songsSlice.reducer
