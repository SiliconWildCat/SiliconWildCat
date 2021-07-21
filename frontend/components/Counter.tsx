import { useDispatch, useSelector } from 'react-redux';
import { getPost, getUsers } from '../modules/counter';
import { useCallback, useEffect } from 'react';
import { useAppSelector } from '../hooks/useSelector';
import { RootState } from '../modules';
export function useSample() {
  const { post, users, loadingPost, loadingUsers } = useAppSelector(
    ({ counter, loading }: RootState) => ({
      post: counter.post,
      users: counter.users,
      loadingPost: loading['counter/GET_POST'],
      loadingUsers: loading['counter/GET_USERS'],
    })
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPost(1));
    dispatch(getUsers());
  }, [dispatch]);
  return {
    post,
    users,
    loadingPost,
    loadingUsers,
  };
}

export default function Sample() {
  const { post, users, loadingPost, loadingUsers } = useSample();
  return (
    <>
      <section>
        {loadingPost && '로딩중...'}
        {!loadingPost && post && (
          <div>
            <>
              <h3>{post.title}</h3>
              <h3>{post.body}</h3>
            </>
          </div>
        )}
      </section>
      <hr />
      <section>
        {loadingUsers && '로딩중...'}
        {!loadingUsers && users && (
          <>
            <h1>사용자 목록</h1>
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  {user.id}({user.email})
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
}
