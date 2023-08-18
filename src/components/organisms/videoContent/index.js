import VideoCard from '@components/molecules/videoCard';
import { Row, Col } from 'antd';
import Loading from './loading';
import Style from './style';

const VideoContent = ({
  videos = [], title = 'Video', onClick, editVideo, onEditVideo,
}) => {
  if (videos.length === 0) {
    return <Loading />;
  }
  return (
    <Style>
      <h1>{title}</h1>
      <Row gutter={[16, 16]}>
        {videos.map((video, i) => (
          <Col xs={24} sm={12} md={8} xl={8} key={i}>
            <VideoCard
              id={video.id}
              videoThumbnail={video.thumbnail}
              videoTitle={video.title}
              userAvatar={video.avatar}
              username={video.username}
              editVideo={editVideo}
              onEditVideo={() => {
                onEditVideo(video);
              }}
              onClick={() => {
                onClick(video);
              }}
            />
          </Col>
        ))}
      </Row>
    </Style>
  );
};

export default VideoContent;
