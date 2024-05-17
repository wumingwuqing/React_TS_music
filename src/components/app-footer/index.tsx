//react
import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
//第三方库
import classNames from 'classnames'
//样式
import { FooterWrapper } from './style'

interface Iprops {
  children?: ReactNode
}

const AppFooter: FC<Iprops> = () => {
  const cssStyle = [
    { style: 'icon_music', name: '音乐开放平台' },
    { style: 'icon_cloud', name: '云村交易所' },
    { style: 'icon_studio', name: 'Amped Studio' },
    { style: 'icon_AI', name: 'X StudioAI歌手' },
    { style: 'icon_user', name: '用户认证' },
    { style: 'icon_trade', name: '音乐交易平台' },
    { style: 'icon_rcd', name: '云推歌' },
    { style: 'icon_pay', name: '赞赏' }
  ]
  return (
    <FooterWrapper>
      <div className="footer wrap-v2">
        {/* 顶部图标 */}
        <div className="top">
          {cssStyle.map((item, index) => {
            return (
              <div className="unit" key={item.style}>
                <div
                  className={classNames(item.style, 'icon foot_enter_new2')}
                ></div>
                <div className="text">{item.name}</div>
              </div>
            )
          })}
        </div>
        {/* 底部文字 */}
        <div className="bottom">
          <p>
            服务条款 | 隐私政策 | 儿童隐私政策 | 版权投诉 | 投资者关系 |
            广告合作 | 联系我们
          </p>
          <p>
            廉正举报 不良信息举报邮箱: 51jubao@service.netease.com
            客服热线：95163298
          </p>
          <p>
            互联网宗教信息服务许可证：浙（2022）0000120
            增值电信业务经营许可证：浙B2-20150198 粤B2-20090191-18
            工业和信息化部备案管理系统网站
          </p>
          <p>
            网易公司版权所有©1997-2024杭州乐读科技有限公司运营：浙网文[2021]
            1186-054号 浙公网安备 33010802013307号
          </p>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default memo(AppFooter)
