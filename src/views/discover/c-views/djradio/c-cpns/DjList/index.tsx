import React, { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { DjListWrapper } from './style'
import { useAppDispatch, useAppSelector } from '@/store'
import { getImageSize } from '@/utils/format'
import { Pagination, PaginationProps, message } from 'antd'
import { fetchDjRadioListDataAction } from '../../store/djradio'
interface Iprops {
  children?: ReactNode
  categoryId: number
  itemCallback: (id: number, isProgram?: boolean) => void
}

const DjList: FC<Iprops> = ({ categoryId, itemCallback }) => {
  const { djRecommendByType, djRadioList } = useAppSelector((state) => ({
    djRecommendByType: state.djradio.djRecommendByType,
    djRadioList: state.djradio.djRadioList
  }))

  //分页器
  const dispatch = useAppDispatch()
  const [current, setCurrent] = useState(1)
  const onPageChange: PaginationProps['onChange'] = (current, pageSize) => {
    setCurrent(current)
    dispatch(
      fetchDjRadioListDataAction({
        cateId: categoryId,
        offset: current - 1,
        limit: 26
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
  }, [categoryId])
  return (
    <DjListWrapper>
      <div className="good-new-dj">
        <h3 className="headr">优秀新电台</h3>
        <ul className="list-content">
          {djRecommendByType.map((item, index) => {
            if (index < 5) {
              return (
                <li key={item.id} onClick={() => itemCallback(item.id)}>
                  <div className="img">
                    <img src={getImageSize(item.picUrl, 150)} alt="" />
                  </div>
                  <div className="info">
                    <h3 className="name">{item.name}</h3>
                    <p className="desc">{item.rcmdtext}</p>
                  </div>
                </li>
              )
            }
          })}
        </ul>
      </div>
      <div className="dj-ranking">
        <h3 className="headr">电台排行榜</h3>
        <ul className="ranking-content">
          {djRadioList.djRadios.map((item, index) => {
            return (
              <li key={item.id} onClick={() => itemCallback(item.id)}>
                <div className="img">
                  <img src={getImageSize(item.picUrl, 120)} alt="" />
                </div>
                <div className="info">
                  <h3>{item.name}</h3>
                  <div className="dj">
                    <span className="icon sprite_icon2"></span>
                    <span className="name">{item.dj.nickname}</span>
                  </div>
                  <div className="c-info">
                    共{item.programCount}期&nbsp;&nbsp;&nbsp;&nbsp;订阅
                    {item.subCount}次
                  </div>
                </div>
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
            pageSize={35}
            total={djRadioList.count}
            itemRender={itemRender}
          />
        </div>
      </div>
    </DjListWrapper>
  )
}

export default memo(DjList)
