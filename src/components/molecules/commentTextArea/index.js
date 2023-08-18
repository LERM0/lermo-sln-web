import React, {
  useRef, useState, useImperativeHandle, forwardRef,
} from 'react';
import { Input, Avatar } from 'antd';
import { useSelector } from 'react-redux';

import Style from './style';

const CommentTextArea = ({ className = {}, onEnterNewComment }, ref) => {
  const inputRef = useRef();
  const [text, setText] = useState('');

  const onPressEnter = (e) => {
    if (e.which === 13) {
      e.preventDefault();
      onEnterNewComment(text);
    }
  };

  const { profile } = useSelector((state) => {
    return {
      profile: state.Auth.get('profile'),
    };
  });

  useImperativeHandle(ref, () => ({
    reset: () => {
      setText('');
    },
  }));

  return (
    <Style className={className}>
      { profile
      && (
      <>
        <div className="comment-img">
          <Avatar src={profile.avatar} alt="user-comment" />
        </div>
        <Input.TextArea
          ref={inputRef}
          rows={4}
          placeholder="Let's comment"
          onChange={(e) => setText(e.target.value)}
          value={text}
          onPressEnter={onPressEnter}
        />
      </>
      )}
    </Style>
  );
};

export default forwardRef(CommentTextArea);
