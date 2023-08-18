import Styled from 'styled-components';

export default Styled.div`
  .video-card {
    border-radius: 8px;
    /* width: 300px; */

    .video-thumbnail {
      padding-top: 56.25%;
      cursor: pointer;

      img {
        border-radius: 8px 8px 0 0;
      }

      .not-found {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 8px 8px 0 0;

        display: flex;
        justify-content: center;
        align-items: center;
        background: #e79194;

        font-size: 20px;
        color: #fff;
        text-transform: uppercase;
      }

      /* Override */
      &.loading {
        cursor: default;
        .shimmer {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          border-radius: 8px 8px 0 0;
        }
      }
    }
  }

  .edit-container {
    .left-container {
      display: inline-block;
      width: 80%;
      color: rgba(0, 0, 0, 0.45);
    }

    .right-container {
      text-align: end;
      display: inline-block;
      width: 20%;
    }
  }

  .ant-card-cover img {
    width: 291px;
    height: 164px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    background: #CCCCCC;
  }

  .ant-card-body {
    padding: 16px;
  }

  .ant-avatar {
    width: 24px;
    height: 24px;
  }

  .ant-card-meta-avatar {
    padding-right: 8px;
  }

  .ant-card-meta {
    margin: 8px 0 0 0;
  }

  @media (max-width: 992px) {
    .ant-card-cover img {
      width: 100%;
      height: 164px;
      object-fit: cover;
      border-radius: 8px 8px 0 0;
    }

    .ant-card {
      width: 100%;
      border-radius: 8px;
    }
  }

  @media (max-width: 768px) {
    .ant-card-cover img {
      width: 100%;
      height: 226px;
      object-fit: cover;
      border-radius: 8px 8px 0 0;
    }
  }

`;
