import styled from 'styled-components'

export const PlayerWrapper = styled.div`
  > .content {
    border: 1px solid #d3d3d3;
    background-image: url(${require('@/assets/img/wrap-bg.png')});
    display: flex;

    > .left {
      width: 730px;
    }

    > .right {
      box-sizing: border-box;
      width: 250px;
      padding: 20px 30px 40px 20px;
    }
  }
`
