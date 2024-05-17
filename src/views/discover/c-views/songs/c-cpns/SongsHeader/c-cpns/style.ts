import styled from 'styled-components'

export const TagsWrapper = styled.div`
  position: absolute;
  width: 720px;
  height: 437px;
  border-bottom: none;
  top: 35px;
  left: -35px;
  .tags-header {
    height: 32px;
    .icon {
      position: absolute;
      top: 2px;
      left: 132px;
      display: inline-block;
      width: 24px;
      height: 11px;
      background-position: -48px 0;
      vertical-align: middle;
    }
  }
  .tags-content {
    width: 700px;
    padding: 0 10px;
    background-position: -720px 0;
    background-repeat: repeat-y;
    height: 385px;
    .tags-item {
      h3 {
        height: 37px;
        padding-left: 26px;
        border-bottom: 1px solid #e6e6e6;
        font-weight: normal;
        .btn {
          display: inline-block;
          width: 75px;
          height: 26px;
          background-position: 0 -64px;
          text-align: center;
          line-height: 26px;
          cursor: pointer;
          color: #333;
          font-weight: 400;
        }
      }
      .tags-list {
        dl {
          &::after {
            content: '';
            display: block;
            clear: both;
          }
          dt {
            float: left;
            display: inline;
            width: 70px;
            margin: 0 -100px 0 26px;
            padding-top: 15px;
            border-right: 1px solid #e6e6e6;
            font-weight: bold;
          }
          dd {
            margin-left: 96px;
            padding: 16px 15px 0 15px;
            border-left: 1px solid #e6e6e6;
            line-height: 24px;
            display: block;
            a {
              display: inline-block;
              white-space: nowrap;
              cursor: pointer;
            }
            .line {
              margin: 0 8px 0 10px;
              color: #d8d8d8;
            }
          }
        }
      }
    }
  }
  .tags-footer {
    height: 20px;
    background-position: -1440px -12px;
  }

  z-index: 10;
`
