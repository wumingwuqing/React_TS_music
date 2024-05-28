import styled from 'styled-components'

export const ProgramWrapper = styled.div`
  .header {
    display: flex;
    border-bottom: 2px solid #c20c0c;
    h2 {
      font-size: 20px;
      line-height: 28px;
      font-weight: normal;
    }
    div {
      margin-left: 20px;
      color: #999;
      margin-top: 10px;
    }
  }
  .content {
    border: 1px solid #d9d9d9;
    border-collapse: collapse;
    tbody {
      tr:nth-child(odd) {
        background-color: #f7f7f7;
      }
      tr {
        td {
          line-height: 18px;
          text-align: left;
          padding: 0 10px;
          height: 55px;
        }
        .order {
          width: 62px;

          line-height: 18px;
          color: #999;
          .icon {
            display: inline-block;
            float: right;
            width: 17px;
            height: 17px;
            cursor: pointer;
            background-position: 0 -103px;
            &:hover {
              background-position: 0 -128px;
            }
          }
        }
        .name {
          position: relative;
          width: 230px;
          padding-left: 0px;
          .text {
            width: 230px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
          .operator {
            padding: 0;
            top: 50%;
            right: 0;
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
        .play {
          width: 60px;
        }
        .like {
          width: 70px;
        }
        .date {
          color: #999;
          width: 66px;
        }
        .time {
          color: #999;
          width: 40px;
        }
        &:hover {
          .name {
            .text {
              width: 160px;
            }
          }
          .operator {
            display: flex;
          }
        }
      }
    }
  }
  .pagination {
    display: flex;
    justify-content: center;
    margin: 40px;
    .ant-pagination {
      .ant-pagination-prev {
        button {
          display: inline-block;
          border: 1px solid #ccc;
          padding-left: 22px;
          border-radius: 2px;
          vertical-align: middle;
          background-position: 0 -620px;
          cursor: default;
          width: 71px !important;
          height: 26px;
          line-height: 24px;
        }
      }
      .ant-pagination-item-active {
        border-color: red;
        background-color: red;
        a {
          color: #fff;
        }
      }
      .ant-pagination-item {
        display: inline-block;
        height: 24px;
        width: 24px !important;
        border: 1px solid #ccc;
        border-radius: 0px;
        margin-top: 4px;
        a {
          height: 24px;
          line-height: 24px;
          padding: 0px;
        }
        &:hover {
          border-color: #000;
        }
      }
      .ant-pagination-next {
        button {
          display: inline-block;
          border: 1px solid #ccc;
          padding-right: 22px;
          border-radius: 2px;
          vertical-align: middle;
          background-position: -75px -560px;
          cursor: default;
          width: 71px !important;
          height: 26px;
          line-height: 24px;
        }
      }
    }
  }
`
