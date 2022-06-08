import { Container, Row, Col } from 'react-bootstrap';
import ImageCard from './ImageCard';
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1
};

const ImageList = (props) => {
  return (
    <>
      <Container fluid className='mt-4'>
        <Row>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {props.images.map((single_image, idx) => {
              return <Col key={idx}><ImageCard image_details={single_image} /></Col>
            })}
          </Masonry>
        </Row>
      </Container>
    </>
  )
}

export default ImageList