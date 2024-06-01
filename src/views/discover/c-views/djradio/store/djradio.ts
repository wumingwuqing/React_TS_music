import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  getDjRecommendByType,
  getDjCatelist,
  getDjRecommend,
  getDjToplist,
  getDjRadioList
} from '../service/djradio'
import { IStateType } from '@/store'
import { IDjradioState } from './type'
//获取数据
export const fetchCatlistDataAction = createAsyncThunk(
  'catlist',
  async (arg, { dispatch }) => {
    const res = await getDjCatelist()
    dispatch(setDjCatelist(res.categories))
  }
)

export const fetchDjRecommendDataAction = createAsyncThunk<
  void,
  number | undefined,
  { state: IStateType }
>('djrecommend', async (limit = 10, { dispatch }) => {
  const res = await getDjRecommend(limit)
  dispatch(setDjRecommend(res.programs))
})

export const fetchDjRankingDataAction = createAsyncThunk<
  void,
  number | undefined,
  { state: IStateType }
>('djranking', async (limit = 10, { dispatch }) => {
  const res = await getDjToplist(limit)
  dispatch(setDjRanking(res.toplist))
})

export const fetchDjRecommendByTypeDataAction = createAsyncThunk<
  void,
  number,
  { state: IStateType }
>('djRecommendByType', async (type, { dispatch }) => {
  const res = await getDjRecommendByType(type)
  dispatch(setDjRecommendByType(res.djRadios))
})

export const fetchDjRadioListDataAction = createAsyncThunk<
  void,
  {
    cateId: number
    offset: number
    limit: number
  },
  { state: IStateType }
>('djRecommendByType', async ({ cateId, offset, limit }, { dispatch }) => {
  const res = await getDjRadioList(cateId, offset, limit)
  dispatch(setDjRadioList(res))
})
//定义slice
const initialState: IDjradioState = {
  djCatelist: [],
  djRecommend: [],
  djRanking: [],
  djRecommendByType: [],
  djRadioList: {
    djRadios: [],
    hasMore: false,
    count: 0,
    code: 0
  }
}
const djradioSlice = createSlice({
  name: 'djradio',
  initialState,
  reducers: {
    setDjCatelist(state, { payload }) {
      state.djCatelist = payload
    },
    setDjRecommend(state, { payload }) {
      state.djRecommend = payload
    },
    setDjRanking(state, { payload }) {
      state.djRanking = payload
    },
    setDjRecommendByType(state, { payload }) {
      state.djRecommendByType = payload
    },
    setDjRadioList(state, { payload }) {
      state.djRadioList = payload
    }
  }
})
export const {
  setDjCatelist,
  setDjRecommend,
  setDjRanking,
  setDjRecommendByType,
  setDjRadioList
} = djradioSlice.actions
export default djradioSlice.reducer
