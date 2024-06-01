import styled from 'styled-components'

export const ItemWrapper = styled.div`
  margin-left: 20px;
  a {
    color: #0c73c2;
    &:hover {
      text-decoration: underline;
    }
  }
  .song {
    display: flex;
    align-items: center;
    i {
      display: inline-block;
      background-position: 0 -463px;
      width: 54px;
      height: 24px;
    }
    .title {
      font-size: 24px;
      margin-left: 10px;
    }
  }
  .singer,
  .album {
    margin: 10px 0;
    color: #999;
  }
  .operator {
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
`
