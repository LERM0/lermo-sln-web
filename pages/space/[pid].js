import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState, useRef, useMemo } from 'react';
import Image from 'next/image';
import { Row, Col, Affix } from 'antd';
import withAuth from '@components/templates/withAuth';
import { UserTopbarTemplate } from '@components/templates/user';
import ProfileCard from '@components/molecules/profileCard';
import NewContentButton from '@components/organisms/newContentButton';

import ProfileBanner from '@components/atoms/profileBanner';
import LoadingPage from '@components/atoms/loadingPage';

import FeedCard from '@components/organisms/feedCard';
import VideoContent from '@components/organisms/videoContent';
import HeaderMain from '@components/organisms/headerMain';

import authActions from '@redux/auth/actions';
import videoActions from '@redux/video/actions';
import userActions from '@redux/user/actions';
import feedActions from '@redux/feed/actions';

import Style from './style';

const { getUserDetail, getFollower, unfollow, follow } = userActions;
const { getVideoByUserId } = videoActions;
const { get_my_feed, update_space_feed_page, space_feed_position, clear_space_feed_data, get_space_feeds } =
  feedActions;

const SpaceEdit = ({ pid }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userId = pid || router.query.pid;

  const [isLoading, setIsLoading] = useState(true);
  const [spaceProfile, setSpaceProfile] = useState({});
  const [show, setShow] = useState(false);

  const { profile, spaceFeed, spacePage, userDetail, spacePosition, follower } = useSelector((state) => ({
    profile: state.Auth.get('profile'),
    spaceFeed: state.Feed.get('spaceFeed'),
    spacePage: state.Feed.get('spacePage'),
    userDetail: state.User.get('userDetail'),
    spacePosition: state.Feed.get('spacePosition'),
    follower: state.User.get('follower'),
  }));

  useEffect(() => {
    setIsLoading(true);
    if (!profile) dispatch(authActions.fetch_profile());

    if (userId === 'myspace') {
      setShow(true);
      if (spaceFeed.length === 0) dispatch(get_my_feed(spacePage, 10));
    } else if (userId) {
      if (!userDetail) dispatch(getUserDetail(userId));
      if (spaceFeed.length === 0) dispatch(get_space_feeds(spacePage, 10, userId));
    }
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [spaceFeed]);

  useEffect(() => {
    if (profile && userId === 'myspace') {
      setSpaceProfile(profile);
      dispatch(getFollower(profile._id, profile._id));
    } else if (userDetail && userId) {
      setSpaceProfile(userDetail);
      dispatch(getFollower(userId, profile._id));
    }
  }, [profile, userDetail]);

  useEffect(() => {
    if (userId === 'myspace') {
      if (spacePage) dispatch(get_my_feed(spacePage, 10));
    } else if (userId) {
      // eslint-disable-next-line
      if (spacePage) dispatch(get_space_feeds(spacePage, 10, userId));
    }
  }, [spacePage]);

  const onScroll = (e) => {
    const position = e.target.scrollTop;
    dispatch(space_feed_position(position));
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom && position) {
      dispatch(update_space_feed_page(spacePage + 1));
    }
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

  const feedComponent = (val, index) => {
    let component;

    if (val.videoType) {
      component = (
        <div className="row" key={`${val}_${index}`}>
          <FeedCard data={val} editable={show} />
        </div>
      );
    }

    return component;
  };

  const scrollRef = (e) => {
    if (e) e.scrollTo(0, spacePosition);
  };

  let BaseComponent = <LoadingPage />;

  if (!isLoading && spaceProfile) {
    BaseComponent = (
      <div ref={scrollRef} onScroll={onScroll} className="feed-scroll" id="feed">
        <div>
          <img
            alt="video thumbnail"
            src={spaceProfile.banner || '/default-bg.svg'}
            objectFit="cover"
            layout="fill"
            className="banner"
          />
          <ProfileCard
            avatar={spaceProfile.avatar}
            username={spaceProfile.username}
            about={spaceProfile.about}
            follower={follower}
            showFollowButton={show}
            onClickFollowBtn={onClickFollowBtn}
          />

          <Row gutter={[16]}>
            <Col className="top-1" xs={8} sm={8} md={8} lg={6} />
            <Col className="top-1" xs={24} sm={24} md={24} lg={13}>
              {spaceFeed.map((val, index) => feedComponent(val, index))}
            </Col>
            <Col className="top-1" xs={8} sm={8} md={8} lg={5} />
          </Row>
        </div>
      </div>
    );
  }

  return (
    <Style>
      <div className="main">{BaseComponent}</div>
      {show && <NewContentButton />}
    </Style>
  );
};

export const getServerSideProps = async ({ params }) => {
  return {
    props: { pid: params.pid },
  };
};

export default withAuth(UserTopbarTemplate, SpaceEdit);
