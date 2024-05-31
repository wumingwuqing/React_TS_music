import styled from 'styled-components'

export const PlayListWrapper = styled.div`
  .play-list-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: 2px red solid;
    h3 {
      font-size: 20px;
      line-height: 28px;
      font-weight: normal;
    }
  }
  .play-list-content {
    table {
      box-sizing: border-box;
      /* width: 100%; */
      border-collapse: collapse;
      border: 1px solid #d9d9d9;

      text-align: left;
      thead {
        height: 36px;
        tr {
          th {
            background-position: 0 0;
            background-repeat: repeat-x;
          }
          .wp {
            padding: 8px 10px;
            background-position: 0 -56px;
          }
          .order {
            width: 77.5px;
          }
          .title {
            width: 326px;
          }
          .time {
            width: 91px;
          }
          .artist {
            width: 174px;
          }
        }
      }
      tbody {
        tr:nth-child(odd) {
          background-color: #f7f7f7;
        }
        tr {
          box-sizing: border-box;
          height: 18px;
          td {
            padding: 8px 10px;
            padding-right: 20px;
          }
          .order {
            text-align: center;
            .letter {
              display: inline-block;
              width: 16px;
              height: 17px;
              margin-left: 10px;
              margin-right: -20px;
              margin-bottom: -5px;
              background-position: -67px -283px;
            }
          }
          .title {
            width: 286px;
            white-space: nowrap;
            .name {
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 286px;
              display: inline-block;
              display: flex;
              align-items: center;
              justify-content: left;
              .pic {
                display: inline-block;
                height: 50px;
                width: 50px;
                margin-right: 10px;
                cursor: pointer;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .icon {
                cursor: pointer;
                display: inline-block;
                width: 17px;
                height: 17px;
                background-position: 0 -103px;
                margin-right: 5px;
                &:hover {
                  background-position: 0 -128px;
                }
              }
              .text {
                margin-top: 3px;
                cursor: pointer;
              }
              .alia {
                color: #aeaeae;
                margin-top: 3px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
              }
            }
          }
          .time {
            width: 71px;
            position: relative;
            padding: 6px 10px;
            .time-text {
              padding: 0;
              width: 71px;
            }
            .operator {
              padding: 0;
              top: 50%;
              transform: translateY(-50%);
              position: absolute;
              display: flex;
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
          &:hover {
            .time-text {
              display: none;
            }
            .operator {
              display: flex;
            }
          }
          .artist {
            width: 153px;
            padding: 6px 10px;
            .name {
              width: 154px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              > span:hover {
                cursor: pointer;
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
  }
`
