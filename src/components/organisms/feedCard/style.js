import styled from 'styled-components';
import wrapProps from '@components/atoms/wrapProps';

export default wrapProps(styled.div`
  background: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 16px;
  padding: 16px;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  h4 {
    margin-bottom: 0px;
  }

  .header {
    padding-left: 50px;
    position: relative;
    margin-bottom: 16px;

    .username {
      font-weight: bold;

      a {
        color: #000000;
      }

      span {
        font-weight: normal;
        color: #8c8c8c;
        padding-left: 8px;
      }
    }

    .post-date {
      font-size: 10px;
      color: #bfbfbf;
    }

    .avatar {
      position: absolute;
      top: 0;
      left: 0;

      width: 40px;
      height: 40px;

      img {
        border-radius: 50%;
      }
    }

    .edit {
      position: absolute;
      top: 0;
      right: 0;
      text-align: end;
      width: 100px;
    }
  }

  .ant-dropdown-link {
    font-size: 20px;
    color: #000000;
  }

  .content {
    .description {
      color: #8c8c8c;
      margin-bottom: 8px;
    }

    .video-thumbnail {
      border-radius: 8px;
      cursor: pointer;
      display: block;

      .video-play {
        position: relative;

        .play-icon {
          z-index: 1;
          margin: auto;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translateX(-50%) translateY(-50%);
        }

        .live-icon {
          z-index: 1;
          margin: auto;
          position: absolute;
          left: 16px;
          top: 16px;
        }
      }

      img {
        border-radius: 8px;
      }

      .not-found {
        top: 0;
        width: 100%;
        /* min-height: 50vh; */
        aspect-ratio: auto 4 / 3;
        border-radius: 8px;

        display: flex;
        justify-content: center;
        align-items: center;
        background: #e79194;

        font-size: 20px;
        color: #fff;
        text-transform: uppercase;
        text-align: center;
      }

      @media (max-width: 769px) {
        .not-found {
          /* min-height: 30vh; */
        }
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

  @media only screen and (max-width: ${(props) => props.theme.medias.md}) {
    border-radius: 0px;
  }
`);
