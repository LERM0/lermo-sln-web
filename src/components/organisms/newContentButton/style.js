import Styled from 'styled-components';

export default Styled.div`


  .button-container {
    margin: 25px;
    position: fixed;
    white-space: nowrap;
    z-index: 9998;
    padding-left: 0;
    list-style: none;
    bottom: 24px;
    right: 24px;
    align-items: end;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .button-create {
    padding: 12px 24px !important;
    background: #FC665C;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12) !important;
    border-radius: 24px !important;
    display: flex !important;
    /* flex-direction: column; */
    justify-content: center !important;
    align-items: center !important;
    height: 48px;
    width: 180px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;

    .icon {
      margin-right: 10px;
      height: 20px;
    }
  }

  .button-create-content-off {
    display: none;
  }

  .button-create-content-on { 
    padding: 12px 24px !important;
    margin-bottom: 10px !important;
    background: #FFFFFF !important;
    color: #FC665C !important;
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12) !important;
    border-radius: 24px !important;
    display: flex;
    /* flex-direction: column; */
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 142px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 22px;

    .icon {
      margin-right: 10px;
      height: 20px;
    }
  }

  @media only screen and (max-width: 768px) {
    .button-create {
      padding: 12px 24px;
      background: #FC665C;
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
      border-radius: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 48px;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 22px;

      .icon {
        margin-right: 0;
        width: 20px;
        height: 20px;
      }

      span {
        display: none;
      }
    }
  }


`;
