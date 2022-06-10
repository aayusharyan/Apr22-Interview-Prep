import React from 'react'
import Container from '@mui/material/Container';
import PostList from '../components/PostList';

const Home = () => {
  return (
    <>
      <Container fixed>
        <PostList />
      </Container>
    </>
  )
}

export default Home