import styled from 'styled-components'

export const RelatedWrapper = styled.div`
  .related {
    margin-top: 20px;
    padding-bottom: 25px;

    .list {
      display: flex;
      align-items: center;
      margin-bottom: 12px;
      .left {
        margin-right: 20px;
      }
      .right {
        .name {
          width: 140px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          height: 25px;
          line-height: 25px;
        }
        .creator {
          width: 140px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          height: 25px;
          line-height: 25px;
          span {
            color: #999;
          }
        }
      }
    }
  }
`
