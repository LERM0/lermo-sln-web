import Styled from 'styled-components';

export default Styled.div`

  .avatar-container {
    display: block;
    position: relative;
    /* width: 50%; */
  }

  .avartar {
    opacity: 1;
    display: block;
    width: 128px;
    height: 128px;
    transition: .5s ease;
    backface-visibility: hidden;
  }

  .edit {
    cursor: pointer;
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .avatar-container:hover .avartar {
    opacity: 0.3;
  }

  .avatar-container:hover .edit {
    opacity: 1;
  }
`;
