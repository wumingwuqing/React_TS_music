import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { RankingWrapper } from './style'
import AreaHeaderV3 from '@/components/area-header-v3'
import { useAppDispatch, useAppSelector } from '@/store'
import { formatCountV1, getImageSize } from '@/utils/format'
import classNames from 'classnames'
import { fetchCurrentSongAction } from '@/views/player/store/player'

interface Iprops {
  children?: ReactNode
  itemCallback: (rid: number, isProgram?: boolean) => void
}

const ProgramsRanking: FC<Iprops> = ({ itemCallback }) => {
  const djRanking = useAppSelector((state) => state.djradio.djRanking)

  function rankingChange(lastRank: number, rank: number) {
    return Math.abs(lastRank - rank)
  }
  const score = djRanking[0].score

  const dispatch = useAppDispatch()
  function handlePlayClick(id: number) {
    dispatch(fetchCurrentSongAction(id))
  }
  return (
    <RankingWrapper>
      <AreaHeaderV3
        title="节目排行榜"
        moreText="更多&nbsp;&gt;"
        moreLink="discover/djradio#/discover/djradio"
      />
      <ul className="programs-content">
        {djRanking.map((item, index) => {
          return (
            <li
              key={item.program.id}
              onClick={() => itemCallback(item.program.id, true)}
            >
              <div className="order">
                <div
                  className="index"
                  style={{ color: index < 3 ? '#da4545' : '' }}
                >
                  {formatCountV1(index + 1)}
                </div>
                <div className="change">
                  <i
                    className={classNames('sprite_icon2', {
                      'change-up': item.lastRank > item.rank,
                      'change-down': item.lastRank < item.rank,
                      'change-zero': item.lastRank === item.rank
                    })}
                  ></i>
                  <span
                    className={classNames({
                      'change-up': item.lastRank > item.rank,
                      'change-down': item.lastRank < item.rank
                    })}
                  >
                    {rankingChange(item.lastRank, item.rank)}
                  </span>
                </div>
              </div>
              <div className="programs-item-left">
                <img src={getImageSize(item.program.coverUrl, 40)} alt="" />
                <div
                  className="sprite_icon cover"
                  onClick={() => handlePlayClick(item.program.id)}
                ></div>
              </div>
              <div
                className="programs-item-center"
                onClick={() => handlePlayClick(item.program.id)}
              >
                <div className="center-up">
                  <span>{item.program.name}</span>
                </div>
                <div className="center-down">
                  <span>{item.program.radio.name}</span>
                </div>
              </div>
              <div className="programs-item-right">
                <div className="bg sprite_table">
                  <div
                    className="fg_head sprite_table"
                    style={{ width: (item.score / score) * 100 + '%' }}
                  >
                    <div className="fg_body sprite_table"></div>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </RankingWrapper>
  )
}

export default memo(ProgramsRanking)
