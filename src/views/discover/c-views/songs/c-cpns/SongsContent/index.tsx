import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { ContentWrapper } from './style'
import SongsItem from '../SongsItem'
import { useAppDispatch, useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
import { Pagination, PaginationProps, message } from 'antd'
import { fetchPlaylistDataAction } from '../../store/songs'

interface Iprops {
  children?: ReactNode
  tag: string
}

const SongsContent: FC<Iprops> = ({ tag }) => {
  const { playlist } = useAppSelector((state) => {
    return {
      playlist: state.songs.playlist
    }
  }, shallowEqual)

  //分页器
  const [current, setCurrent] = useState(1)
  const dispatch = useAppDispatch()
  const onPageChange: PaginationProps['onChange'] = (current, pageSize) => {
    setCurrent(current)
    message.info(`正在加载"${tag}"标签下的第${current}页的数据`, 1)
    dispatch(
      fetchPlaylistDataAction({
        cat: playlist.cat,
        limit: pageSize,
        offset: (current - 1) * pageSize
      })
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
  //生命周期
  useEffect(() => {
    setCurrent(1)
  }, [tag])
  return (
    <ContentWrapper>
      <div className="content ">
        <div className="list">
          {playlist?.playlists?.map((item: any) => {
            return <SongsItem itemData={item} key={item.id} />
          })}
        </div>
        <div className="pagination">
          <Pagination
            current={current}
            showSizeChanger={false}
            onChange={onPageChange}
            defaultCurrent={1}
            pageSize={35}
            total={playlist.total}
            itemRender={itemRender}
          />
        </div>
      </div>
    </ContentWrapper>
  )
}

export default memo(SongsContent)
