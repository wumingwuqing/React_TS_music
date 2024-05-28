import styled from 'styled-components'

export const ListWrapper = styled.div`
  .list-content {
    .header {
      height: 40px;
      border-bottom: 2px solid #c20c0c;
      h2 {
        font-size: 24px;
        font-weight: normal;
      }
    }
    .conent-area {
      margin-top: 20px;
      margin-left: -17px;
      li {
        float: left;
        padding-left: 17px;
        padding-bottom: 30px;
        .avatar {
          width: 130px;
          height: 130px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          .msk {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-position: 0 -680px;
          }
        }
        .name {
          p {
            margin-top: 8px;
          }
        }
      }
    }
  }
`
