import { IStateType } from '@/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAlbum } from '../service/album-detail'
import { IAlbumDetailState } from './type'

//获取数据
export const fetchAblumDetailDataAction = createAsyncThunk<
  void,
  number,
  { state: IStateType }
>('artists', async (id, { dispatch }) => {
  const res = await getAlbum(id)
  dispatch(setAlbumDetail({ album: res.album, songs: res.songs }))
})

const initialState: IAlbumDetailState = {
  albumDetail: {
    album: {
      songs: [],
      paid: false,
      onSale: false,
      mark: 0,
      awardTags: undefined,
      artists: [],
      copyrightId: 0,
      picId: 0,
      artist: {
        img1v1Id: 0,
        topicPerson: 0,
        picId: 0,
        musicSize: 0,
        albumSize: 0,
        briefDesc: '',
        picUrl: '',
        img1v1Url: '',
        followed: false,
        trans: '',
        alias: [],
        name: '',
        id: 0,
        picId_str: '',
        img1v1Id_str: ''
      },
      briefDesc: '',
      publishTime: 0,
      company: '',
      picUrl: '',
      commentThreadId: '',
      blurPicUrl: '',
      companyId: 0,
      pic: 0,
      status: 0,
      subType: '',
      alias: [],
      description: '',
      tags: '',
      name: '',
      id: 0,
      type: '',
      size: 0,
      picId_str: '',
      info: {
        commentThread: {
          id: '',
          resourceInfo: {
            id: 0,
            userId: 0,
            name: '',
            imgUrl: '',
            creator: undefined,
            encodedId: undefined,
            subTitle: undefined,
            webUrl: undefined
          },
          resourceType: 0,
          commentCount: 0,
          likedCount: 0,
          shareCount: 0,
          hotCount: 0,
          latestLikedUsers: undefined,
          resourceId: 0,
          resourceOwnerId: 0,
          resourceTitle: ''
        },
        latestLikedUsers: undefined,
        liked: false,
        comments: undefined,
        resourceType: 0,
        resourceId: 0,
        commentCount: 0,
        likedCount: 0,
        shareCount: 0,
        threadId: ''
      }
    },
    songs: []
  }
}
const albumDetailSlice = createSlice({
  name: 'albumDetail',
  initialState,
  reducers: {
    setAlbumDetail(state, { payload }) {
      state.albumDetail = payload
    }
  }
})

export const { setAlbumDetail } = albumDetailSlice.actions
export default albumDetailSlice.reducer
