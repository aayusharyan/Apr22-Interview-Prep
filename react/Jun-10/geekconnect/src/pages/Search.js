import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { dummyapi } from '../util';
import { Container, LinearProgress } from '@mui/material';
import PostList from '../components/PostList';
import SearchBasicCard from '../components/SearchBasicCard';

const Search = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setPosts([]);
    (async _ => {
      if (searchParams.has('q')) {
        const response = await dummyapi.get(`/tag/${searchParams.get('q')}/post`);
        console.log(response.data.data);
        setPosts(response.data.data);
        setPageNumber(1);
      } else {
        navigate('/');
      }
    })();
  }, [searchParams, navigate]);

  const loadMore = async () => {
    const response = await dummyapi.get(`/tag/${searchParams.get('q')}/post?page=${pageNumber}`);
    const postsArr = response?.data?.data ?? [];
    setPosts(oldPosts => [...oldPosts, ...postsArr]);
    setPageNumber(page => page + 1);
  }

  return (
    <>
      <Container fixed>
        <SearchBasicCard query={searchParams.get('q')} />
        {posts.length === 0 ? (
          <LinearProgress style={{margin: "1.5rem 0.75rem 1.5rem 0.75rem"}} />
        ) : (
          <PostList posts={posts} loadMore={loadMore} />
        )}
      </Container>
    </>
  )
}

export default Search