import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTopList, getTopListDetail } from '../service/ranking'
import { IStateType } from '@/store'

//网络请求获取数据
export const fetchTopListDataAction = createAsyncThunk(
  'ranking',
  async (arg, { dispatch }) => {
    const res = await getTopList()
    dispatch(setTopList(res.list))
  }
)
export const fetchTopListDetail = createAsyncThunk<
  void,
  number,
  { state: IStateType }
>('ranking', async (id, { dispatch }) => {
  const res = await getTopListDetail(id)
  dispatch(setListDetial(res.playlist))
})
//定义Slice
interface IReRankingState {
  topList: any[]
  listDetial: any
}
const initialState: IReRankingState = {
  topList: [],
  listDetial: {}
}
const raningSiclice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    setTopList: (state, action) => {
      state.topList = action.payload
    },
    setListDetial: (state, action) => {
      state.listDetial = action.payload
    }
  }
})
export const { setTopList, setListDetial } = raningSiclice.actions
export default raningSiclice.reducer
