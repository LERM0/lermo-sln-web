import { Upload, Button } from 'antd';
import Style from './style';

const ProfileBanner = (props) => {
  const { banner, editBanner, onUploadBanner, onUploadBannerChange } = props;

  let BaseCompoent = <></>;
  if (editBanner) {
    BaseCompoent = (
      <div className="banner-container material">
        {banner ? (
          <img className="banner-edit" src={banner} alt="banner" />
        ) : (
          <img className="banner-edit" alt="banner" />
        )}
        <div className="edit">
          <Upload
            accept="image/png, image/jpeg"
            customRequest={onUploadBanner}
            showUploadList={false}
            onChange={onUploadBannerChange}
          >
            <Button tyoe="primary">Edit</Button>
          </Upload>
        </div>
      </div>
    );
  } else if (banner) {
    BaseCompoent = <img src={banner} alt="banner" />;
  }
  return <Style className="material">{BaseCompoent}</Style>;
};
export default ProfileBanner;
