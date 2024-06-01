import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { IStateType } from '@/store'
import { getRadioDetail, getRadioProgram } from '../service/djradio-detail'
import { IradioDetailState } from './type'
//请求数据
export const fetchRadioDetailDataAction = createAsyncThunk<
  void,
  number,
  { state: IStateType }
>('RadioDetailData', async (rid, { dispatch }) => {
  const res = await getRadioDetail(rid)
  dispatch(setRadioDetail(res.data))
})
export const fetchRadioProgramDataAction = createAsyncThunk<
  void,
  { rid: number; offset?: number; limit?: number; asc?: boolean },
  { state: IStateType }
>(
  'RadioProgramData',
  async ({ rid, offset = 0, limit = 100, asc = true }, { dispatch }) => {
    const res = await getRadioProgram(rid, offset, limit, asc)
    dispatch(setRadioProgram(res))
  }
)

//定义slice
const initialState: IradioDetailState = {
  radioDetail: {
    id: 0,
    name: '',
    dj: {
      defaultAvatar: false,
      province: 0,
      authStatus: 0,
      followed: false,
      avatarUrl: '',
      accountStatus: 0,
      gender: 0,
      city: 0,
      birthday: 0,
      userId: 0,
      userType: 0,
      nickname: '',
      signature: '',
      description: '',
      detailDescription: '',
      avatarImgId: 0,
      backgroundImgId: 0,
      backgroundUrl: '',
      authority: 0,
      mutual: false,
      expertTags: undefined,
      experts: undefined,
      djStatus: 0,
      vipType: 0,
      remarkName: undefined,
      authenticationTypes: 0,
      avatarDetail: undefined,
      avatarImgIdStr: '',
      backgroundImgIdStr: '',
      anchor: false,
      rewardCount: 0,
      avatarImgId_str: '',
      canReward: false
    },
    picId: 0,
    picUrl: '',
    desc: '',
    subCount: 0,
    shareCount: 0,
    likedCount: 0,
    programCount: 0,
    commentCount: 0,
    createTime: 0,
    categoryId: 0,
    category: '',
    secondCategoryId: 0,
    secondCategory: '',
    radioFeeType: 0,
    feeScope: 0,
    lastProgramCreateTime: 0,
    lastProgramId: 0,
    rcmdText: '',
    subed: false,
    commentDatas: [],
    feeInfo: undefined,
    unlockInfo: undefined,
    original: false,
    playCount: 0,
    privacy: false,
    disableShare: false,
    icon: undefined,
    activityInfo: undefined,
    toplistInfo: undefined,
    dynamic: false,
    labelDto: undefined,
    labels: undefined,
    detailRcmdTabOrpheus: '',
    toast: undefined,
    limitFreeToast: undefined
  },
  radioProgram: {
    count: 0,
    code: 0,
    programs: [],
    more: false
  }
}
const radioDetailSlice = createSlice({
  name: 'radioDetail',
  initialState,
  reducers: {
    setRadioDetail(state, { payload }) {
      state.radioDetail = payload
    },
    setRadioProgram(state, { payload }) {
      state.radioProgram = payload
    }
  }
})
export const { setRadioDetail, setRadioProgram } = radioDetailSlice.actions
export default radioDetailSlice.reducer
