import LoadingPage from '@components/atoms/loadingPage';
import FeedCard from '@components/organisms/feedCard';
import NewContentButton from '@components/organisms/newContentButton';
import { UserSideMenuTemplate } from '@components/templates/user';
import withAuth from '@components/templates/withAuth';
import { Col, Row } from 'antd';
import Head from 'next/head';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import feedActions from '@redux/feed/actions';
import userActions from '@redux/user/actions';

import Style from './index.style';

const { get_feeds, update_feed_page, feed_position } = feedActions;
const { get_noti } = userActions;

const Home = () => {
  const dispatch = useDispatch();
  const { feeds, page, position } = useSelector((state) => ({
    feeds: state.Feed.get('feeds'),
    page: state.Feed.get('page'),
    position: state.Feed.get('position'),
  }));

  useEffect(() => {
    if (feeds.length === 0) dispatch(get_feeds(page, 10));
    dispatch(get_noti());
  }, []);

  useEffect(() => {
    // if (page) dispatch(get_feeds(page, 10));
    // // feeds = [0,1,2]
    if (page && feeds.length > 5) dispatch(get_feeds(page, 10));
  }, [page]);

  const onScroll = (e) => {
    dispatch(feed_position(e.target.scrollTop));
    const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1000;
    if (bottom) {
      dispatch(update_feed_page(page + 1));
    }
  };

  const feedComponent = (val, index) => {
    let component;

    if (val.videoType) {
      component = (
        <div className="row" key={`${val}_${index}`}>
          <FeedCard data={val} />
        </div>
      );
    }

    return component;
  };

  const scrollRef = (e) => {
    if (e) e.scrollTo(0, position);
  };

  return (
    <Style>
      <Head>
        <title> Lermo - Social Learning Network </title>
        <meta property="og:url" content="http://lermo.io" />
        <meta property="og:type" content="Lermo – Social Learning Network" />
        <meta property="og:title" content="Lermo – Social Learning Network" />
        <meta
          property="og:description"
          content="Lermo - Social Learning Network"
        />
        <meta property="og:image" content="https://www.lermo.io/images/slider/slide2.png" />
      </Head>
      <NewContentButton />
      <div ref={scrollRef} onScroll={onScroll} className="feed-scroll" id="feed">
        <div className="user-container container">
          <Row gutter={16}>
            <Col lg={18} xs={24}>
              {feeds.map((val, index) => feedComponent(val, index))}
            </Col>
          </Row>
        </div>
      </div>
    </Style >
  );
};

export default withAuth(UserSideMenuTemplate, Home);
