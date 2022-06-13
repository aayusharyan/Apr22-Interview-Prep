import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite'
import CommentIcon from '@mui/icons-material/Comment';
import { Chip, Stack } from '@mui/material';

export default function PostCard(props) {
  return (
    <Card sx={{ maxWidth: 520 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={props.singlePost?.owner?.picture} />
        }
        title={`${props.singlePost?.owner?.firstName} ${props.singlePost?.owner?.lastName}`}
        subheader={props.singlePost?.publishDate}
      />
      <CardMedia
        component="img"
        image={props.singlePost?.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.singlePost?.text}
        </Typography>

        <Stack direction="row" spacing={1} mt={1}>
          {props.singlePost?.tags?.map((singleTag, idx) => {
            return (
              <Chip label={`#${singleTag}`} variant="outlined" key={idx} size="small" style={{textTransform: "capitalize"}} onClick={() => {}} />
            );
          })}
        </Stack>


      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Typography variant="caption" display="block" gutterBottom>
          {props.singlePost?.likes} Likes
        </Typography>
        <IconButton style={{ marginLeft: "auto" }}>
          <CommentIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
