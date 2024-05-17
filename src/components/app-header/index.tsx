//react
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
//router
import { NavLink } from 'react-router-dom'
//style
import { HeaderWrapper } from './style'
import { HeaderLeft } from './style'
import { HeaderRight } from './style'
//antdesign
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

//数据
import headerTitles from './header_titles.json'

interface Iprops {
  children?: ReactNode
}

const AppHeader: FC<Iprops> = () => {
  //根据配置信息中item不同的类型渲染不同的组件
  function showItem(item: any) {
    if (item.type === 'route') {
      return (
        <NavLink to={item.link}>
          {item.title} <i className="icon sprite_01"></i>
        </NavLink>
      )
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          {/* 网站logo */}
          <a href="/" className="logo sprite_01">
            网易云音乐
          </a>
          {/* 路由标签 */}
          <div className="title-list">
            {headerTitles.map((item) => {
              return (
                <div className="item" key={item.title}>
                  {showItem(item)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <a className="center">创作者中心</a>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
