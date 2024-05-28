import styled from 'styled-components'

export const ClassifytWrapper = styled.div`
  .classify-content {
    .item {
      border-bottom: 1px solid #d3d3d3;
      margin-bottom: 20px;
      padding-bottom: 4px;
      h2 {
        padding-left: 14px;
        font-size: 16px;
        margin-bottom: 4px;
      }
      ul {
        li {
          float: left;
          width: 160px;
          height: 29px;
          line-height: 29px;
          margin-bottom: 2px;

          .selected {
            background-position: 0 0;
            text-decoration: none;
            color: #c20c0c;
          }
          a {
            float: left;
            width: 133px;
            padding-left: 27px;
            background-position: 0 -30px;
            color: #333;
            cursor: pointer;
          }
        }
        &::after {
          clear: both;
          content: '';
          display: block;
        }
      }
    }
    > :last-child {
      border-bottom: none;
    }
  }
`
