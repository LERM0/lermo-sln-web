import styled from 'styled-components';
import wrapProps from '@components/atoms/wrapProps';

export default wrapProps(styled.div`
  width: 160px;

  img {
    width: 100%;
  }

  .logo-mobile {
    display: none;
  }

  @media only screen and (max-width: 991px) { 
    width: 120px;
  }


  @media only screen and (max-width: 420px) {
    width: 38px;

    .logo {
      display: none;
    }
    .logo-mobile {
      display: block;
    }
  }
`);
