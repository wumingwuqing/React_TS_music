import styled from 'styled-components'

export const RankingCardWrapper = styled.div`
  cursor: pointer;
  .ranking-card-item {
    display: flex;
    align-items: center;
    padding: 10px 0px 10px 20px;
    .ranking-card-item-left {
      height: 40px;
      width: 40px;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .ranking-card-item-right {
      margin-left: 10px;
      font-size: 12px;
      .ranking-card-item-right-up {
        margin-bottom: 8px;
      }
      .ranking-card-item-right-down {
        color: rgb(153, 153, 153);
      }
    }
  }
  .ranking-card-item:hover {
    background-color: #f4f2f2;
  }
  .active {
    background: #e6e6e6;
  }
`
