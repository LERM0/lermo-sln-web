import Styled from 'styled-components';

export default Styled.div`
  width: 100%;

  .main {
    margin: 5rem;
    min-height: 100vh;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .container {
    display: inline-block;
    justify-content: center;
    align-items: center;
    width: 907px;
    flex: 1;
    background: #FFFFFF;
    border-radius: 16px;
    margin: 16px 0 0 0;
    padding: 16px 24px;
  }

  .banner-container {
    display: inline-block;
    justify-content: center;
    align-items: center;
    width: 907px;
    flex: 1;
    border-radius: 16px;
  }

  .flex-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 907px;
    flex: 1;
  }

  .container-submit {
    width: 907px;
    text-align: end;
    margin-top: 24px;
  }

  .ant-avatar {
    img {
      object-fit: cover;
    }
  }

  @media (max-width: 992px){
    .main {
      padding: 2rem;
      margin: 0;
    }

    .container {
      width: 100%;
    }

    .banner-container {
      width: 100%;
    }

    .container-submit {
      width: 100%;
    }

    .flex-container {
      width: 100%;
    }
  }

  @media (max-width: 768px){
    .main {
      padding: 2rem;
      margin: 0;
    }
  }
`;
