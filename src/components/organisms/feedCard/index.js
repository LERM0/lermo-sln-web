import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Avatar, Dropdown, Menu } from 'antd';
import Image from 'next/image';
import videoActions from '@redux/video/actions';
import { IconPlay, IconLive } from '@components/atoms/icons';
import Style from './style';

const { update_video } = videoActions;

const FeedCard = ({
  data, onClick, videoThumbnail, editable,
}) => {
  const { id, videoType, status } = data;

  const dispatch = useDispatch();
  const router = useRouter();

  const CoverComponent = (
    <div className="video-play">
      <div className="play-icon"> <IconPlay /> </div>
      { status === 'streaming' && <div className="live-icon"> <IconLive /> </div>}
      <Image
        width={4}
        height={3}
        layout="responsive"
        alt="video thumbnail"
        src={data?.thumbnail || '/default-bg.svg'}
        objectFit="cover"
      />
    </div>
  );

  const onSelectMenu = ({ key }) => {
    switch (key) {
      case '1':
        if (id && videoType === 'live') {
          router.push(`/live?v=${id}`);
        } else if (id && videoType === 'video') {
          router.push(`/video/${id}`);
        }
        break;
      case '2':
        dispatch(update_video(id, { status: 'deleted' }));
        break;
      default:
        break;
    }
  };

  const menu = (
    <Menu onClick={onSelectMenu}>
      <Menu.Item key="1">
        Edit
      </Menu.Item>
      <Menu.Item key="2">
        Delete
      </Menu.Item>
    </Menu>
  );

  return (
    <Style>
      <div className="header">
        <div className="avatar">
          <Avatar
            alt="user_avatar"
            src={data.avatar}
          />
        </div>
        <div className="username"><a href={`/space/${data.userId}`}> {data.username} </a> <span> {data?.createdAt} </span></div>
        <div className="post-date">{data?.createdAt} {editable && `(${status})`}</div>
        <div className="edit">
          { editable && (
          <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              ...
            </a>
          </Dropdown>
          ) }
        </div>
      </div>
      <div className="content">
        <h4>
          {data?.title}
        </h4>
        <div className="description">
          {data?.description}
        </div>
        <div className="video-thumbnail">
          <Link href={`/watch?v=${data.id}`}>
            <a>
              {CoverComponent}
            </a>
          </Link>
        </div>
      </div>
    </Style>
  );
};

export default FeedCard;
