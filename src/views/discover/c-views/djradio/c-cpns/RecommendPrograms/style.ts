import styled from 'styled-components'

export const ProgramsWrapper = styled.div`
  .recommend-content {
    border: 1px solid #e2e2e2;
    li {
      display: flex;
      padding: 10px 0;
      align-items: center;
      .recommend-item-left {
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
      .recommend-item-center {
        width: 254px;
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
      .recommend-item-right {
        button {
          cursor: pointer;
          margin-left: 10px;
          padding-top: 3px;
          white-space: nowrap;
          color: rgb(153, 153, 153);
          border: 1px solid rgb(153, 153, 153);
          &:hover {
            color: rgb(102, 102, 102);
            border: 1px solid rgb(102, 102, 102);
          }
        }
      }
    }
  }
`
