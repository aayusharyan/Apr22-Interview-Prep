import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostList from '../components/PostList';
import ProfileDetail from '../components/ProfileDetail';
import { dummyapi } from '../util';

const Profile = () => {
  const { id } = useParams();
  
  const [detail, setDetail] = useState({});
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await dummyapi.get(`/user/${id}`);
      const data = response.data;
      setDetail(data);
    })();

    (async () => {
      const response = await dummyapi.get(`/user/${id}/post`);
      const data = response.data.data;
      setPosts(data);
      setPageNumber(1);
    })();
  }, [id]);



  const loadMore = async () => {
    const response = await dummyapi.get(`/user/${id}/post?page=${pageNumber}`);
    const postsArr = response?.data?.data ?? [];
    setPosts(oldPosts => [...oldPosts, ...postsArr]);
    setPageNumber(page => page + 1);
  }


  return (
    <>
      <Container>
        <ProfileDetail detail={detail} />
        <hr />
        <Typography variant="h6" align="center" mt={4}>All Posts</Typography>
        <PostList posts={posts} loadMore={loadMore} />
      </Container>
    </>
  )
}

export default Profile