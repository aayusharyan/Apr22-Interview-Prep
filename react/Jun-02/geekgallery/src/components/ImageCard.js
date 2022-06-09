import React from 'react'
import {Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ImageCard = (props) => {
  const navigate = useNavigate();
  const click = () => {
    navigate(`/image/${props.image_details?.id}`);
  }
  return (
    <>
      <Card className="bg-dark text-white mb-4" onClick={click} style={{cursor: "pointer"}}>
        <Card.Img src={props.image_details?.urls?.thumb} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{props.image_details?.user.name}</Card.Title>
          <Card.Text>{props.image_details?.description}</Card.Text>
          <Card.Text>{props.image_details?.created_at}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  )
}

export default ImageCard