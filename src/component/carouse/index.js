import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.css';



function DarkVariantExample() {
  return (
    <div className='mt-2'>
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./carouse-image/first.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h4 className='fst-italic'>Create Vibrant Smiles For Healthy Lifesstyles</h4>
          <p>
Lorem ipsum dolor sit amet, consectetur cing elit.
Suscisagittis leo sit met condimentum esti.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./carouse-image/second.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h4>Caring for all your family’s dental needs.</h4>

          <p>Lorem ipsum dolor sit amet, consectetur cing elit.
          Suscisagittis leo sit met condimentum esti..</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./carouse-image/thrid.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h4>A healthy smile begins with a child.</h4>




          <p>
          Lorem ipsum dolor sit amet, consectetur cing elit.
          Suscisagittis leo sit met condimentum esti..
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;