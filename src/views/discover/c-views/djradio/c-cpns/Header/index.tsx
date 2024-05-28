import React, { memo, useRef, useState } from 'react'
import type { ElementRef, FC, ReactNode } from 'react'

import { useAppSelector } from '@/store'
import { Carousel } from 'antd'

import classNames from 'classnames'
import { HeaderWrapper } from './style'

interface Iprops {
  children?: ReactNode
  headerCallback: (categoryId: number) => void
}

const DjradioHeader: FC<Iprops> = ({ headerCallback }) => {
  //选中
  const [activeItemID, setActiveItemID] = useState<number>(-100)
  //轮播数据
  const djCatelist = useAppSelector((state) => state.djradio.djCatelist)
  type IParams = typeof djCatelist
  function handleDjCatelist(djCatelist: IParams, pagesize = 18) {
    const result = []
    // [
    //   [{},{},{}...]
    //   [{},{},{}...]
    // ]
    for (let index = 0; index * pagesize < djCatelist.length; index++) {
      const start = index * pagesize
      const end = start + pagesize
      result.push(djCatelist.slice(start, end))
    }
    return result
  }
  const newDjCatelist = handleDjCatelist(djCatelist)
  //点击事件
  function handleItemClick(id: number) {
    setActiveItemID(id)
    headerCallback(id)
  }
  //轮播操作
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  function handleClick(isRight: boolean) {
    isRight ? carouselRef.current?.next() : carouselRef.current?.prev()
  }
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }

  return (
    <HeaderWrapper>
      <div className="header-content">
        {/* 轮播 */}
        <Carousel
          speed={1}
          infinite={false}
          fade={false}
          dots={false}
          afterChange={handleAfterChange}
          ref={carouselRef}
        >
          <ul>
            {newDjCatelist[0].map((item, index) => {
              return (
                <li
                  className={classNames('item', {
                    active: item.id === activeItemID
                  })}
                  key={item.id}
                >
                  <button
                    className="item-content"
                    onClick={(e) => handleItemClick(item.id)}
                  >
                    <div
                      className="icon"
                      style={{ backgroundImage: `url(${item.picWebUrl})` }}
                    ></div>
                    <span className="name">{item.name}</span>
                  </button>
                </li>
              )
            })}
          </ul>
          <ul>
            {newDjCatelist[1].map((item, index) => {
              return (
                <li className="item" key={item.id}>
                  <button
                    className="item-content"
                    onClick={(e) => handleItemClick(item.id)}
                  >
                    <div
                      className="icon"
                      style={{ backgroundImage: `url(${item.picWebUrl})` }}
                    ></div>
                    <span className="name">{item.name}</span>
                  </button>
                </li>
              )
            })}
          </ul>
        </Carousel>
        {/* 指示条 */}
        <div className="dots">
          {newDjCatelist.map((item, index) => {
            return (
              <span
                key={index}
                className={classNames('item', {
                  active: index === currentIndex
                })}
                onClick={() => carouselRef.current?.goTo(index)}
              ></span>
            )
          })}
        </div>
        {/* 控制按钮 */}
        <div className="control">
          <button
            className="btn left"
            onClick={() => handleClick(false)}
          ></button>
          <button
            className="btn right"
            onClick={() => handleClick(true)}
          ></button>
        </div>
      </div>
    </HeaderWrapper>
  )
}

export default memo(DjradioHeader)
