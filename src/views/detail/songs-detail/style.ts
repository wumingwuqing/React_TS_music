import styled from 'styled-components'

export const SongsDetailWrapper = styled.div`
  > .content {
    border: 1px solid #d3d3d3;

    background: url(${require('@/assets/img/wrap4.png')}) repeat-y center 0;
    display: flex;

    > .left {
      padding: 47px 30px 40px 39px;
      width: 640px;
    }

    > .right {
      margin-left: 1px;
      width: 270px;
      padding: 20px 40px 40px 30px;
    }
  }
`
