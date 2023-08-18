import styled from 'styled-components';

export default styled.div`
  /* background: #fff; */

  .container {
    display: flex;
    flex-direction: column;
    padding: 24px;
    /* margin-top: 80px; */
  }

  .row {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  .layout-collapsed {
    transition: 0.2s all;
  }

  .button-feedback {
    color: ${(props) => props.theme.colors.main};
    font-weight: bold;
    background: #fff;

    border: 1px solid rgba(0, 0, 0, 0.15);
    box-sizing: border-box;
    border-radius: 8px;
    border: 0px;
    width: 100%;
    height: 32px;
  }

  .feed-scroll {
    width: 100%;
    max-width: 100%;
    height: calc(100vh - 0px);
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .terms-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .terms-content {
    display: flex;
    flex-direction: column;
    width: 50%;
  }

  @media only screen and (max-width: 991px) {
    .ant-layout .ant-layout-sider {
      position: fixed;
      overflow-y: auto;
      z-index: 1;
    }

    .container {
      padding: 0px;
    }
  }
`;
