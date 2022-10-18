// import { Profile } from './Profile/Profile';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import user from 'JSON/user.json';
import data from 'JSON/data.json';

export const App = () => {
  // console.log('user', user);
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
    </>
  );
};
