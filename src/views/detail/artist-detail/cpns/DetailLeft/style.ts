import styled from 'styled-components'

export const LeftWrapper = styled.div`
  .header {
    h1 {
      .chinese-name {
        height: 34px;
        line-height: 24px;
        font-weight: normal;
        font-size: 24px;
        color: #333;
      }
      .english-name {
        padding-left: 10px;
        font-size: 14px;
        line-height: 32px;
        color: #999;
        font-weight: normal;
      }
    }
    .img {
      width: 638px;

      border: 1px solid #999;
      img {
        width: 100%;
      }
    }
  }
  .tags {
    height: 39px;
    border: 1px solid #ccc;
    border-width: 0 1px;
    background-position: 0 0;
    background-repeat: repeat-x;
    li {
      cursor: pointer;
      a {
        text-decoration: none;
        float: left;
        width: 138px;
        text-align: center;
        padding-left: 2px;
        height: 39px;
        span {
          width: 138px;
          display: inline-block;
          height: 39px;
          line-height: 39px;
        }
      }
      a:hover {
        border-top: 2px solid red;
        span {
          margin-top: -2px;
        }
        height: 35px;
      }
      .seleted {
        border-top: none !important;
        height: 39px !important;
        background-position: left -90px;
        span {
          margin-top: 0px !important;
          background-position: right -90px;
        }
      }
    }
    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }
`
