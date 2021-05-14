import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';

import { InfiniteScroll } from '../../components/foundation/InfiniteScroll';
import { UserProfilePage } from '../../components/user_profile/UserProfilePage';
import { useFetch } from '../../hooks/use_fetch';
import { useInfiniteFetch } from '../../hooks/use_infinite_fetch';
import { fetchJSON } from '../../utils/fetchers';
import { NotFoundContainer } from '../NotFoundContainer';

/** @type {React.VFC} */
const UserProfileContainer = () => {
  const { username } = useParams();

  const { data: user, isLoading: isLoadingUser } = useFetch(`/api/v1/users/${username}`, fetchJSON);
  const { data: posts, fetchMore } = useInfiniteFetch(`/api/v1/users/${username}/posts`, fetchJSON);

  useEffect(() => {
    if(isLoadingUser) {
      document.title = '読込中 - CAwitter'
    }
    if(user?.name) {
      document.title = `${user.name} さんのタイムライン - CAwitter`
    }
  }, [isLoadingUser, user?.name]);

  if (user === null) {
    return <NotFoundContainer />;
  }

  return (
    <InfiniteScroll fetchMore={fetchMore}>
      <UserProfilePage timeline={posts} user={user} />
    </InfiniteScroll>
  );
};

export { UserProfileContainer };
