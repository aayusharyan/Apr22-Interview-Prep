import React from 'react'
import Comment from './Comment'

const CommentList = ({commentList}) => {
  return (
    <>
      {commentList?.map((singleComment, idx) => {
        return (
          <Comment singleComment={singleComment} key={idx}/>
        );
      })}
    </>
  )
}

export default CommentList