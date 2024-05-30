import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
  .image {
    position: relative;
    width: 130px;
    height: 130px;
    .img {
      width: 100%;
      height: 100%;
    }
    .cover {
      position: absolute;
      width: 153px;
      height: 130px;
      background-position: 0 -845px;
      left: 0;
      top: 0;
      .icon {
        display: block;
        background-position: 0 -140px;
        position: absolute;
        width: 28px;
        height: 28px;
        left: 94px;
        bottom: 5px;
        visibility: hidden;
        &:hover {
          background-position: 0 -170px;
        }
      }
      &:hover {
        cursor: pointer;
        .icon {
          visibility: visible;
        }
      }
    }
  }
  .info {
    .name {
      line-height: 19px;
      margin: 8px 0 3px;
      font-size: 14px;
      color: #000;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
    .artist {
      color: #666;
      &:hover {
        cursor: pointer;
        text-decoration: underline;
      }
    }
  }
`
