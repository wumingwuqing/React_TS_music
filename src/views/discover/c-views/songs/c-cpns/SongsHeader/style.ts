import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: relative;
  .content {
    padding-bottom: 10px;
    border-bottom: 2px rgb(194, 12, 12) solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      display: flex;
      align-items: center;
      h1 {
        display: inline-block;
        color: rgb(51, 51, 51);
        font-size: 24px;
        font-weight: 400;
      }
      button {
        display: inline-block;
        margin-left: 10px;
        height: 100%;
        background-position: right -99px;
        height: 31px;
        line-height: 31px;
        cursor: pointer;
        i {
          background-position: 0 -59px;
          display: inline-block;
          height: 31px;
          line-height: 31px;
          text-align: center;
          overflow: hidden;
          font-style: normal;
          color: #0c73c2 !important;
          padding: 0 10px 0 15px;
          .arrow-down {
            width: 8px;
            height: 5px;
            background-position: -70px -543px;
            padding: 0;
            margin-left: 6px;
          }
        }
      }
    }
    .right {
      div {
        display: block;
        width: 46px;
        height: 29px;
        line-height: 29px;
        background-position: 0 0;
        text-align: center;
        span {
          color: #fff;
        }
      }
    }
  }
`
