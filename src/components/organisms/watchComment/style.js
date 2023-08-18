import styled from 'styled-components';

export default styled.div`
  .comment-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 16px;
  }

  .comment-content {
    border-radius: 24px;
    padding: 16px;
    background: #fff;
    margin-bottom: 32px;
    min-height: 100px;

    .comment-row {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .comment-content{
      border-radius: 8px;
      min-height: 100px;
    }
  }
`;
