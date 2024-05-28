import { IStateType } from '@/store'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getArtistList, getTopArtist } from '../service/artist'
import { artistCategories } from '@/assets/data/local_data'

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

const artistSlice = createSlice({
  name: 'artist',
  initialState: {
    categories: artistCategories,
    artistList: [
      {
        accountId: 18378979,
        albumSize: 90,
        alias: ['Silence Wang'],
        briefDesc: '',
        fansCount: 4556653,
        followed: false,
        id: 5538,
        img1v1Id: 109951168242038990,
        img1v1Id_str: '109951168242038988',
        img1v1Url:
          'http://p2.music.126.net/XGVlz2pWOvYjNTYNp9Jinw==/109951168242038988.jpg',
        musicSize: 590,
        name: '汪苏泷',
        picId: 109951168242041920,
        picId_str: '109951168242041913',
        picUrl:
          'http://p2.music.126.net/stcFdXbN2c21hzWqpDgTQA==/109951168242041913.jpg',
        topicPerson: 0,
        trans: ''
      },
      {
        albumSize: 67,
        alias: ['JJ Lin', 'Wayne Lim'],
        briefDesc: '',
        fansCount: 11708356,
        followed: false,
        id: 3684,
        img1v1Id: 109951168529049970,
        img1v1Id_str: '109951168529049969',
        img1v1Url:
          'http://p2.music.126.net/r6W-zCnV-aduVn_PLZYuYg==/109951168529049969.jpg',
        musicSize: 586,
        name: '林俊杰',
        picId: 109951168529051970,
        picId_str: '109951168529051968',
        picUrl:
          'http://p2.music.126.net/78q0jUUJ0h08GxAs2G-tCA==/109951168529051968.jpg',
        topicPerson: 0,
        trans: ''
      },
      {
        albumSize: 130,
        alias: ['Eason Chan'],
        briefDesc: '',
        fansCount: 9948359,
        followed: false,
        id: 2116,
        img1v1Id: 109951169014571700,
        img1v1Id_str: '109951169014571694',
        img1v1Url:
          'http://p2.music.126.net/ODuFZql3x08Q4AaW7y20Aw==/109951169014571694.jpg',
        musicSize: 1885,
        name: '陈奕迅',
        picId: 109951169014564420,
        picId_str: '109951169014564421',
        picUrl:
          'http://p2.music.126.net/1qr8a9G8pWEMoruLJaBv8A==/109951169014564421.jpg',
        topicPerson: 0,
        trans: ''
      },
      {
        accountId: 97137413,
        albumSize: 23,
        alias: ['Joker Xue', 'Jacky Xue'],
        briefDesc: '',
        fansCount: 17521585,
        followed: false,
        id: 5781,
        img1v1Id: 109951168719781600,
        img1v1Id_str: '109951168719781607',
        img1v1Url:
          'http://p2.music.126.net/jj_Ke8S0q8lpDtohy9seDw==/109951168719781607.jpg',
        musicSize: 272,
        name: '薛之谦',
        picId: 109951168719786020,
        picId_str: '109951168719786015',
        picUrl:
          'http://p2.music.126.net/XRdiK-vIvPo83d-EjUTdEQ==/109951168719786015.jpg',
        topicPerson: 0,
        trans: ''
      },
      {
        accountId: 90467349,
        albumSize: 29,
        alias: ['刘清云'],
        briefDesc: '',
        fansCount: 2179006,
        followed: false,
        id: 12631485,
        img1v1Id: 109951169603658960,
        img1v1Id_str: '109951169603658959',
        img1v1Url:
          'http://p2.music.126.net/nBgdTq-1Y5GaQw3WpKfGDA==/109951169603658959.jpg',
        musicSize: 73,
        name: 'h3R3',
        picId: 109951169603683120,
        picId_str: '109951169603683118',
        picUrl:
          'http://p2.music.126.net/in8eeZ0f5r0-iYvfI7c-WQ==/109951169603683118.jpg',
        topicPerson: 0,
        trans: ''
      },
      {
        accountId: 1461695826,
        albumSize: 69,
        alias: [],
        briefDesc: '',
        fansCount: 9638618,
        followed: false,
        id: 12138269,
        img1v1Id: 109951169478564510,
        img1v1Id_str: '109951169478564508',
        img1v1Url:
          'http://p2.music.126.net/fdH6eBYoqeEzyFu7oA5pGQ==/109951169478564508.jpg',
        musicSize: 372,
        name: '毛不易',
        picId: 109951165787072460,
        picId_str: '109951165787072463',
        picUrl:
          'http://p2.music.126.net/W5LXS0-I-P9Wk6lQpS6HGA==/109951165787072463.jpg',
        topicPerson: 0,
        trans: ''
      },
      {
        accountId: 3492944,
        albumSize: 130,
        alias: ['Jason Zhang'],
        briefDesc: '',
        fansCount: 4533716,
        followed: false,
        id: 6472,
        img1v1Id: 109951169294512580,
        img1v1Id_str: '109951169294512582',
        img1v1Url:
          'http://p2.music.126.net/EsUQSAsNbYHbJ7IFqu4rUg==/109951169294512582.jpg',
        musicSize: 865,
        name: '张杰',
        picId: 109951169294511650,
        picId_str: '109951169294511651',
        picUrl:
          'http://p2.music.126.net/PxsdyHtM0yMi1cIIDk_MFw==/109951169294511651.jpg',
        topicPerson: 0,
        trans: ''
      },
      {
        accountId: 542203503,
        albumSize: 50,
        alias: [],
        briefDesc: '',
        fansCount: 3556828,
        followed: false,
        id: 29051613,
        img1v1Id: 109951169544008050,
        img1v1Id_str: '109951169544008051',
        img1v1Url:
          'http://p2.music.126.net/HA_2UPfEHJ-8ShU9qXbu6A==/109951169544008051.jpg',
        musicSize: 165,
        name: '郑润泽',
        picId: 109951164458656130,
        picId_str: '109951164458656122',
        picUrl:
          'http://p2.music.126.net/BtXjoRNLCZjoSV-3Ag3M0Q==/109951164458656122.jpg',
        topicPerson: 0,
        trans: ''
      },
      {
        accountId: 6228671,
        albumSize: 35,
        alias: ['Ronghao Li'],
        briefDesc: '',
        fansCount: 8391358,
        followed: false,
        id: 4292,
        img1v1Id: 109951169370030020,
        img1v1Id_str: '109951169370030008',
        img1v1Url:
          'http://p2.music.126.net/0L5s8r1dub2pOCp5hEY37Q==/109951169370030008.jpg',
        musicSize: 233,
        name: '李荣浩',
        picId: 109951169370018460,
        picId_str: '109951169370018460',
        picUrl:
          'http://p2.music.126.net/gpphZYbyTEfpYNZYIUUU9A==/109951169370018460.jpg',
        topicPerson: 0,
        trans: ''
      },
      {
        accountId: 1750344369,
        albumSize: 41,
        alias: ['Ele Yen'],
        briefDesc: '',
        fansCount: 4861689,
        followed: false,
        id: 31376161,
        img1v1Id: 109951165122695490,
        img1v1Id_str: '109951165122695489',
        img1v1Url:
          'http://p2.music.126.net/ei0o1W2N_SX1vpkXr2DDtA==/109951165122695489.jpg',
        musicSize: 152,
        name: '颜人中',
        picId: 109951165122696430,
        picId_str: '109951165122696427',
        picUrl:
          'http://p2.music.126.net/M9GvSuKJQyfPKprZaLKt7A==/109951165122696427.jpg',
        topicPerson: 0,
        trans: ''
      }
    ]
  },
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
