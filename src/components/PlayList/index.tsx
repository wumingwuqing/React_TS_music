import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { PlayListWrapper } from './style'
import { formatTime } from '@/utils/format'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/views/player/store/player'
import { useNavigate } from 'react-router-dom'

interface Iprops {
  children?: ReactNode
  itemdata: any[]
  playCount?: number
  trackCount: number
  isRenderAlbum?: boolean
  isRenderNew?: boolean
}

const PlayList: FC<Iprops> = ({
  itemdata,
  trackCount,
  playCount,
  isRenderAlbum
}) => {
  const dispatch = useAppDispatch()
  function handlePlayClick(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }
  const navigate = useNavigate()
  function handNameClick(id: number) {
    dispatch(fetchCurrentSongAction(id))
    navigate(`/discover/player`)
  }
  return (
    <PlayListWrapper>
      <div className="play-list-header">
        <h3>歌曲列表</h3>
        <div className="track-count">{trackCount}首歌</div>
        {playCount && (
          <div className="play-count">
            播放：<span>{playCount}次</span>
          </div>
        )}
      </div>
      <div className="play-list-content">
        <table>
          <thead className="sprite_table">
            <tr>
              <th className="order sprite_table"></th>
              <th className="title sprite_table">
                <div className="wp sprite_table">标题</div>
              </th>
              <th className="time sprite_table">
                <div className="wp sprite_table">时长</div>
              </th>
              <th className="artist sprite_table">
                <div className="wp sprite_table">歌手</div>
              </th>
              {isRenderAlbum && (
                <th className="album sprite_table">
                  <div className="wp sprite_table">专辑</div>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {itemdata.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td className="order ">
                    <div className="num">{index + 1}</div>
                    <div
                      className="icon sprite_table"
                      onClick={() => handlePlayClick(item.id)}
                    ></div>
                  </td>
                  <td className="title ">
                    <div className="f-cb">
                      <span className="name">
                        <a
                          className="text"
                          onClick={() => handNameClick(item.id)}
                        >
                          {item.name}
                        </a>
                      </span>
                    </div>
                  </td>
                  <td className="time ">
                    <div className="time-text">{formatTime(item.dt)}</div>
                    <div className="operator">
                      <button className="btn add sprite_icon2 "></button>
                      <button className="btn collect sprite_icon2 "></button>
                      <button className="btn share sprite_icon2 "></button>
                      <button className="btn download sprite_table"></button>
                    </div>
                  </td>
                  <td className="singer ">
                    <div className="name">
                      {item.ar[0].name}
                      {item.ar[1] && '/' + item.ar[1].name}
                    </div>
                  </td>
                  {isRenderAlbum && (
                    <td className="album ">
                      <div className="text">{item.al.name}</div>
                    </td>
                  )}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </PlayListWrapper>
  )
}

export default memo(PlayList)
