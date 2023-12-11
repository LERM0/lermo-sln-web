import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import UserTemplate from '@components/templates/user';
import CreateVideoForm from '@components/organisms/createVideoForm';
import { useDispatch, useSelector } from 'react-redux';
import videoActions from '@redux/video/actions';
import withAuth from '@components/templates/withAuth';
import LoadingPage from '@components/atoms/loadingPage';
import { generateVideoThumbnails, importFileandPreview } from '@rajesh896/video-thumbnails-generator';

import Style from './style';

const convertBase64ToFile = async (base64Image, fileName) => {
  const response = await fetch(base64Image);
  const blob = await response.blob();
  const file = new File([blob], fileName, { type: blob.type });
  return file;
};

const { uploadVideo, uploadThumbnail, update_video, get_video } = videoActions;
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};

const VideoPage = ({ pid }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [redirect, setRedirect] = useState(false);
  const videoId = pid || router.query.pid;

  const [thumbnailLoading, setThumbnailLoading] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState('');

  const [videoUploading, setvideoUploading] = useState(false);
  const [videoUploadingPercent, setvideoUploadingPercent] = useState(false);
  const [videoUploadMessage, setVideoUploadMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const { profile, content, uploadVideoStatus, updateVideoStatus } = useSelector((state) => ({
    profile: state.Auth.get('profile'),
    content: state.Video.get('content'),
    uploadVideoStatus: state.Video.get('uploadVideoStatus'),
    updateVideoStatus: state.Video.get('updateVideoStatus'),
  }));

  useEffect(() => {
    if (!videoId) {
      return;
    }
    dispatch(get_video(videoId));
  }, [videoId]);

  useEffect(() => {
    const { _id } = profile || {};
    const { userId } = content || {};
    if (!_id || !userId) return;

    if (_id && userId && _id === userId) {
      setIsLoading(false);
    } else {
      router.push('/');
    }
  }, [content, profile]);

  useEffect(() => {
    if (uploadVideoStatus === 'success') {
      setvideoUploadingPercent(100);
      setVideoUploadMessage('Upload Completed');
    }
    if (updateVideoStatus === 'success' && redirect) {
      setRedirect(false);
      router.push('/space/myspace');
    }
  }, [uploadVideoStatus, updateVideoStatus, redirect]);

  const onUploadAction = ({ file, onSuccess }) => {
    setvideoUploading(true);
    setvideoUploadingPercent(0);
    dispatch(uploadVideo(videoId, file));

    generateVideoThumbnails(file, 0).then(async (base64Image) => {
      const thumbnailFile = await convertBase64ToFile(base64Image, videoId);
      dispatch(uploadThumbnail(videoId, thumbnailFile));
    });
  };

  const onUploadVideo = (info) => {
    setvideoUploadingPercent(0);
    setVideoUploadMessage('Uploading...');
  };

  const onUploadThumbnailAction = ({ file, onSuccess }) => {
    setThumbnailLoading(true);
    dispatch(uploadThumbnail(videoId, file));
    return onSuccess('ok');
  };

  const onUploadThumbnailChange = (info) => {
    if (info.file.status === 'uploading') {
      setThumbnailLoading(true);
    }

    if (info.file.status === 'done') {
      setThumbnailLoading(false);

      getBase64(info.file.originFileObj, (imageUrl) => {
        setThumbnailUrl(imageUrl);
      });
    }
  };

  const onFinish = (values) => {
    const form = {
      videoType: 'video',
      status: 'completed',
      ...values,
    };

    // if (values.videoType == 'paid') {
    //   form = {
    //     ...values,
    //     price: values.price.number,
    //     freeMinute: values.freeMinute.number,
    //   };
    // }

    dispatch(update_video(videoId, form));
    setRedirect(true);
  };

  const onDeleteVideo = () => {
    dispatch(update_video(videoId, { status: 'deleted' }));
    setRedirect(true);
  };

  let BaseComponent = <LoadingPage />;
  if (!isLoading) {
    BaseComponent = (
      <div className="container">
        <CreateVideoForm
          content={content}
          onUploadChange={onUploadVideo}
          onUploadAction={onUploadAction}
          videoUploading={videoUploading}
          videoUploadingPercent={videoUploadingPercent}
          onUploadThumbnailAction={onUploadThumbnailAction}
          onUploadThumbnailChange={onUploadThumbnailChange}
          thumbnailUrl={thumbnailUrl}
          thumbnailLoading={thumbnailLoading}
          videoUploadMessage={videoUploadMessage}
          onFinish={onFinish}
          onDeleteVideo={onDeleteVideo}
        />
      </div>
    );
  }

  return <Style>{BaseComponent}</Style>;
};

export const getServerSideProps = async ({ params }) => {
  return {
    props: { pid: params.pid },
  };
};

VideoPage.Layout = UserTemplate;

export default withAuth(VideoPage);
