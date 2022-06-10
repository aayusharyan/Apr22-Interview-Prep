import React from 'react'
import { Stack, Button } from '@mui/material'
import PostCard from './PostCard';



const PostList = () => {
  const arr = [true, true, true, true, true, true];
  return (
    <Stack spacing={2} mt={4} mb={4} alignItems="center">
      {arr.map((_, idx) => {
        return (
          <PostCard key={idx} />
        )
      })}
      <Button variant="text">Load More...</Button>
    </Stack>
  )
}

export default PostList