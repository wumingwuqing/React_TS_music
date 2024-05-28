import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: relative;
  .header-content {
    ul {
      margin-left: -33px;
      width: auto !important;
      margin-bottom: -5px;
      .item {
        cursor: pointer;
        float: left;
        margin: 0 0 25px 33px;
        .item-content {
          display: block;
          color: #888;
          width: 70px;
          height: 70px;
          background-position: 0 9999px;
          text-align: center;
          background-color: rgba(0, 0, 0, 0) !important;
          .icon {
            width: 48px;
            height: 48px;
            margin: 2px auto 0;
            background-position: -0px 0;
          }
        }
        &:hover {
          background: url(${require('@/assets/img/radio_bg.png')}) no-repeat;
        }
      }
      .active {
        .item-content {
          background: url(${require('@/assets/img/radio_bg.png')}) no-repeat;
          background-position: -70px 0;
          color: #d35757;
          .icon {
            background-position: -48px 0;
          }
        }
        background: url(${require('@/assets/img/radio_bg.png')}) no-repeat;
      }
    }
    &::after {
      content: '';
      display: block;
      clear: both;
    }
    .dots {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      cursor: pointer;
      width: 100%;
      height: 20px;
      text-align: center;
      line-height: 0;
      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 0px;
        background: url(${require('@/assets/img/radio_slide.png')}) 0 0;
        cursor: pointer;
        &:hover,
        &.active {
          background-position: -30px 0;
        }
      }
    }
    .control {
      left: 0;
      right: 0;
      height: 0px;

      .btn {
        top: 50%;
        transform: translateY(-50%);
        position: absolute;
        width: 20px;
        height: 30px;
        background-image: url(${require('@/assets/img/radio_slide.png')});
        background-color: transparent;
        cursor: pointer;

        &:hover {
          opacity: 0.4;
        }
      }
      .left {
        left: -26px;
        background-position: 0 -30px;
        opacity: 0.25;
      }

      .right {
        right: -26px;
        background-position: -30px -30px;
        opacity: 0.25;
      }
      .disable {
        opacity: 0.08;
      }
    }
  }
`
