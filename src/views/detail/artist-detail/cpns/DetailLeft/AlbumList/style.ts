import styled from 'styled-components'

export const AlbumListWrapper = styled.div`
  > ul {
    font-size: 12px;
    color: #333;
    margin: 20px 0 0 -18px;
    li {
      float: left;
      width: 145px;
      height: 175px;
      padding: 0 0 30px 18px;
      .image {
        position: relative;
        width: 120px;
        height: 120px;
        .img {
          width: 100%;
          height: 100%;
        }
        .cover {
          position: absolute;
          width: 145px;
          height: 120px;
          background-position: -170px -850px;
          left: 0;
          top: 0;
          .icon {
            display: block;
            background-position: 0 -140px;
            position: absolute;
            width: 28px;
            height: 28px;
            left: 85px;
            right: 10px;
            bottom: 5px;
            visibility: hidden;
            &:hover {
              background-position: 0 -170px;
            }
          }
          &:hover {
            cursor: pointer;
            .icon {
              visibility: visible;
            }
          }
        }
      }
      .info {
        .name {
          line-height: 19px;
          margin: 8px 0 3px;
          font-size: 14px;
          color: #000;
          &:hover {
            cursor: pointer;
            text-decoration: underline;
          }
        }
        .time {
          line-height: 1.4;
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
