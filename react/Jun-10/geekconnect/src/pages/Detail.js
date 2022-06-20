import { Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CommentList from '../components/CommentList';
import PostDetail from '../components/PostDetail';
import { dummyapi } from '../util';
import { Link } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState();
  const [comments, setComments] = useState();

  useEffect(_ => {
    (async _ => {
      const response = await dummyapi.get(`post/${id}`);
      console.log(response.data);
      setDetail(response.data);
    })();

    (async _ => {
      const response = await dummyapi.get(`/post/${id}/comment`);
      console.log(response.data.data);
      setComments(response.data.data);
    })();
  }, [id]);
  return (
    <>
      <Container style={{ maxWidth: "520px" }}>
        <Stack mt={4} gap={4}>
          <PostDetail detail={detail} />
          <Typography variant='h6'>{detail?.text}
            <Typography variant="caption">
              {' '}-{' '}
              <Link to={`/profile/${detail?.owner?.id}`}>
                {detail?.owner?.firstName} {detail?.owner?.lastName}
              </Link>

            </Typography>

          </Typography>

          <CommentList commentList={comments} />
        </Stack>
      </Container>
    </>
  )
}

export default Detail