import styled from 'styled-components';

export default styled.div`
  position: relative;
  padding-left: 56px;
  font-size: 12px;

  .comment-img {
    width: 48px;
    position: absolute;
    top: 0px;
    left: 0px;

    .ant-avatar {
      width: 48px;
      height: 48px;
    }
  }

  .comment-box {
    display: flex;
    flex-direction: column;
    /* width: 100%; */
    .comment-header {
      font-size: 16px;
      font-weight: bold;

      span {
        color: #8c8c8c;
        font-size: 12px;
        font-weight: normal;
      }
    }

    .description {
      color: #595959;
      line-height: 1.7;
    }
  }
`;
