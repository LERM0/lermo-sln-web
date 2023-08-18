import { Row, Col, Card, Avatar, Button } from 'antd';
import Styled from './style';

const { Meta } = Card;

const ProfileCard = ({ avatar, username, follower, onClickFollowBtn, about }) => {
  let followComponent;

  if (follower?.isFollow) {
    followComponent = (
      <Button className="btn-follow" type="primary" onClick={onClickFollowBtn}>
        {' '}
        UNFOLLOW{' '}
      </Button>
    );
  } else {
    followComponent = (
      <Button className="btn-follow" type="primary" onClick={onClickFollowBtn}>
        {' '}
        FOLLOW{' '}
      </Button>
    );
  }

  return (
    <Styled>
      <div className="profile-container">
        <Card className="material" cover={<Avatar src={avatar} />}>
          <h3> {username} </h3>

          <span className="col-follow">{follower ? `${follower.follower} Follower` : ''}</span>

          <span className="about-text">{about}</span>

          {followComponent}
        </Card>
      </div>
    </Styled>
  );
};

export default ProfileCard;
