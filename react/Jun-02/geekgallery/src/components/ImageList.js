import {Container, Row, Col} from 'react-bootstrap';
import ImageCard from './ImageCard';

const ImageList = () => {
  const arr = [true, true, true, true, true, true, true, true, true, true, true, true, true];
  return (
    <>
      <Container fluid className='mt-4'>
        <Row>
          {arr.map((_, idx) => {
            return <Col sm={4} key={idx} ><ImageCard /></Col>
          })}
        </Row>
      </Container>
    </>
  )
}

export default ImageList