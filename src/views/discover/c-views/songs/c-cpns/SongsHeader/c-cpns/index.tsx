import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { TagsWrapper } from './style'
import { useAppSelector } from '@/store'

interface Iprops {
  children?: ReactNode
  tageClick: (name: string) => void
}

const Tags: FC<Iprops> = ({ tageClick }) => {
  const { tags = {}, tagslist = [] } = useAppSelector((state) => ({
    tags: state.songs.catlist.categories,
    tagslist: state.songs.catlist.sub
  }))
  //数据处理
  function renderTags() {
    const tagsListTitle: any[] = []
    for (const key in tags) {
      tagsListTitle.push({ key: key, title: tags[key] })
    }
    return tagsListTitle
  }
  function handleTagslist() {
    const tagslistResult: any = {}
    // {
    //   1:[item,item]
    //   2:[]
    //   3:[]
    // }
    for (const iterator of tagslist) {
      if (!tagslistResult[iterator.category]) {
        tagslistResult[iterator.category] = []
        tagslistResult[iterator.category].push(iterator)
      } else {
        tagslistResult[iterator.category].push(iterator)
      }
    }
    return tagslistResult
  }
  const tagslistResult = handleTagslist()
  //点击事件
  const handleClickTags = (name: string) => {
    tageClick(name)
  }
  return (
    <TagsWrapper>
      <div className="tags-header sltlyr">
        <i className="sprite_icon icon"></i>
      </div>
      <div className="tags-content sltlyr ">
        <div className="tags-item">
          <h3 onClick={() => handleClickTags('全部')}>
            <a className="btn sprite_button2">全部风格</a>
          </h3>
          <div className="tags-list">
            {renderTags().map((item, index) => {
              return (
                <dl key={item.key}>
                  <dt>
                    <button>{item.title}</button>
                  </dt>
                  <dd>
                    {tagslistResult[item.key].map((value: any) => {
                      return (
                        <span key={value.name}>
                          <a onClick={() => handleClickTags(value.name)}>
                            {value.name}
                          </a>
                          <span className="line">|</span>
                        </span>
                      )
                    })}
                  </dd>
                </dl>
              )
            })}
          </div>
        </div>
      </div>
      <div className="tags-footer sltlyr "></div>
    </TagsWrapper>
  )
}

export default memo(Tags)
