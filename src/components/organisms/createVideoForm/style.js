import Styled from 'styled-components';
import Radio from 'antd/lib/radio';

export default Styled.div`
  width: 100%;

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav {
    top: 0;
    position: absolute;
    width: 100%;
    height: 80px;
    // margin-top: 4.5rem;
    display: flex;
    background: #FFFFFF;
    box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.08);
    position: fixed;
    z-index: 2;

    .nav-backward { 
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .nav-button { 
      width: 50%;
      display: flex;
      padding: 0 24px;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }

    .button {
      margin-left: 8px;
      height: 48px
    }
  }

  .form {
    margin-top: 3rem;
  }
 
  .upload-title {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    padding: 16px;

    position: static;
    /* width: 665px; */
    // height: 342px;
    left: 0px;
    top: 0px;
    background: #FFFFFF;
    border-radius: 16px;

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 14px 0px;
   }

   .upload-text {
    margin-top: 8px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: #8C8C8C;
   }
 
   .upload-title-image {
     display: block;
     padding: 0px;
     width: 320px;
     height: 180px;
     left: 0px;
     top: 0px;
   }
 
   .upload-title-file {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     width: 320px;
     height: 180.01px;
   }
 
   .upload-title-detail {
     display: flex;
     flex-direction: column;
     align-items: flex-start;
     padding: 0px 0px 0px 10px;
     width: 320px;
     left: 0px;
     top: 0px;
 
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 22px;
     color: #262626;
   }
 
   .upload-type {
     width: 665px;
     display: block;
     background: #FFFFFF;
     border-radius: 16px;
     margin: 14px 0px;
   }

   .upload-type-container {
     width: 665px;
     display: inline-block;
     background: #FFFFFF;
     border-radius: 16px;
     margin: 14px 0px;
   }

   .upload-form-container {
     margin: 16px
   }

   .upload-type-price {
     margin: 16px 16px;
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 22px;
     color: #262626;
   }

   .upload-thumbnail-img {
    width: 104px;
    height: 104px;
    object-fit: contain;
   }

   .ant-form-item {
    margin-bottom: 10px;
    width: 100%;
   }

   .input {
     width: 100%;
     border-radius: 5px;
   }
 
   .margin-top {
     margin-top: 8px;
   }
 
   .margin-buttom {
     margin-bottom: 10px;
   }
 
   .h1, h1 {
     font-size: 24px;
     margin: 16px 16px;
   }
 
   .h2, h2 {
     margin: 0;
     font-style: normal;
     font-weight: normal;
     font-size: 14px;
     line-height: 22px;
     color: #262626;
     padding: 0px
   }
 
   .line {
     display: block;
     border: 1px solid #F0F0F0;
   }

   @media (max-width: 992px) {
    .upload-title {
      width: 100%;
    }
   }


   @media (max-width: 769px) {
    .form {
      margin-top: 5rem;
    }
    
    .upload-title {
      width: 100%;
    }

    .upload-title-file {
      width: 50%;
    }

    .upload-title-detail {
      width: 50%;
    }

    .upload-title-file {
      width: 50%;
    }

    .upload-title-detail {
      width: 50%;
    }

    .upload-type-container {
      width: 100%;
    }

    .upload-type { 
      width: 100%;
    }

    .upload-type-container {
      width: 100%;
    }

    .nav { 
      .nav-button { 
        padding: 0;
        align-items: center;
        min-width: 166px
      }
    }
  }

  @media screen and (-webkit-min-device-pixel-ratio:0) { 
    select,
    textarea,
    input {
      font-size: 16px;
    }
  }
 

 `;
