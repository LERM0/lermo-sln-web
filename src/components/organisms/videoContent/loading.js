import React from 'react';
import { Row, Col } from 'antd';
import LoadingTitle from '@components/atoms/loadingTitle';
import VideoCard from '@components/molecules/videoCard';
import Style from './style';

const Loading = () => {
  return (
    <Style>
      <LoadingTitle />
      <Row gutter={[16, 16]}>
        {[...Array(4)].map((video, i) => (
          <Col xs={24} sm={12} md={8} xl={8} key={i}>
            <VideoCard isLoading />
          </Col>
        ))}
      </Row>
    </Style>
  );
};

export default Loading;
