import { Avatar, Upload } from 'antd';
import { UserOutlined, EditOutlined } from '@ant-design/icons';

import Styled from './style';

const ProfileImage = ({
  avatarUrl, editAvatar, onUploadAvatar, onUploadAvatarChange,
}) => (

  <Styled>
    { editAvatar
      ? (
        <div className="avatar-container ">
          <Avatar
            className="avartar"
            src={avatarUrl}
          />
          <div className="edit">
            <Upload
              showUploadList={false}
              accept="image/png, image/jpeg"
              customRequest={onUploadAvatar}
              onChange={onUploadAvatarChange}
            >
              <EditOutlined />
            </Upload>
          </div>
        </div>
      ) : (
        <Avatar
          className="avartar"
          src=""
          icon={<EditOutlined />}
        />
      )}

  </Styled>
);

export default ProfileImage;
