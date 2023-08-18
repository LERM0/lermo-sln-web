import styled from 'styled-components';

export default styled.div`
  background: #e8e8e8;
  font-size: 14px;
  line-height: 1.4;

  p {
    font-size: 16px;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
  }
  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 25px;
  }
  h4 {
    font-size: 20px;
  }
  h4 {
    font-size: 18px;
  }

  .header-menu {
    width: 100%;
    height: 64px;

    /* position: fixed;  */
    z-index: 2;
    background: #fff;
    padding: 0px 250px;

    .menu-logo,
    .menu-setting {
      position: fixed;
      padding: 0 24px;
      top: 0px;
      width: 250px;
      height: 64px;
      display: flex;
    }

    .menu-center {
      display: flex;
      justify-content: center;
      line-height: initial;
      height: 100%;
    }

    .menu-setting {
      right: 0px;
    }

    .menu-logo {
      left: 0;
    }
  }

  .sider-menu {
    height: 100vh;
    overflow: auto;

    position: fixed;
    left: 0;
    top: 64px;
  }

  .guest-container {
    /*  */
  }

  .signup-container,
  .signin-container {
    width: 500px;

    .signup-form,
    .signin-form {
      padding: 24px;
    }

    .signup-navbar,
    .signin-navbar {
      padding: 20px 24px;
    }
  }

  .img-container {
    width: calc(100% - 500px);
    background-image: url('watch-content.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .user-container {
    display: flex;
    justify-content: center;
    background: transparent;

    width: 100%;
    max-width: 1200px;
    min-height: 100vh;

    margin: auto auto;
    margin-top: 5rem;
    /* margin: 64px auto auto; */
  }

  /* Override Library */
  .ant-btn {
    border-radius: 4px;
  }

  /*  Delete
  .ant-btn:hover, .ant-btn:focus {
    color: #FC665C;
    border-color: #FC665C;
  } */

  .ant-btn-primary {
    background: #fc665c;
    border-color: #fc665c;
    &:hover {
      color: #fff;
      background: #fc665c;
      border-color: #fc665c;
    }
  }

  .ant-input {
    border-radius: 8px;

    &:focus,
    &:hover {
      border-color: #fc665c;
      box-shadow: 0 0 0 2px rgb(224 120 120 / 20%);
    }
  }

  .ant-input-affix-wrapper:focus,
  .ant-input-affix-wrapper:hover,
  .ant-input-affix-wrapper-focused {
    border-color: #fc665c;
    box-shadow: 0 0 0 2px rgb(224 120 120 / 20%);
  }

  .ant-input-affix-wrapper .ant-input {
    &:focus,
    &:hover {
      border-color: transparent;
      box-shadow: none;
    }
  }

  .ant-input-group-addon:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #d8575d;
    border-color: #d8575d;
  }

  @media only screen and (max-width: ${(props) => props.theme.medias.lg}) {
    .guest-container {
      .signup-container,
      .signin-container {
        width: 100%;

        .signup-form,
        .signin-form {
          max-width: 500px;
          margin: auto;
        }

        .signup-navbar,
        .signin-navbar {
          margin-bottom: 50px;
        }
      }
      .img-container {
        display: none;
      }
    }

    .user-container {
      padding: 0 24px;
    }
  }

  @media only screen and (max-width: ${(props) => props.theme.medias.md}) {
    .layout-collapsed {
      filter: blur(50px);
    }
  }

  @media only screen and (max-width: ${(props) => props.theme.medias.sm}) {
    .user-container {
      padding: 0;
    }
  }
`;
