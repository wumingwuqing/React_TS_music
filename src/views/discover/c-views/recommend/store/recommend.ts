import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getArtistList,
  getBanners,
  getHotRecommend,
  getNewAlbum,
  getPlaylistDetail
} from '../service/recommend'
//网络请求获取数据
export const fetchBannerDataAction = createAsyncThunk(
  'banners',
  async (arg, { dispatch }) => {
    const res = await getBanners()
    dispatch(setBannersAction(res.banners))
  }
)
export const fetchHotRecommendDataAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const res = await getHotRecommend(8)
    dispatch(setHotRecommendAction(res.result))
  }
)
export const fetchNewAlbumDataAction = createAsyncThunk(
  'NewAlbum',
  async (arg, { dispatch }) => {
    const res = await getNewAlbum()
    dispatch(setNewAlbumsAction(res.albums))
  }
)
export const fetchRankingDataAction = createAsyncThunk(
  'ranking',
  async (arg, { dispatch }) => {
    //1.拿到所有结果后在dispatch
    //2.获取的结果是正确的顺序
    const promises: Promise<any>[] = []
    const rankingIds = [19723756, 3779629, 2884035]
    for (const id of rankingIds) {
      promises.push(getPlaylistDetail(id))
    }
    Promise.all(promises).then((res) => {
      const playlists = res
        .filter((item) => item.playlist)
        .map((item) => item.playlist)
      dispatch(setRankingsAction(playlists))
    })
  }
)
export const fetchActistsDataAction = createAsyncThunk(
  'artists',
  async (arg, { dispatch }) => {
    const res = await getArtistList()
    dispatch(setArtistsAction(res.artists))
  }
)
//定义Slice
interface IRecommendState {
  banners: any[]
  hotRecommends: any[]
  newAlbums: any[]
  rankings: any[]
  settleSingers: any[]
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbums: [],
  rankings: [],
  settleSingers: []
}
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    setBannersAction(state, action) {
      state.banners = action.payload
    },
    setHotRecommendAction(state, action) {
      state.hotRecommends = action.payload
    },
    setNewAlbumsAction(state, action) {
      state.newAlbums = action.payload
    },
    setRankingsAction(state, action) {
      state.rankings = action.payload
    },
    setArtistsAction(state, action) {
      state.settleSingers = action.payload
    }
  }
})
//导出
export const {
  setBannersAction,
  setHotRecommendAction,
  setNewAlbumsAction,
  setRankingsAction,
  setArtistsAction
} = recommendSlice.actions
export default recommendSlice.reducer
