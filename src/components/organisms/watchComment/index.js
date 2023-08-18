import React, { useRef, useEffect } from 'react';
import Comment from '@components/molecules/comment';
import CommentTextArea from '@components/molecules/commentTextArea';
import Style from './style';

const WatchComment = ({ dataSource = [], onEnterNewComment = () => {} }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.reset();
  }, [JSON.stringify(dataSource)]);
  return (
    <Style>
      <div className="comment-box">
        <div className="comment-title">Comments</div>
        <div className="comment-content">
          {dataSource.map((val, index) => (
            <Comment
              className="comment-row"
              fullname={val.username}
              avatar={val.avatar}
              text={val.message}
              createdAt={val.createdAt}
              key={`${val.username}-${index}`}
            />
          ))}

          <CommentTextArea
            ref={inputRef}
            className="comment-row"
            onEnterNewComment={onEnterNewComment}
          />
        </div>
      </div>
    </Style>
  );
};

export default WatchComment;
