import styled from 'styled-components';
import wrapProps from '@components/atoms/wrapProps';

export default wrapProps(styled.div`
  display: flex;
  flex-direction: row;

  padding: 24px;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;

  .icon-card {
    padding-right: 14px;
  }

  .icon-content {
    
  }
`);
