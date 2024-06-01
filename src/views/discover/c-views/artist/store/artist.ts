import { IStateType } from '@/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getArtistList, getTopArtist } from '../service/artist'
import { artistCategories } from '@/assets/data/local_data'
import { IartistState } from './type'
// 请求数据
export const fetchArtistListDataAction = createAsyncThunk<
  void,
  {
    cat: number
    area: number
    type: number
    offset: number
    limit: number
    initial: string
  },
  { state: IStateType }
>(
  'artistList',
  async (
    { cat = 5000, area = -1, type = 1, offset = 0, limit = 100, initial = '' },
    { dispatch }
  ) => {
    const res =
      cat === 5000
        ? await getTopArtist()
        : await getArtistList(cat, area, type, offset, limit, initial)
    dispatch(setArtistList(res.artists))
  }
)
// 定义slice
const initialState: IartistState = {
  categories: artistCategories,
  artistList: []
}
const artistSlice = createSlice({
  name: 'artist',
  initialState,
  reducers: {
    setCategories(state, { payload }) {
      state.artistList = payload
    },
    setArtistList(state, { payload }) {
      state.artistList = payload
    }
  }
})

export const { setCategories, setArtistList } = artistSlice.actions

export default artistSlice.reducer
