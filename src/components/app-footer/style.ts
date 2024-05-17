import styled from 'styled-components'

export const FooterWrapper = styled.div`
  height: 325px;
  border-top: 1px solid rgb(211, 211, 211);
  .footer {
    .top {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 980px;
      height: 71px;
      margin-top: 33px;
      .unit {
        flex: 1;
        flex-wrap: nowrap;
        text-align: center;
        width: 45px;
        margin-left: 15px;
        .icon {
          display: block;
          width: 46px;
          height: 45px;
          margin: 0 auto;
        }
        .text {
          display: inline-block;
          width: 100px;
          margin-top: 10px;
        }
        .icon_music {
          background-position: -169px -5px;
        }
        .icon_cloud {
          background-position: -5px -170px;
        }
        .icon_studio {
          background-position: -5px -60px;
        }
        .icon_AI {
          background-position: -169px -5px;
        }
        .icon_user {
          background-position: -60px -60px;
        }
        .icon_trade {
          background-position: -114px -115px;
        }
        .icon_rcd {
          background-position: -169px -60px;
        }
        .icon_pay {
          background-position: -169px -115px;
        }
        .icon_music:hover {
          background-position: -5px -115px;
        }
        .icon_cloud:hover {
          background-position: -59px -170px;
        }
        .icon_studio:hover {
          background-position: -60px -5px;
        }
        .icon_AI:hover {
          background-position: -5px -115px;
        }
        .icon_user:hover {
          background-position: -114px -5px;
        }
        .icon_trade:hover {
          background-position: -5px -5px;
        }
        .icon_rcd:hover {
          background-position: -114px -60px;
        }
        .icon_pay:hover {
          background-position: -60px -115px;
        }
      }
    }
    .bottom {
      padding-top: 60px;
      height: 100px;
      p {
        text-align: center;
        line-height: 24px;
        height: 24px;
      }
    }
  }
`
