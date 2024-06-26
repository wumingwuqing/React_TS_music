import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { MVListWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { formatDate, getImageSize } from '@/utils/format'
import { Pagination, PaginationProps, message } from 'antd'
import { fetchArtistsMVDataAction } from '../../../store/artist-detail'

interface Iprops {
  children?: ReactNode
  totalCount: number
  id: number
}

const SongList: FC<Iprops> = ({ totalCount, id }) => {
  const artistMV = useAppSelector((state) => state.artistDetail.artistMV)

  //分页器
  const [current, setCurrent] = useState(1)
  const dispatch = useAppDispatch()
  const onPageChange: PaginationProps['onChange'] = (current, pageSize) => {
    setCurrent(current)
    message.info(`正在请求新数据`)
    dispatch(
      fetchArtistsMVDataAction({ id, offset: current - 1, limit: pageSize })
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
    <MVListWrapper>
      <ul className="content-list">
        {artistMV?.map((item) => {
          return (
            <li key={item.id}>
              <div className="image">
                <img src={getImageSize(item.imgurl16v9, 137, 103)} alt="" />
                <span className="cover sprite_cover">
                  <i className="icon sprite_icon"></i>
                </span>
              </div>
              <div className="name">{item.name}</div>
            </li>
          )
        })}
      </ul>
      <div className="pagination">
        <Pagination
          current={current}
          showSizeChanger={false}
          onChange={onPageChange}
          defaultCurrent={1}
          pageSize={12}
          total={totalCount}
          itemRender={itemRender}
        />
      </div>
    </MVListWrapper>
  )
}

export default memo(SongList)
