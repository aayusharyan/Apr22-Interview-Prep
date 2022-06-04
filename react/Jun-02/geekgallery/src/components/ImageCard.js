import React from 'react'
import {Card} from 'react-bootstrap'

const ImageCard = (props) => {
  console.log(props.image_details);
  return (
    <>
      <Card className="bg-dark text-white mb-4" onClick={props.click}>
        <Card.Img src={props.image_details.urls.thumb} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{props.image_details.user.name}</Card.Title>
          <Card.Text>{props.image_details.description}</Card.Text>
          <Card.Text>{props.image_details.created_at}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}

export default ImageCard