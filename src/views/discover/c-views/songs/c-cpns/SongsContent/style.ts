import styled from 'styled-components'

export const ContentWrapper = styled.div`
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
