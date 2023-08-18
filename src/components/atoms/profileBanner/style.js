import Styled from 'styled-components';

export default Styled.div`
  display: block;
  width: 100%;
  height: 230px;
  margin-bottom: 32px;
  border-radius: 16px;

  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    background: #CCCCCC;
  }

  .banner-normal {
    opacity: 1;
    display: block;
    object-fit: cover;
    border-radius: 16px;
    transition: .5s ease;
    backface-visibility: hidden;
  }

  .banner-edit {
    opacity: 1;
    display: block;
    width: 100%;
    height: 230px;
    object-fit: cover;
    border-radius: 16px;
    transition: .5s ease;
    backface-visibility: hidden;
  }

  .edit {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 90%;
    left: 90%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .banner-container:hover .banner-edit {
    opacity: 0.3;
  }

  .banner-container:hover .edit {
    opacity: 1;
  }

  @media (max-width: 1200px){
    .banner-edit {
      width: 100%;
    }

    .banner-normal {
      width: 100%;
    }
  }

  @media (max-width: 992px){
    .banner-edit {
      width: 100%;
    }
  }

  @media (max-width: 768px){
    .banner-edit {
      width: 100%;
    }
  }
`;
