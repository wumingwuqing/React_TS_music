import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getLyric, getPlayList, getSongDetail } from '../service/player'
import { ILyric, parseLyric } from '@/utils/parse-lyric'
import { IStateType } from '@/store'
import { getSimiSong } from '../service/player'

//设置currentSong
export const fetchCurrentSongAction = createAsyncThunk<
  void,
  number,
  { state: IStateType }
>('currentSong', (id: number, { dispatch, getState }) => {
  //准备播放某首歌时，分两种情况
  //1.从列表中尝试是否可以获取这首歌
  const playSongList = getState().player.playSongList
  const findIndex = playSongList.findIndex((item) => item.id === id)
  if (findIndex === -1) {
    //没有找到
    //获取song
    getSongDetail(id).then((res): any => {
      if (!res?.songs?.length) return
      const song = res.songs[0]
      //加入列表
      const newPlaySongList = [...playSongList]
      newPlaySongList.push(song)
      dispatch(setPlaySongList(newPlaySongList))
      dispatch(setPlaySongIndex(newPlaySongList.length - 1))
      //设置song
      dispatch(setCurrentSong(song))
    })
  } else {
    //找到了
    const song = playSongList[findIndex]
    dispatch(setCurrentSong(song))
    dispatch(setPlaySongIndex(findIndex))
  }

  //获取song
  getSongDetail(id).then((res): any => {
    if (!res?.songs?.length) return
    //设置song
    dispatch(setCurrentSong(res.songs[0]))
  })

  //获取歌词
  getLyric(id).then((res): any => {
    //获取歌词
    const lrcString = res?.lrc?.lyric
    const tlyricString = res?.tlyric?.lyric
    const romalrcString = res?.romalrc?.lyric
    //对歌词进行解析
    if (lrcString) {
      const lrc = parseLyric(lrcString)
      //放入歌词
      dispatch(setLyrics(lrc))
    }
    if (tlyricString) {
      const tlyric = parseLyric(tlyricString)
    }
    if (romalrcString) {
      const romalrc = parseLyric(romalrcString)
    }
  })
})

export const changeMusicAction = createAsyncThunk<
  void,
  boolean,
  { state: IStateType }
>('changemusic', (isNext: boolean, { dispatch, getState }) => {
  //获取state中的数据
  const player = getState().player
  const playMode = player.playMode
  const songIndex = player.playSongIndex
  const songList = player.playSongList
  //2.根据不同的模式进行切换
  let newIndex = songIndex
  if (playMode === 1) {
    //随机播放
    newIndex = Math.floor(Math.random() * songList.length)
  } else if (playMode === 2) {
    //单曲循环
    newIndex = songIndex
  } else {
    //顺序播放
    newIndex = isNext ? songIndex + 1 : songIndex - 1
  }
  //获取当前的歌曲
  if (newIndex > songList.length - 1) newIndex = 0
  if (newIndex < 0) newIndex = songList.length - 1
  const currentSong = songList[newIndex]
  dispatch(setCurrentSong(currentSong))
  dispatch(setPlaySongIndex(newIndex))
  //获取歌词
  getLyric(currentSong.id).then((res): any => {
    //获取歌词
    const lrcString = res.lrc.lyric
    const tlyricString = res?.tlyric?.lyric
    const romalrcString = res?.romalrc?.lyric
    //对歌词进行解析
    //对歌词进行解析
    if (lrcString) {
      const lrc = parseLyric(lrcString)
      //放入歌词
      dispatch(setLyrics(lrc))
    }
    if (tlyricString) {
      const tlyric = parseLyric(tlyricString)
    }
    if (romalrcString) {
      const romalrc = parseLyric(romalrcString)
    }
  })
})
//获取相似歌曲
export const getSimiSongAction = createAsyncThunk(
  'simisong',
  (id: number, { dispatch }) => {
    getSimiSong(id).then((res) => {
      dispatch(setSimiSong(res.songs))
    })
  }
)
export const fetchPlayListAction = createAsyncThunk<
  void,
  number,
  { state: IStateType }
>('setPlayList', (id: number, { dispatch, getState }) => {
  //获取歌单
  getPlayList(id).then((res) => {
    dispatch(setPlayList(res.playlists))
  })
})
//slice
interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number

  playSongList: any[]
  playSongIndex: number

  playMode: number

  simiSong: any[]
  playList: any[]
}
const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [],
  playSongIndex: -1,
  playMode: 0, //0顺序 1随机 2单曲循环

  simiSong: [],
  playList: []
}
const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setCurrentSong: (state, action) => {
      state.currentSong = action.payload
    },
    setLyrics: (state, action) => {
      state.lyrics = action.payload
    },
    setLyricIndex: (state, action) => {
      state.lyricIndex = action.payload
    },
    setPlaySongList: (state, action) => {
      state.playSongList = action.payload
    },
    setPlaySongIndex: (state, action) => {
      state.playSongIndex = action.payload
    },
    setPlayMode: (state, action) => {
      state.playMode = action.payload
    },
    setSimiSong: (state, action) => {
      state.simiSong = action.payload
    },

    setPlayList(state, action) {
      state.playList = action.payload
    }
  }
})

export const {
  setCurrentSong,
  setLyrics,
  setLyricIndex,
  setPlaySongList,
  setPlaySongIndex,
  setPlayMode,
  setSimiSong,
  setPlayList
} = playerSlice.actions
export default playerSlice.reducer
