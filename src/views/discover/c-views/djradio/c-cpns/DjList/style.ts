import styled from 'styled-components'

export const DjListWrapper = styled.div`
  margin-top: 25px;
  .headr {
    font-size: 24px;
    font-weight: normal;
    color: #333;
    height: 40px;
    border-bottom: 2px solid #c20c0c;
  }
  .good-new-dj {
    .list-content {
      margin-top: 18px;
      margin-left: -37px;
      li {
        float: left;
        width: 150px;
        margin-left: 37px;
        width: 150px;
        cursor: pointer;
        .img {
          margin-bottom: 20px;
        }
        .info {
          h3 {
            margin: 13px 0 6px;
            line-height: 16px;
            font-size: 14px;
            font-weight: normal;
            &:hover {
              text-decoration: underline;
            }
          }
          p {
            line-height: 18px;
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
      &::after {
        content: '';
        clear: both;
        display: block;
      }
    }
  }
  .dj-ranking {
    margin-top: 35px;
    .ranking-content {
      margin-left: -30px;

      li {
        cursor: pointer;
        float: left;
        margin-left: 30px;
        padding: 20px 0;
        width: 46%;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #e7e7e7;
        .info {
          margin-left: 20px;
          height: 120px;
          h3 {
            color: #333;
            height: 64px;
            margin: 0;
            line-height: 64px;
            font-size: 18px;
            &:hover {
              text-decoration: underline;
            }
          }
          .dj {
            line-height: 20px;
            margin-bottom: 6px;
            position: relative;
            .icon {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              display: inline-block;
              background-position: -50px -300px;
              width: 14px;
              height: 15px;
            }
            .name {
              display: inline-block;
              margin-left: 20px;
              vertical-align: middle;
              &:hover {
                text-decoration: underline;
              }
            }
          }
          .c-info {
            color: #999;
          }
        }
      }
      &::after {
        content: '';
        clear: both;
        display: block;
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
  }
`
