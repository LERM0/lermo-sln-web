import styled from 'styled-components';
import wrapProps from '@components/atoms/wrapProps';

export default wrapProps(styled.div`
  height: fit-content;
  border-radius: 16px;
  background: #fff;

  .profile-container {
    position: relative;
    top: 0;
    width: 100%;
    left: 0px !important;

    .ant-card {
      border-radius: 0 0 16px 16px;
    }
  }

  .chat-tab {
    display: flex;
    flex-direction: row;

    padding: 8px; 
    margin: 16px;
    border-radius: 12px;
    background: #f5f5f5;

    font-size: 16px;
  }

  .tab-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50%;
    border: 0;
    border-radius: 8px;
    padding: 4px 16px;
    background: transparent;
    transition: ${(props) => props.theme.transitions.default};
    
    cursor: pointer;

    &.tab-btn-active {
      background: #fff;
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.08);
    }
  }

  .custom-tab-pane {
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.06); */
  }

  .chat-body {
    width: 100%;
    height: 400px;
    overflow-y: auto;

    padding: 16px;
  }

  .chat-text-area {
    padding: 16px;

    .ant-input-suffix {
      color: ${(props) => props.theme.colors.primary.main}
    }
  }

  .chat-message-row {
    position: relative;
    padding-left: 44px;
    margin-bottom: 16px;

    &:last-child {
      margin-bottom: 0px;
    }

    .user-avatar {
      position: absolute;
      bottom: 0px;
      left: 0px;
    }

    .user-message {
      padding: 12px;
      border-radius: 16px;
      background: #F5F5F5;

      .user-message-title {
        font-size: 12px;
        color: #979797;
        margin-bottom: 8px;
      }
    }

    &.chat-message-me {
      display: flex;
      justify-content: flex-end;

      .user-avatar {
        display: none;
      }

      .user-message {
        width: fit-content;
        background: #FFE7DA;
      }
    }
  }
`);
