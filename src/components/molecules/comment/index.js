import React from 'react';
import { Avatar } from 'antd';
import Style from './style';

const Comment = ({
  className, fullname, avatar, text, createdAt, userId,
}) => {
  return (
    <Style className={className}>
      <div className="comment-img">
        <Avatar src={avatar} alt="user-comment" />
      </div>
      <div className="comment-box">
        <div className="comment-header">
          {fullname} <span>{createdAt}</span>
        </div>
        <div className="description">
          {text}
        </div>
      </div>
    </Style>
  );
};

export default Comment;
