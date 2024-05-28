import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  margin-bottom: 50px;
  .img {
    float: left;
  }
  .info {
    width: 410px;

    float: left;
    margin-left: 30px;
    .title {
      margin: 0 0 12px;
      line-height: 24px;
      font-size: 24px;
      align-items: center;
      font-weight: 700;
      display: flex;
      i {
        display: inline-block;
        width: 55px;
        height: 24px;
        background-position: 0 -1014px;
      }
      .name {
        display: inline-block;
        margin-left: 10px;
        line-height: 24px;
        font-size: 20px;
        font-weight: normal;
      }
    }
    .autor {
      height: 35px;
      margin-bottom: 20px;
      position: relative;
      span {
        display: inline-block;
        position: absolute;
        top: 50%;
        margin-left: 10px;
        transform: translateY(-50%);
        color: rgb(12, 115, 194);
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
    }
    .desc {
      .category {
        display: inline-block;
        color: #cc0000;
        border: 1px solid #cc0000;
        padding: 1px 6px 0px 6px;
        margin: 0px 10px 2px 0px;
        &:hover {
          background: #fbeeee;
          cursor: pointer;
        }
      }
      .desc-item {
        color: #777;
        line-height: 18px;
      }
    }
  }
  &::after {
    content: '';
    clear: both;
    display: block;
  }
`
