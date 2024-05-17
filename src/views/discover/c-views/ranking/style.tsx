import styled from 'styled-components'

export const RankingWrapper = styled.div`
  .ranking-content {
    display: flex;
    background-image: url(${require('@/assets/img/wrap3.png')});
    .ranking-left {
      width: 240px;
      margin-top: 20px;
    }
    .ranking-right {
      padding: 30px;
      width: 670px;
    }
  }
`
