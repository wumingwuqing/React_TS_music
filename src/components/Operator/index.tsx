import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { OperatorWrapper } from './style'
import { formatCount } from '@/utils/format'

interface Iprops {
  children?: ReactNode
  playClick?: () => void
  addClick?: () => void
  favorClick?: () => void
  shareClick?: () => void
  downloadClick?: () => void
  commentClick?: () => void
  operatorData?: {
    commentCount: number
    shareCount: number
    subscribedCount: number
  }
}

const Operator: FC<Iprops> = ({
  playClick,
  favorClick,
  addClick,
  shareClick,
  downloadClick,
  commentClick,
  operatorData
}) => {
  function handlePlayClick() {
    if (playClick) playClick()
    console.log('播放')
  }
  function handleAddClick() {
    if (addClick) addClick()
    console.log('添加')
  }
  function handleFavorClick() {
    if (favorClick) favorClick()
    console.log('收藏')
  }
  function handleShareClick() {
    if (shareClick) shareClick()
    console.log('分享')
  }
  function handleDownloadClick() {
    if (downloadClick) downloadClick()
    console.log('下载')
  }
  function handleCommentClick() {
    if (commentClick) commentClick()
    console.log('评论')
  }
  return (
    <OperatorWrapper>
      <div className="sprite_button btn play" onClick={handlePlayClick}>
        <span>播放</span>
      </div>
      <div className="sprite_button btn add" onClick={handleAddClick}></div>
      <div className="sprite_button btn favor" onClick={handleFavorClick}>
        <span>
          (
          {operatorData?.subscribedCount
            ? formatCount(operatorData?.subscribedCount)
            : '收藏'}
          )
        </span>
      </div>
      <div className="sprite_button btn share" onClick={handleShareClick}>
        <span>
          (
          {operatorData?.shareCount
            ? formatCount(operatorData?.shareCount)
            : '分享'}
          )
        </span>
      </div>
      <div className="sprite_button btn download" onClick={handleDownloadClick}>
        <span>下载</span>
      </div>
      <div className="sprite_button btn comment" onClick={handleCommentClick}>
        <span>
          (
          {operatorData?.commentCount
            ? formatCount(operatorData?.commentCount)
            : '评论'}
          )
        </span>
      </div>
    </OperatorWrapper>
  )
}

export default memo(Operator)
