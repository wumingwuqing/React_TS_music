import styled from 'styled-components'

export const SongListWrapper = styled.div`
  margin-top: 10px;
  width: 640px;
  table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    tbody {
      tr:nth-child(2n-1) {
        background-color: #f7f7f7;
      }
      tr {
        height: 18px;
        td {
          padding: 6px 10px;
          height: 18px;
          text-align: left;
          div {
            height: 18px;
            span {
              display: inline-block;
              height: 18px;
              line-height: 18px;
            }
            .text-ellipsis {
              width: 100%;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
        .order {
          width: 74px;
          .number {
            float: left;
            margin-left: 5px;
            color: #999;
          }
          .icon {
            float: right;
            background-position: 0 -103px;
            width: 17px;
            height: 17px;
            cursor: pointer;
            &:hover {
              background-position: 0 -128px;
            }
          }
        }
        .title {
          width: 289px;
          white-space: nowrap;
          overflow: hidden;
          color: #aeaeae;
          text-overflow: ellipsis;

          .name {
            color: #333;
            &:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
        .time {
          color: #666;
          width: 69px;
          position: relative;
          cursor: default;
          .operator {
            padding: 0;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            position: absolute;
            display: none;
            align-items: center;
            justify-content: start;
            .btn {
              width: 18px;
              height: 16px;
              margin-right: 4px;
            }
            .add {
              width: 13px;
              height: 13px;
              background-position: 0 -700px;
            }
            .collect {
              background-position: -45px -85px;
              width: 18px;
              height: 16px;
            }
            .share {
              background-position: -45px -135px;
              width: 16px;
              height: 16px;
            }
            .download {
              background-position: -83px -173px;
              width: 14px;
              height: 15px;
            }
          }
        }
        .album {
          width: 128px;
          span {
            &:hover {
              text-decoration: underline;
              cursor: pointer;
            }
          }
        }
        &:hover {
          .time {
            span {
              display: none;
            }
            .operator {
              display: flex;
            }
          }
        }
      }
    }
  }
`
