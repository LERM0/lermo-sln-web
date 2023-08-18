import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import VideoContent from '@components/organisms/videoContent';
import videoActions from '@redux/video/actions';
import merge from 'lodash/merge';

import Style from './style';

const { get_videos } = videoActions;

const SectionCourseHome = ({ page }) => {
  const dispatch = useDispatch();
  const Router = useRouter();
  const [feedData, setFeedData] = useState([]);

  const { videos } = useSelector((state) => ({
    videos: state.Video.get('videos'),
  }));

  const onClickVideoCard = ({ id }) => {
    Router.push(`/watch?v=${id}`);
  };

  useEffect(() => {
    dispatch(get_videos());
  }, []);

  useEffect(() => {
    setFeedData(merge(feedData, videos));
  }, [videos]);

  useEffect(() => {
    dispatch(get_videos(page, 10));
  }, [page]);

  return (
    <Style>
      <div className="section">
        <VideoContent onClick={onClickVideoCard} videos={feedData} title="" />
      </div>
    </Style>
  );
};

export default SectionCourseHome;
