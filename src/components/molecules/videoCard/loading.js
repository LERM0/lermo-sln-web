import React from 'react';
import {
  Card,
  Skeleton,
} from 'antd';
import LoadingTitle from '@components/atoms/loadingTitle';
import Style from './style';

const { Meta } = Card;

const Loading = () => {
  return (
    <Style>
      <Card
        className="video-card"
        cover={(
          <div className="video-thumbnail loading">
            <div className="shimmer" />
          </div>
        )}
      >

        <Meta title={<LoadingTitle />} />
        <Meta
          avatar={<Skeleton.Avatar active size={24} shape="circle" />}
          description={<div className="text-loading shimmer" />}
        />
      </Card>
    </Style>
  );
};

export default Loading;
