// import { Profile } from './Profile/Profile';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';
import { TransactionHistory } from './TransactionHistory';

import user from 'JSON/user.json';
import data from 'JSON/data.json';
import friends from 'JSON/friends.json';
import transactionHistory from 'JSON/transactionts.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      {<FriendList friends={friends} />}
      {<TransactionHistory items={transactionHistory} />}
    </>
  );
};
