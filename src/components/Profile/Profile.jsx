import PropTypes from 'prop-types';
import {
  ProfileCard,
  Description,
  UserAvatar,
  Name,
  Tag,
  Location,
  Stats,
  Section,
  Label,
  Quantity,
} from '../Profile/Profile.styled';

export const Profile = ({ username, avatar, tag, location, stats }) => {
  return (
    <ProfileCard>
      <Description>
        <UserAvatar
          className="avatar"
          src={avatar}
          width="100px"
          alt="User avatar"
        />
        <Name className="name">{username}</Name>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </Description>
      <Stats className="stats">
        <Section>
          <Label className="label">Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Section>
        <Section>
          <Label className="label">Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Section>
        <Section>
          <Label className="label">Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Section>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
