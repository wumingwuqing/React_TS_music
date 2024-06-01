import styled from 'styled-components'

export const DetailHeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 50px;
  .detail-left {
    position: relative;
    height: 150px;
    width: 150px;
    border: 1px solid rgb(204, 204, 204);
    padding: 3px;
    img {
      width: 100%;
      height: 100%;
      background-color: pink;
    }
    .cover {
      position: absolute;
      width: 150px;
      height: 150px;
      background-position: -230px -380px;
      top: 3px;
      left: 3px;
    }
  }
  .detail-right {
    margin-left: 30px;
    .detail-info {
      padding: 20px 0px 40px 0px;
      .detail-name {
        font-size: 24px;
        font-weight: normal;
      }
    }
    .detail-operator {
      display: flex;
      i {
        display: inline-block;
        width: 28px;
      }
      .btn {
        box-sizing: border-box;
        width: 59px;
        height: 31px;
        line-height: 30px;
        border: #999 solid 1px;
        border-radius: 5px;
        margin-right: 6px;
        color: rgb(51, 51, 51);
        font-size: 12px;
        padding-left: 28px;
      }
      .play {
        width: 61px;
        height: 31px;
        border-radius: 5px 0 0 5px;
        background-position: -6px -634px;
        color: white;
      }
      .add {
        width: 31px;
        height: 31px;
        margin-left: -6px;
        border-radius: 0px 5px 5px 0;
        background-position: -2px -1589px;
      }
      .favor {
        background-position: 0 -977px;
      }
      .share {
        background-position: 0 -1225px;
      }
      .download {
        background-position: 0 -2761px;
      }
      .comment {
        background-position: 0 -1465px;
      }
    }
  }
`
