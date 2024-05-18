import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  .header-info {
    .avatar {
      position: relative;
      width: 200px;
      float: left;
      margin: 0 -220px 0 0;
      .msk {
        position: absolute;
        width: 208px;
        height: 208px;
        background-position: 0 -1285px;
        top: -4px;
        left: -4px;
      }
    }
    .info {
      float: right;
      width: 100%;
      .info-content {
        margin-left: 230px;
        .name {
          margin-bottom: 12px;
          i {
            width: 54px;
            height: 24px;
            background-position: 0 -243px;
            float: left;
          }
          .tit {
            margin-left: 64px;
            h2 {
              display: inline-block;
              line-height: 24px;
              font-size: 20px;
              font-weight: normal;
            }
          }
        }
        .creator {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          .creator-avatar {
            margin-right: 10px;
          }
          .nickname {
            cursor: pointer;
            font-size: 12px;
            color: rgb(12, 115, 194);
            margin-right: 25px;
            &:hover {
              text-decoration: underline;
            }
          }
          .time {
            color: rgb(153, 153, 153);
          }
        }
        .operator {
          margin-bottom: 25px;
        }
        .tags {
          margin-bottom: 5px;
          .tag {
            margin: 0px 10px 3px 0;
            display: inline-block;
            padding: 0 10px 0 0;
            text-shadow: 0 1px #fdfdfd;
            background-position: right -27px;
            height: 22px;
            line-height: 22px;
            i {
              display: inline-block;

              padding: 0 3px 0 13px;
              /* margin: 0px 10px 3px 0; */
              position: relative;
              zoom: 1;
              background-position: 0 0;
            }
          }
        }
      }
    }
  }
  ::after {
    content: '';
    clear: both;
    display: block;
  }
`
