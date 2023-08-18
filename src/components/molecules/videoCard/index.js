import {
  Card,
  Avatar,
} from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Loading from './loading';
import Style from './style';

const { Meta } = Card;

const VideoCard = ({
  videoThumbnail, videoTitle, username, onClick, isLoading,
  userAvatar, editVideo, onEditVideo,
}) => {
  if (isLoading) {
    return <Loading />;
  }

  let CoverComponent = <div onClick={onClick} className="not-found"> {videoTitle} </div>;
  if (videoThumbnail) {
    CoverComponent = (
      <Image
        alt="video thumbnail"
        src={videoThumbnail}
        layout="fill"
        objectFit="cover"
      />
    );
  }

  let OptionComponent;
  if (editVideo) {
    OptionComponent = (
      <div className="right-container">
        <SettingOutlined onClick={onEditVideo} />
      </div>
    );
  }

  return (
    <Style>
      <Card
        className="video-card material"
        cover={(
          <div className="video-thumbnail">
            {CoverComponent}
          </div>
        )}
        onClick={onClick}
      >
        <Meta title={videoTitle} />
        <Meta
          avatar={<Avatar src={userAvatar} />}
          description={username}
        />
      </Card>
    </Style>
  );
};

export default VideoCard;
