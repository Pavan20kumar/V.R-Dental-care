import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';

const testimonials = [
  {
    name: 'John Doe',
    text: 'I had a great experience at V.R Dental Care. The dentist was knowledgeable and took the time to explain everything to me. Im thrilled with the results.',
    image: 'https://via.placeholder.com/150',
    rating: 4.5,
    
  },
  {
    name: 'Jane Smith',
    image: 'https://via.placeholder.com/150',
    rating: 5,

    text: 'V.R Dental Care provided me with excellent service and a beautiful smile. The staff was friendly and professional, and I highly recommend them.',

  },
  // Add more testimonials as needed
];

const getStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, i) => <FaStar key={i} />)}
      {halfStar && <FaStarHalfAlt />}
      {[...Array(emptyStars)].map((_, i) => <FaRegStar key={i + fullStars + 1} />)}
    </>
  );
};

const TestimonialCarousel = () => {
  return (
    <Fragment>

        <div className="">
            <h2 className="text-center mb-4 mt-3">What Our Patients Say</h2>
        </div>



    <Carousel>


      {testimonials.map((testimonial, index) => (
        <Carousel.Item key={index}>
          <div className="text-center">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="rounded-circle mb-4"
              style={{ width: '150px' }}
            />
            <h5>{testimonial.name}</h5>
            <p>{testimonial.role}</p>
            <p className="text-muted">{testimonial.text}</p>
            <div className="text-warning">
              {getStars(testimonial.rating)}
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </Fragment>
  );
};

export default TestimonialCarousel;