import styled from 'styled-components'

export const ArtistWrapper = styled.div`
  .content {
    background-image: url(${require('@/assets/img/wrap2.png')});
    border: 1px solid #d3d3d3;

    .content-left {
      box-sizing: border-box;
      float: left;
      width: 180px;
      padding: 51px 10px 40px 10px;
    }
    .content-right {
      box-sizing: border-box;
      float: right;
      padding: 40px;
      width: 799px;
    }
    &:after {
      content: '';
      clear: both;
      display: block;
    }
  }
`
