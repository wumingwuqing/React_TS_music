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
  playCount: number
  trackCount: number
  isRenderAlbum?: boolean
  isRenderNew?: boolean
}

const PlayList: FC<Iprops> = ({
  itemdata,
  trackCount,
  playCount,
  isRenderAlbum,
  isRenderNew
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
  console.log(itemdata)
  return (
    <PlayListWrapper>
      <div className="play-list-header">
        <h3>歌曲列表</h3>
        <div className="track-count">{trackCount}首歌</div>
        <div className="play-count">
          播放：<span>{playCount}次</span>
        </div>
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
              <th className="singer sprite_table">
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
                    <span className="num">{index + 1}</span>
                    {isRenderNew && (
                      <span className="letter sprite_icon2"></span>
                    )}
                  </td>
                  <td className="title ">
                    <div className="f-cb">
                      <div className="tt">
                        <div className="ttc">
                          <span className="name">
                            {/* {index < 3 && (
                              <span className="pic">
                                <img src={item.al.picUrl} alt="" />
                              </span>
                            )} */}
                            <span
                              className="icon sprite_table"
                              onClick={() => handlePlayClick(item.id)}
                            ></span>
                            <a
                              className="text"
                              onClick={() => handNameClick(item.id)}
                            >
                              {item.name}
                            </a>
                            {(item.tns || item.alia[0]) && (
                              <span className="alia">
                                &nbsp;-&nbsp;( {item.tns || item.alia[0]})
                              </span>
                            )}
                          </span>
                        </div>
                      </div>
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
                  {isRenderAlbum && <td className="album ">{item.al.name}</td>}
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
