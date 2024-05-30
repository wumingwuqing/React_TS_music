import styled from 'styled-components'

export const MVListWrapper = styled.div`
  .content-list {
    margin: 20px 0 0 -29px;
    li {
      float: left;
      overflow: hidden;
      padding: 0 0 30px 50px;
      line-height: 1.4;
      width: 137px;
      height: 140px;
      padding-left: 29px;
      .image {
        width: 137px;
        height: 103px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .cover {
          position: absolute;
          background-position: 0 -1170px;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          cursor: pointer;
          .icon {
            position: absolute;
            right: 10px;
            bottom: 5px;
            width: 44px;
            height: 44px;
            top: 50%;
            left: 50%;
            margin: -22px 0 0 -22px;
            background-position: -30px -135px;
            &:hover {
              background-position: -30px -85px;
            }
          }
        }
      }
      .name {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 8px 0 3px;
        font-size: 14px;
        &:hover {
          cursor: pointer;
          text-decoration: underline;
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
    margin-top: 0px;
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
