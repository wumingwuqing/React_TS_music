import styled from 'styled-components'

export const InfoWrapper = styled.div`
  margin-bottom: 45px;
  .playlist-info {
    height: 50px;
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    .pic {
      height: 50px;
      width: 50px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .info {
      width: 140px;
      .name {
        height: 25px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        color: rgb(0, 0, 0);
      }
      .creator {
        height: 24px;
        color: rgb(102, 102, 102);
      }
    }
  }
`
