import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import {
  Input, Tabs, Avatar, Form,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { IconPath } from '@components/atoms/icons';
import Config from '@config';
import PropTypes from 'prop-types';
import ProfileCard from '@components/molecules/profileCard';
import userActions from '@redux/user/actions';
import { useRouter } from 'next/router';

import Style from './style';

const { unfollow, follow } = userActions;

const TabBar = (props) => {
  const { panes, activeKey, onTabClick } = props;

  return (
    <div className="chat-tab">
      {panes.map((val) => (
        <button
          className={`tab-btn ${activeKey === val.key ? 'tab-btn-active' : ''}`}
          type="button"
          onClick={(e) => onTabClick(val.key, e)}
          key={val.key}
        >
          {val.props.tab}
        </button>
      ))}
    </div>
  );
};

const LiveChat = ({ roomId }) => {
  const chatRef = useRef();
  const router = useRouter();

  const dispatch = useDispatch();
  const [formRef] = Form.useForm();

  const [socket, setSocket] = useState();
  const [messageList, setMessageList] = useState([]);

  const { profile, videoContent, follower } = useSelector((state) => ({
    profile: state.Auth.get('profile'),
    videoContent: state.Video.get('content'),
    follower: state.User.get('follower'),
  }));

  const onFinish = (values) => {
    const { message } = values;
    const { username, _id } = profile;

    socket.emit('chat', {
      _id, username, message, roomId,
    });
    formRef.setFieldsValue({
      message: '',
    });
  };

  const {
    avatar, username, userId, about,
  } = videoContent;

  const onChatScrollToBottom = () => {
    const { scrollHeight } = chatRef.current;
    chatRef.current.scrollTo(0, scrollHeight);
  };

  const onUpdateMessage = (data) => {
    setMessageList((val) => [...val, data]);
    onChatScrollToBottom();
  };

  const onClickFollowBtn = () => {
    if (!profile?._id) {
      router.push('/signin');
      return;
    }

    if (follower.isFollow) {
      dispatch(unfollow(userId));
    } else {
      dispatch(follow(userId));
    }
  };

  useEffect(() => {
    const newSocket = io(Config.WS_ENDPOINT);
    setTimeout(() => setSocket(newSocket), 500);
    return () => {
      newSocket.close();
    };
  }, []);

  useEffect(() => {
    if (!socket) return;

    // eslint-disable-next-line
    const { username, _id } = profile;
    socket.emit('joinRoom', { _id, username, roomId });
    socket.on('chat', (data) => {
      onUpdateMessage(data);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <Style>
      <Tabs
        renderTabBar={(DefaultTabBarProps) => <TabBar {...DefaultTabBarProps} />}
        defaultActiveKey="1"
      >
        <Tabs.TabPane className="custom-tab-pane" tab="Chat" key="chat">
          {!socket ? (
            <div className="chat-body" style={{ display: 'flex', justifyContent: 'center' }}>
              Not connecting
            </div>
          ) : (
            <div ref={chatRef} className="chat-body">
              {messageList.map((record, key) => {
                // eslint-disable-next-line
                const { _id, username, message } = record; 

                const classMyMessage = _id === profile._id ? 'chat-message-me' : '';
                return (
                  <div className={`chat-message-row ${classMyMessage}`} key={`message-${key}`}>
                    <div className="user-avatar">
                      <Avatar />
                    </div>
                    <div className="user-message">
                      <div className="user-message-title">
                        {username}
                      </div>
                      <div className="user-message-content">
                        {message}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          <Form form={formRef} onFinish={onFinish}>
            <Form.Item name="message" className="chat-text-area">
              <Input
                placeholder="Write your message..."
                suffix={<IconPath />}
              />
            </Form.Item>
          </Form>
        </Tabs.TabPane>
        <Tabs.TabPane className="custom-tab-pane" tab="Profile" key="profile">
          {/* <div className="chat-body"> */}
          <ProfileCard
            avatar={avatar}
            username={username}
            about={about}
            follower={follower}
            onClickFollowBtn={onClickFollowBtn}
          />
          {/* </div> */}
        </Tabs.TabPane>
      </Tabs>

    </Style>
  );
};

LiveChat.propTypes = {

};

export default LiveChat;
