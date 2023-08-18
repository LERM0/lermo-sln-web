import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Head from 'next/head';

import {
  message, Row, Col, Tag, Button,
} from 'antd';

import { IconLeft, IconView, IconComment } from '@components/atoms/icons';
import { EyeFilled, MessageFilled } from '@ant-design/icons';
import UserTemplate from '@components/templates/user';
import WatchComment from '@components/organisms/watchComment';
import LoadingTitle from '@components/atoms/loadingTitle';
import HeaderMain from '@components/organisms/headerMain';
import MainButton from '@components/atoms/mainButton';
import Card from '@components/atoms/card';
import LiveChat from '@components/organisms/liveChat';
import ProfileCard from '@components/molecules/profileCard';

import Video from '@components/atoms/video';
import videoAPI from '@redux/video/api';

import videoActions from '@redux/video/actions';
import userActions from '@redux/user/actions';
import authActions from '@redux/auth/actions';
import Style from './style';

const {
  get_video, get_video_comments, add_comment, clean_video, clean_video_comments,
  update_view, end_live,
} = videoActions;
const { fetch_profile, init_token } = authActions;

const { getFollower, unfollow, follow } = userActions;

const WatchPage = ({ vid, video }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const v = vid || router.query.v;
  const [showButton, setShowButton] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const onClickCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };

  const {
    comments, profile, follower, isChecked, token,
  } = useSelector((state) => ({
    comments: state.Video.get('comments'),
    profile: state.Auth.get('profile'),
    follower: state.User.get('follower'),
    token: state.Auth.get('token'),
    isChecked: state.Auth.get('isCheckedTokenFromStorage'),
  }));

  const {
    id, title, videoUrl, videoType,
    view, avatar, username, userId, about, videoKey,
  } = video || {};

  useEffect(() => {
    if (!isChecked && !token) {
      dispatch(init_token());
    }

    if (!v) {
      message.error('Video source not found.');
      router.push('/');
    } else {
      dispatch(get_video_comments(v));

      setTimeout(() => {
        dispatch(update_view(v));
      }, 10000);
    }

    return () => {
      dispatch(clean_video());
      dispatch(clean_video_comments());
    };
  }, []);

  useEffect(() => {
    if (profile && profile._id === userId) {
      setShowButton(true);
    }
    if (profile?._id && userId) {
      dispatch(getFollower(userId, profile._id));
    }
  }, []);

  useEffect(() => {
    if (profile) {
      dispatch(getFollower(userId, profile._id));
    }
  }, [profile]);

  useEffect(() => {
    if (!isChecked) return;

    if (token && !profile) {
      dispatch(fetch_profile());
    }
  }, [isChecked, profile]);

  const onEnterNewComment = (value) => {
    dispatch(add_comment(v, value));
  };

  const onClickBack = () => {
    router.push('/');
  };

  const onEndLive = () => {
    dispatch(end_live(videoKey));
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

  const videoComponent = (type) => {
    let component;

    if (type === 'video') {
      component = (
        <Row>
          <Col xs={0} sm={0} md={0} lg={2}>
            <div className="col-sider">
              <MainButton onClick={onClickBack}>
                <IconLeft />
              </MainButton>
            </div>
          </Col>

          <Col xs={24} sm={24} md={24} lg={15}>
            <div className="col-main">
              <div className="video-section">
                <div className="row video-box">
                  <Video src={videoUrl} />
                  <div className="video-description video-row">
                    {/* <div className="tag-list">
                      {categories && categories.map((val) => <Tag className="tag-item" key={val}>{val}</Tag>)}
                    </div> */}
                    <div className="video-info">
                      <span className="info-item"><EyeFilled /> {`${view}`}</span>
                      <span className="info-item"><MessageFilled /> {`${comments.length}`}</span>
                    </div>
                  </div>
                  <div className="video-title video-row">
                    {title || <LoadingTitle width={200} height={50} />}
                  </div>
                  <div className="video-description video-row">
                    {video?.description}
                  </div>
                </div>

                <WatchComment
                  dataSource={comments}
                  onEnterNewComment={onEnterNewComment}
                />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={22} md={24} lg={7}>
            <ProfileCard
              avatar={avatar}
              username={username}
              about={about}
              follower={follower}
              onClickFollowBtn={onClickFollowBtn}
            />
          </Col>
        </Row>
      );
    } else if (type === 'live') {
      component = (
        <Row>
          <Col xs={0} sm={0} md={0} lg={2}>
            <div className="col-sider">
              <MainButton onClick={onClickBack}>
                <IconLeft />
              </MainButton>
            </div>
          </Col>
          <Col xs={24} sm={22} md={24} lg={15}>
            <div className="col-main">
              <div className="video-section">
                <div className="row">
                  <Video src={videoUrl} />
                </div>

                <div className="video-title row">
                  {title || <LoadingTitle width={200} height={50} />}
                </div>

                <div className="video-description row">
                  {video?.description}
                </div>

                <div className="video-information row">
                  <Row gutter={16}>
                    <Col span={12}>
                      <Card icon={<IconView />}>
                        <b>{view}</b>
                        <div>
                          Views
                        </div>
                      </Card>
                    </Col>
                    <Col span={12}>
                      <Card icon={<IconComment />}>
                        <b>{comments.length}</b>
                        <div>
                          Comments
                        </div>
                      </Card>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>

          {/* <Col xs={0} sm={0} md={2} lg={2} /> */}
          <Col xs={24} sm={22} md={24} lg={7}>
            <div className="col-live-comment">
              <LiveChat roomId={id} />
            </div>
            { showButton
            && (
            <div className="col-end-live">
              <Button className="button-endlive" type="primary" onClick={onEndLive}> END LIVE </Button>
            </div>
            )}
          </Col>
        </Row>
      );
    }

    return component;
  };

  return (
    <UserTemplate>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title> {video.title} </title>
        <meta property="og:type" content={video.videoType} />
        <meta property="og:title" content={video.title} />
        <meta property="og:description" content={video.description} />
        <meta property="og:image" content={video.thumbnail} />
      </Head>
      <HeaderMain onClickCollapsed={onClickCollapsed} />
      <Style className="user-container">
        <div className="main-container">
          {videoComponent(videoType)}
        </div>
      </Style>
    </UserTemplate>
  );
};

export const getServerSideProps = async ({ query }) => {
  const { v } = query;
  const api = await videoAPI.getVideo(v);

  if (!api.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vid: v,
      video: api.data,
    },
  };
};

export default WatchPage;
