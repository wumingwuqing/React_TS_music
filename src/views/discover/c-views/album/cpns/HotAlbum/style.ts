import styled from 'styled-components'

export const HotAlbumWrapper = styled.div`
  .header {
    height: 40px;
    font-size: 24px;
    color: #333;
    border-bottom: 2px solid #c20c0c;
  }
  .hot-album-list {
    margin: 20px 0 0 -33px;
    .hot-album-list-item {
      float: left;
      width: 153px;
      height: 178px;
      overflow: hidden;
      padding: 0 0 30px 33px;
      line-height: 1.4;
    }
    &:after {
      content: '';
      display: block;
      clear: both;
    }
  }
`
