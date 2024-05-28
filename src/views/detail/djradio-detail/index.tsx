import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { DjradioDetailWrapper } from './style'
import { useAppSelector } from '@/store'
import DetailHeader from './cpns/DetailHeader'
import ProgramList from './cpns/ProgramList'

interface Iprops {
  children?: ReactNode
}

const DjradioDetail: FC<Iprops> = () => {
  const { radioDetail, radioProgram } = useAppSelector((state) => ({
    radioDetail: state.radioDetail.radioDetail,
    radioProgram: state.radioDetail.radioProgram
  }))
  return (
    <DjradioDetailWrapper>
      <div className="content wrap-v2">
        <div className="left">
          <DetailHeader itemData={radioDetail} />
          <ProgramList itemData={radioProgram} rid={radioDetail.id} />
        </div>
        <div className="right"></div>
      </div>
    </DjradioDetailWrapper>
  )
}

export default memo(DjradioDetail)
