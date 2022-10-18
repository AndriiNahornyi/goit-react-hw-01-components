import { Father } from './FriendList.styled';
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
export const FriendList = ({ friends }) => {
  return (
    <Father>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          key={friend.id}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </Father>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number }))
    .isRequired,
};
