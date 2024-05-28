import styled from 'styled-components'

export const RankingWrapper = styled.div`
  .programs-content {
    border: 1px solid #e2e2e2;
    li {
      display: flex;
      padding: 10px 0;
      align-items: center;
      .order {
        width: 47px;
        margin: 6px 0 0 0;
        text-align: center;
        line-height: normal;
        margin-right: -20px;
        .index {
          color: #999;
          width: 100%;
          text-align: center;
          font-size: 14px;
        }
        .change {
          line-height: normal;
          font-size: 10px;
        }
        .change-up {
          display: inline-block;

          width: 6px;
          height: 6px;
          color: #ba2226;
          margin: -1px 2px 0 0;
          background-position: -74px -304px;
        }
        .change-zero {
          display: inline-block;
          width: 6px;
          height: 6px;
          margin: -1px 2px 0 0;
          color: #999;
          background-position: -74px -274px;
        }
        .change-down {
          display: inline-block;
          color: #4abbeb;
          background-position: -74px -324px;
          width: 6px;
          height: 6px;
          margin: -1px 2px 0 0;
        }
      }
      .programs-item-left {
        position: relative;
        margin-left: 20px;
        width: 40px;
        height: 40px;
        cursor: pointer;
        .cover {
          position: absolute;
          opacity: 0;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-position: 0 -85px;
          width: 22px;
          height: 22px;
        }
      }
      &:hover {
        .cover {
          opacity: 1;
        }
        background: #eee;
      }
      .programs-item-center {
        width: 208px;
        margin: 1px 0 0 10px;
        .center-up,
        .center-down {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          height: 20px;
          line-height: 20px;
          span {
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
          }
        }
        .center-down {
          color: rgb(153, 153, 153);
        }
      }
      .programs-item-right {
        height: 8px;
        .bg {
          margin-right: 20px;
          height: 8px;
          position: relative;
          width: 100px;
          background-position: 0 -240px;
          line-height: normal;
          .fg_head {
            height: 8px;
            background-position: right -318px;
            padding-right: 3px;
            .fg_body {
              margin-left: -4px;
              padding: 0 0 0 4px;
              background-position: 0 -304px;
              overflow: hidden;
              height: 8px;
            }
          }
        }
      }
    }
  }
`
