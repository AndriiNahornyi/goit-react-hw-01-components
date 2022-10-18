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
        <UserAvatar src={avatar} width="100px" alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>
      <Stats>
        <Section>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Section>
        <Section>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Section>
        <Section>
          <Label>Likes</Label>
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
