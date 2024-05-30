import { IStateType } from '@/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllAlbum, getHotAlbum } from '../service/album'
import IAblumType from './type'

export const fetchHotAblumDataAction = createAsyncThunk(
  'ablumData',
  async (arg, { dispatch }) => {
    const res = await getHotAlbum()
    dispatch(setHotAlbum(res.albums))
  }
)
export const fetchAllAblumDataAction = createAsyncThunk<
  void,
  { offest: number; area: 'ALL' | 'ZH' | 'EA' | 'KR' | 'JP'; limit?: number },
  { state: IStateType }
>('ablumData', async ({ offest, area = 'ALL', limit = 35 }, { dispatch }) => {
  const res = await getAllAlbum(offest, area, limit)
  dispatch(setAllAlbum(res.albums))
})
//定义slice
const initialState: IAblumType = {
  hotAlbum: [],
  allAlbum: []
}
const ablumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    setHotAlbum(state, { payload }) {
      state.hotAlbum = payload
    },
    setAllAlbum(state, { payload }) {
      state.allAlbum = payload
    }
  }
})
export const { setHotAlbum, setAllAlbum } = ablumSlice.actions
export default ablumSlice.reducer
