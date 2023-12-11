import { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import { Button } from 'antd';
import { IconAddContent, IconAddVideo } from '@components/atoms/icons';
import { useDispatch, useSelector } from 'react-redux';

import videoActions from '@redux/video/actions';
import Style from './style';

const { create_video } = videoActions;

const NewContentButton = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [showFab, setShowFab] = useState('off');
  const [btnClick, setBtnClick] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const { videoId, videoType, profile } = useSelector((state) => {
    return {
      videoId: state.Video.get('videoId'),
      videoType: state.Video.get('videoType'),
      profile: state.Auth.get('profile'),
    };
  });

  useEffect(() => {
    if (redirect && videoId && videoType === 'live') {
      setRedirect(false);
      router.push(`/live?v=${videoId}`);
    } else if (redirect && videoId && videoType === 'video') {
      setRedirect(false);
      router.push(`/video/${videoId}`);
    }
  }, [videoId]);

  const onCreate = () => {
    if (btnClick) {
      setShowFab('off');
      setBtnClick(false);
    } else {
      setShowFab('on');
      setBtnClick(true);
    }
  };

  const onCreateVideo = () => {
    dispatch(create_video({ title: 'draft', videoType: 'video' }));
    setRedirect(true);
  };

  return (
    <Style>
      {profile && (
        <div className="button-container">
          <Button
            className={`button-create-content-${showFab}`}
            type="primary"
            icon={
              <span className="icon">
                {' '}
                <IconAddVideo />{' '}
              </span>
            }
            onClick={onCreateVideo}
          >
            {' '}
            VIDEO{' '}
          </Button>
          <Button
            className="button-create"
            type="primary"
            icon={
              <div className="icon">
                {' '}
                <IconAddContent />{' '}
              </div>
            }
            onClick={onCreate}
          >
            {' '}
            ADD CONTENT{' '}
          </Button>
        </div>
      )}
    </Style>
  );
};

export default NewContentButton;
