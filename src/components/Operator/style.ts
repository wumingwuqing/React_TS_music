import styled from 'styled-components'

export const OperatorWrapper = styled.div`
  display: flex;
  i {
    display: inline-block;
    width: 28px;
  }
  .btn {
    box-sizing: border-box;
    height: 31px;
    line-height: 30px;
    border: #999 solid 1px;
    border-radius: 5px;
    margin-right: 6px;
    color: rgb(51, 51, 51);
    font-size: 12px;
    padding-left: 28px;
    white-space: nowrap;
    cursor: pointer;
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
    padding-right: 7px;
  }
  .share {
    background-position: 0 -1225px;
    padding-right: 7px;
  }
  .download {
    background-position: 0 -2761px;
    padding-right: 7px;
  }
  .comment {
    background-position: 0 -1465px;
    padding-right: 7px;
  }
`
