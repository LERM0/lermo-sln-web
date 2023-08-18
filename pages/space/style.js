import Styled from 'styled-components';

export default Styled.div`
  .main {
    /* margin-top: 6rem; */
    min-height: 100vh;
  }

  .banner {
    width: 100%;
    height: 320px;
    object-fit: cover;
  }
  
  .padding-left-10 {
    padding-left: 10px;
  }

  .feed-scroll {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .top-1 {
    top: -1%;
  }

  .side-container {
    flex: 0 0 250px;
  }

  .main-container {
    flex: 1;
    padding-left: 24px;
  }

  .row {
    margin-top: 20px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  @media (max-width: 1199px) {

  }

  @media (max-width: 769px) {
   
  }

`;
