//react
import React, { memo, useRef, useState } from 'react'
import type { FC, ReactNode, ElementRef } from 'react'

//store
import { useAppSelector } from '@/store'
import { shallowEqual } from 'react-redux'
//style
import { BannerWrapper } from './style'
import { BannerLeft } from './style'
import { BannerRight } from './style'
import { BannerControl } from './style'
//第三方库
import { Carousel } from 'antd'
import classNames from 'classnames'

interface Iprops {
  children?: ReactNode
}

const TopBanner: FC<Iprops> = () => {
  //定义内部数据
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null)
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.recommend.banners
    }),
    shallowEqual
  )
  const [isFirst, setIsFirst] = useState(true)
  //事件处理-下一个
  function handleAfterChange(current: number) {
    setCurrentIndex(current)
  }
  function handleBeforeChange(current: number) {
    //
  }
  function handleClick(isRight: boolean) {
    isRight ? carouselRef.current?.next() : carouselRef.current?.prev()
  }

  //获取图片
  let bgImageUrl
  if (currentIndex >= 0 && banners?.length > 0) {
    bgImageUrl = banners[currentIndex]?.imageUrl + '?imageView&blur=40x20'
  }
  return (
    <BannerWrapper
      style={{
        background: `url(${bgImageUrl}) center center / 6000px `
      }}
    >
      {/* 背景 */}
      <div className="banner wrap-v2">
        {/* 轮播图 */}
        <BannerLeft>
          {/* 图片 */}
          <Carousel
            autoplay
            speed={100}
            autoplaySpeed={3000}
            ref={carouselRef}
            afterChange={handleAfterChange}
            dots={false}
            beforeChange={handleBeforeChange}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
          {/* 指示条 */}
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', {
                      active: index === currentIndex
                    })}
                  ></span>
                </li>
              )
            })}
          </ul>
        </BannerLeft>
        {/* 广告图 */}
        <BannerRight></BannerRight>
        {/* 控制器 */}
        <BannerControl>
          <button
            className="btn left"
            onClick={() => handleClick(false)}
          ></button>
          <button
            className="btn right"
            onClick={() => handleClick(true)}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
}

export default memo(TopBanner)
