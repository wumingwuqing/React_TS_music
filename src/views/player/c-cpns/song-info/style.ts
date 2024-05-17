import styled from 'styled-components'

export const InfoWrapper = styled.div`
  padding: 47px 30px 40px 39px;

  .top {
    display: flex;
    flex-wrap: nowrap;
    .top-left {
      width: 206px;
      height: 234px;
      position: relative;
      .top-img {
        width: 198px;
        height: 198px;
        img {
          width: 130px;
          height: 130px;
          margin: 34px;
        }
        .top-img-mask {
          position: absolute;
          top: 0px;
          background-position: -144px -583px;
          width: 206px;
          height: 205px;
        }
      }

      .top-text {
        height: 16px;
        margin-top: 20px;
        margin-left: 46px;
        i {
          display: inline-block;
          background-position: -35px -860px;
          width: 16px;
          height: 16px;
        }
        a {
          color: rgb(12, 115, 194);
          text-decoration: underline;
        }
      }
    }
    .top-right {
      .top-right-bottom {
        margin-left: 20px;
        margin-top: 40px;
        .lyric {
          margin: 10px 0px;
        }
        .top-right-bottom-button {
          cursor: pointer;
          margin-top: 5px;
          color: rgb(12, 115, 194);
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }

  .bottom {
    margin-top: 48px;
    text-align: right;
    .bottom-top,
    .bottom-bottom {
      height: 30px;
      line-height: 30px;
    }
    a {
      color: rgb(153, 153, 153);
      text-decoration: underline;
      &:hover {
        color: rgb(0, 0, 0);
      }
    }
  }
`
