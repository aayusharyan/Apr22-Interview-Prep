import React from 'react'
import { Paper, LinearProgress } from '@mui/material';

const PostDetail = ({ detail }) => {
  return (
    <>
      {detail !== undefined ? (
        <Paper elevation={5}>
          <img src={detail?.image} alt="Post" style={{ width: "100%", borderRadius: "5px", height: "100%" }} />
        </Paper>
      ) : (<LinearProgress />)}
    </>
  )
}

export default PostDetail