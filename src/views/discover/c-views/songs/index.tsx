import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { useAppDispatch, useAppSelector } from '@/store'
import { fetchCatlistDataAction, fetchPlaylistDataAction } from './store/songs'
import SongsContent from './c-cpns/SongsContent'
import { SongsWrapper } from './style'
import SongsHeader from './c-cpns/SongsHeader'
import { message } from 'antd'
interface Iprops {
  children?: ReactNode
}

const Songs: FC<Iprops> = () => {
  const [tag, setTag] = useState<string>('全部')
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCatlistDataAction())
    dispatch(
      fetchPlaylistDataAction({
        cat: '全部',
        limit: 35,
        offset: 0
      })
    )
  }, [])
  //重新请求数据
  function headerClick(name: string) {
    setTag(name)
    dispatch(
      fetchPlaylistDataAction({
        cat: name,
        limit: 35,
        offset: 0
      })
    )
    message.info('正在请求数据...', 1)
  }
  return (
    <SongsWrapper>
      <div className="content wrap-v2">
        <SongsHeader headerClick={headerClick} />
        <SongsContent tag={tag} />
      </div>
    </SongsWrapper>
  )
}

export default memo(Songs)
