import styled from 'styled-components';

export default styled.div`
  .col-sider {
    margin-left: 24px;
  }

  .col-main {
    width: 100%;
  }

  .col-live-comment {
    flex: 0 0 360px;
    margin-left: 16px;
  }

  .col-end-live {
    background: #fff;
    padding: 24px;
    border-radius: 24px;

    flex: 0 0 360px;
    margin-left: 16px;
    margin-top: 16px;
  }

  .profile-container {
    position: relative;
    left: 16px;
    top: 0;
  }

  /* .sidebar-box {
    margin: 24px;  
    max-width: 340px;
  } */

  /* .visible-mobile {
    display: none;
  } */

  .main-container {
    /* display: flex;
    justify-content: space-around;
    align-items: stretch; */

    width: 100%;
    margin-top: 24px;
    margin-bottom: 24px;

    .video-section {
      border-radius: 24px;

      .row {
        margin-bottom: 16px;

        &:last-child {
          margin-bottom: 0px;
        }
      }

      .video-box {
        border-radius: 24px;
        background: #ffffff;
        padding: 8px;
      }

      .video-title {
        font-size: 25px;
        font-weight: bold;
      }

      .video-description {
        font-size: 14px;
        color: #858585;
      }

      .video-information {
        padding: 24px;
        border-radius: 16px;
        background: #fff;
      }

      .video-row {
        margin-left: 8px;
        margin-right: 8px;
      }

      .video-description {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;

        .info-item {
          margin-right: 20px;
          &:last-child {
            margin-right: 0px;
          }
        }

        .tag-list {
          display: block;
          
          .tag-item {
            display: inline-block;
            margin-right: 8px;

            &:last-child {
              margin-right: 0px;
            }
          }
        }

        .anticon {
          margin-right: 10px;
          font-size: 1.2em;
        }

        .video-info {
          font-size: 1.2em;
          color: #8C8C8C;
        }
      }

      .video-title {
        font-size: 38px;
        font-weight: bold;
        margin-bottom: 8px;
      }
    }

    .button-endlive {
      width: 100%;
      height: 48px;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 22px;
      background: #F5222D;
    }
  }

  @media only screen and (max-width: 992px) {

    .profile-container {
      position: relative;
      left: 0;
      top: 0;
    }

    .col-sider {
      margin-right: 24px;
    }

    .col-live-comment {
      flex: 0 0 360px;
      margin-left: 0px;
      margin-top: 24px;
    }

    .visible-desktop {
      display: none;
    }

    .visible-mobile {
      display: flex;
    }

    /* .sidebar-box {
      margin: 24px;  
      max-width: 100%;
    } */
  }

  @media only screen and (max-width: 450px) {
    /* .sidebar-box {
      margin: 8px;  
      max-width: 100%;
    }

    .content-box {
      margin: 8px;

      .video-box {
        .video-description {
          font-size: 10px;
          margin-left: 0px;
          margin-right: 0px;

          .info-item {
            margin-right: 8px;            
          }
          .anticon {
            margin-right: 4px;
          }
        }
      }
    } */
  }
`;
