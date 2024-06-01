import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { SongListWrapper } from './style'
import { useAppSelector } from '@/store'
import { formatTime } from '@/utils/format'

interface Iprops {
  children?: ReactNode
}

const SongList: FC<Iprops> = () => {
  const artistsSong = useAppSelector((state) => state.artistDetail.artistsSong)
  return (
    <SongListWrapper>
      <table>
        <tbody>
          {artistsSong.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>
                  <div className="order">
                    <span className="number">{index + 1}</span>
                    <span className="icon sprite_table"></span>
                  </div>
                </td>
                <td>
                  <div className="title">
                    <span className="name">{item.name}</span>
                    {item.alia[0] && <>&nbsp;-&nbsp;({item.alia[0]})</>}
                  </div>
                </td>
                <td>
                  <div className="time">
                    <span>{formatTime(item.dt)}</span>
                    <div className="operator">
                      <button className="btn add sprite_icon2 "></button>
                      <button className="btn collect sprite_icon2 "></button>
                      <button className="btn share sprite_icon2 "></button>
                      <button className="btn download sprite_table"></button>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="album ">
                    <span className="text-ellipsis">{item.al.name}</span>
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </SongListWrapper>
  )
}

export default memo(SongList)
