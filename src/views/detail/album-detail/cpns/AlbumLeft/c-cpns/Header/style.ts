import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  margin-bottom: 27px;
  .up {
    .image {
      float: left;
      position: relative;
      width: 177px;
      height: 177px;
      padding-right: 32px;
      .img {
        width: 100%;
        height: 100%;
      }
      .cover {
        position: absolute;
        width: 209px;
        height: 177px;
        background-position: 0 -986px;
        left: 0;
        top: 0;
      }
    }
    .info {
      float: left;
      margin-left: 20px;
      .title {
        display: flex;
        align-items: center;
        margin-bottom: 14px;
        .icon {
          width: 54px;
          height: 24px;
          background-position: 0 -186px;
          display: inline-block;
        }
        .name {
          margin-left: 10px;
          display: inline-block;
          height: 24px;
          line-height: 24px;
          font-size: 20px;
          font-weight: normal;
          color: #333;
        }
      }
      .artist {
        margin: 14px 0;
        p {
          margin: 8px 0;
          color: rgb(102, 102, 102);
          .name {
            color: rgb(12, 115, 194);
            &:hover {
              cursor: pointer;
              text-decoration: underline;
            }
          }
        }
      }
      .operator {
        margin-top: 22px;
      }
    }
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }
  .down {
    margin-top: 21px;
    .title {
      margin-bottom: 10px;
    }
    p {
      color: #666;
      text-indent: 2em;
      line-height: 24px;
      margin-top: 4px;
    }
  }
`
