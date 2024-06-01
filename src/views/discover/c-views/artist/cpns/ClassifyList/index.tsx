import React, { memo, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { ClassifytWrapper } from './style'
import classNames from 'classnames'
import { useAppSelector } from '@/store'
import { message } from 'antd'

interface Iprops {
  children?: ReactNode
  callback: (cat: number, name: string, area: number, type: number) => void
}

const ClassifyList: FC<Iprops> = ({ callback }) => {
  const categories = useAppSelector((state) => state.artist.categories)
  const [currentSelected, setCurrentSelected] = useState(5000)
  //点击切换选中的标签
  function handleClick(cat: number, name: string, area: number, type: number) {
    setCurrentSelected(cat)
    //父组件回调获取当前选中
    callback(cat, name, area, type)
    //假的提示
    message.info('正在切换...', 2)
  }

  return (
    <ClassifytWrapper>
      <div className="classify-content ">
        {categories.map((item: any) => {
          return (
            <div className="item" key={item.title}>
              <h2>{item.title}</h2>
              {
                <ul>
                  {item.artists.map((artist: any) => {
                    return (
                      <li
                        key={artist.cat}
                        onClick={(e) => {
                          handleClick(
                            artist.cat,
                            artist.name,
                            item.area,
                            artist.type
                          )
                        }}
                      >
                        <a
                          className={classNames('recommend-artist singer ', {
                            selected: currentSelected === artist.cat
                          })}
                        >
                          {artist.name}
                        </a>
                      </li>
                    )
                  })}
                </ul>
              }
            </div>
          )
        })}
      </div>
    </ClassifytWrapper>
  )
}

export default memo(ClassifyList)
