import React from 'react'

const Video = () => {
  return (
    <>
      <video controls width="250" autopictureinpicture={true}>
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm" type="video/webm" />
        <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
    </>
  )
}

export default Video;