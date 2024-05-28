import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { ProgramWrapper } from './style'
import { formatDate, formatTime } from '@/utils/format'
import { useAppDispatch } from '@/store'
import { fetchCurrentSongAction } from '@/views/player/store/player'
import { fetchDjRadioListDataAction } from '@/views/discover/c-views/djradio/store/djradio'
import { Pagination, PaginationProps, message } from 'antd'
import { fetchRadioProgramDataAction } from '../../store/djradio-detail'

interface Iprops {
  children?: ReactNode
  itemData: any
  rid: number
}

const ProgramList: FC<Iprops> = ({ itemData, rid }) => {
  console.log(itemData)
  const dispatch = useAppDispatch()
  function handlePlayClick(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }

  //分页器
  const [current, setCurrent] = useState(1)
  const onPageChange: PaginationProps['onChange'] = (current, pageSize) => {
    setCurrent(current)
    message.info(`正在请求新数据`, 4)
    dispatch(
      fetchRadioProgramDataAction({ rid, offset: (current - 1) * pageSize })
    )
  }
  const itemRender: PaginationProps['itemRender'] = (
    _,
    type,
    originalElement
  ) => {
    if (type === 'prev') {
      return <button className="sprite_button2">上一页</button>
    }
    if (type === 'next') {
      return <button className="sprite_button2">下一页</button>
    }
    return originalElement
  }

  return (
    <ProgramWrapper>
      <div className="header">
        <h2>节目列表 </h2>
        <div>共{itemData.count}期</div>
      </div>
      <table className="content">
        <tbody>
          {itemData.programs.map((item: any, index: number) => {
            return (
              <tr key={item.id}>
                <td className="order">
                  {index + 1}
                  <i
                    className="icon sprite_table"
                    onClick={() => handlePlayClick(item.mainTrackId)}
                  ></i>
                </td>
                <td
                  className="name"
                  onClick={() => handlePlayClick(item.mainTrackId)}
                >
                  <div className="text">{item.name}</div>
                  <div className="operator">
                    <button className="btn add sprite_icon2 "></button>
                    <button className="btn collect sprite_icon2 "></button>
                    <button className="btn share sprite_icon2 "></button>
                    <button className="btn download sprite_table"></button>
                  </div>
                </td>
                <td className="play">播放{item.listenerCount}</td>
                <td className="like">赞{item.likedCount}</td>
                <td className="date">
                  {formatDate(item.scheduledPublishTime)}
                </td>
                <td className="time">{formatTime(item.duration)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="pagination">
        <Pagination
          current={current}
          showSizeChanger={false}
          onChange={onPageChange}
          defaultCurrent={1}
          pageSize={100}
          total={itemData.count}
          itemRender={itemRender}
        />
      </div>
    </ProgramWrapper>
  )
}

export default memo(ProgramList)
