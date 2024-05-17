import styled from 'styled-components'

export const SongWrapper = styled.div`
  .song-info {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .txt {
      width: 156px;
      text-overflow: ellipsis;
      overflow: hidden;
      .artists {
        margin-top: 2px;
        color: rgb(153, 153, 153);
        cursor: pointer;
      }
    }
    .opt {
      width: 36px;
      .play {
        display: inline-block;
        background-position: -69px -455px;
        width: 7px;
        height: 11px;
        cursor: pointer;
        margin-right: 16px;
      }
      .add {
        cursor: pointer;
        display: inline-block;
        background-position: -87px -455px;
        width: 10px;
        height: 10px;
      }
    }
  }
`
