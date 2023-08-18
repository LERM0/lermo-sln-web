import { useEffect, useState } from 'react';
import {
  Input, Radio, Upload, Select, Progress, Form, Checkbox, Button, PageHeader,
} from 'antd';
import { LoadingOutlined, PlusOutlined, InboxOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

import Style from './style';

const { Dragger } = Upload;
const { TextArea } = Input;

const daggerProps = {
  name: 'file',
  multiple: false,
  maxCount: 2,
  disabled: false,
  showUploadList: false,
  accept: 'video/*',
};

const CreateVideoForm = ({
  content = {},
  onUploadChange,
  onUploadAction,
  videoUploading,
  videoUploadMessage,
  videoUploadingPercent,
  onUploadThumbnailAction,
  onUploadThumbnailChange,
  thumbnailUrl,
  thumbnailLoading,
  onFinish,
  onDeleteVideo,
}) => {
  const [form] = Form.useForm();

  const Router = useRouter();


  useEffect(() => {
    form.resetFields();
  }, [content]);

  const checkFeild = (_, value) => {
    if (value !== '') {
      return Promise.resolve();
    }

    return Promise.reject(new Error('Feild is required'));
  };

  const onBack = () => {
    Router.back();
  };

  const uploadButton = (
    <div>
      {thumbnailLoading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <Style>
      <main className="main">
        <div className="nav">
          <div className="nav-backward ">
            <PageHeader
              className="site-page-header"
              onBack={onBack}
              title="Video Detail"
            />
          </div>
          <div className="nav-button">
            <div>
              <Button className="button" onClick={onDeleteVideo}> Delete </Button>
              <Button className="button" type="primary" form="myForm" key="submit" htmlType="submit"> Public </Button>
            </div>
          </div>
        </div>
        <div className="form">
          <Form
            id="myForm"
            className="upload-form"
            layout="vertical"
            name="createVideo"
            form={form}
            onFinish={onFinish}
            initialValues={{
              title: content.title,
              description: content.description,
              videoType: content.videoType,

              enableDonation: content.enableDonation,

              price: {
                number: content.price,
              },
              freeMinute: {
                number: content.freeMinute,
              },
              tags: content.tags,
            }}
            scrollToFirstError
          >
            <div className="upload-title">
              <div className="upload-title-file">
                <Dragger {...daggerProps} onChange={onUploadChange} customRequest={onUploadAction}>
                  {videoUploading ? (
                    <div>
                      <div className="ant-upload-drag-icon">
                        <Progress type="circle" percent={videoUploadingPercent} style={{ width: '320px' }} />
                      </div>
                      <p className="upload-text">{videoUploadMessage}</p>
                    </div>
                  ) : (
                    <div>
                      <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                      </p>
                      <p className="ant-upload-text">Click or drag file to this area to upload</p>
                      <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit from upthumbnailLoading company data or other
                        band files
                      </p>
                    </div>
                  )}
                </Dragger>
              </div>
              <div className="upload-title-detail">
                <Form.Item
                  label="Title"
                  name="title"
                  rules={[
                    {
                      validator: checkFeild,
                      require: true,
                      message: 'Please input your title!',
                    },
                  ]}
                >
                  <Input placeholder="" allowClear />
                </Form.Item>
                <Form.Item
                  label="Description"
                  name="description"
                  rules={[
                    {
                      validator: checkFeild,
                      require: true,
                      message: 'Please input your description!',
                    },
                  ]}
                >
                  <TextArea
                    placeholder=""
                    autoSize={{ minRows: 3, maxRows: 3 }}
                  />
                </Form.Item>
                <Form.Item
                  label="Thumbnail"
                  name="Thumbnail"
                >
                <Upload
                  name="Thumbnail"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  customRequest={onUploadThumbnailAction}
                  onChange={onUploadThumbnailChange}
                >
                  {thumbnailUrl ? <img src={thumbnailUrl} alt="thumbnail" className="upload-thumbnail-img" /> : uploadButton}
                </Upload>
                </Form.Item>
                <span className="margin-buttom">  </span>
              </div>
            </div>
            <div className="upload-type">
              <div className="upload-type-container">
                <h1> Others </h1>
                <div className="line" />

                <div className="upload-form-container">
                  <Form.Item
                    label="Tags"
                    name="tags"
                  >
                    <Select mode="tags" style={{ width: '100%' }} placeholder="Video Tags" />
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
        </div>
      </main>
    </Style>
  );
};

export default CreateVideoForm;
