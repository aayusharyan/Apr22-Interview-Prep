import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {
  const params = useParams();
  const [imageData, setImageData] = useState({});
  
  useEffect(() =>{
    //Fetch the Detail and save in state
    axios.get(`https://api.unsplash.com/photos/${params.id}?per_page=20&client_id=${process.env.REACT_APP_API_KEY}`)
    .then(response => setImageData(response.data));
  }, [params])
  
  return (
    <>
      {imageData.id ? (
      <Container fluid style={{backgroundColor: `${imageData?.color}35`}} className="p-5">
        <Row>
          <Col md={6}>
            <img style={{ maxWidth: "100%", maxHeight: "75vh", borderRadius: "5px" }} src={imageData?.urls?.full} alt="Detail" />
          </Col>
          <Col md={6}>
            <h3>Uploaded By: {imageData?.user?.name} (@{imageData?.user?.id})</h3>
            <h4>Upload Date: {imageData?.created_at}</h4>
            <hr />
            {imageData?.description ? (
              <>
                <h5>Description:</h5>
                <h6>{imageData?.description}</h6>
                <hr />
              </>
            ) : false}
            <h6>Width: {imageData?.width}</h6>
            <h6>Height: {imageData?.height}</h6>
            <br />
            <hr />
            <Button variant="primary" style={{backgroundColor: imageData?.color, borderColor: imageData?.color}} href={imageData?.links?.download} target="_blank">Download</Button>
          </Col>
        </Row>
      </Container>
      ) : <h4>Loading...</h4>}
    </>
  )
}

export default Detail