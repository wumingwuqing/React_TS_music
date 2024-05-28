import styled from 'styled-components'

export const DjradioWrapper = styled.div`
  > .content {
    border: 1px solid #d3d3d3;
    background-color: #fff;
    padding: 40px;
    box-sizing: border-box;
    > .list-v1 {
      margin-top: 30px;
      > .left {
        width: 426px;
        float: left;
      }
      > .right {
        width: 426px;
        float: right;
      }
      &::after {
        clear: both;
        content: '';
        display: block;
      }
    }
  }
`
