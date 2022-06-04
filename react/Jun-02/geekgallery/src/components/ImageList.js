import {Container, Row, Col} from 'react-bootstrap';
import ImageCard from './ImageCard';
import Masonry from 'masonry-layout';

const ImageList = (props) => {
  return (
    <>
      <Container fluid className='mt-4'>
        <Row>
            {props.images.map((single_image, idx) => {
              return <Col sm={6} lg={4} xl={3} xxl={2} key={idx}><ImageCard click={props.cardClick} image_details={single_image} /></Col>
            })}
        </Row>
      </Container>
    </>
  )
}

export default ImageList