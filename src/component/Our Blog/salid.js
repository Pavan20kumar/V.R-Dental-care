import React from 'react';
import './OurBlog.css';
import { Link } from 'react-scroll';

const Carousel = ({ currentSlide, blogPosts, handlePrevSlide, handleNextSlide }) => {
  return (
    <div className="carousel">
      <button className="prev" onClick={handlePrevSlide}>
        &lt;
      </button>
      <div className="carousel-slide">
        <img src={blogPosts[currentSlide].image} alt={blogPosts[currentSlide].title} />
        <div className="slide-content">
          <h3>{blogPosts[currentSlide].title}</h3>
          <p>{blogPosts[currentSlide].description}</p>
          <Link to="contact" smooth={true} duration={500} className='read-more'>
            Read More
            
          </Link>
        </div>
      </div>
      <button className="next" onClick={handleNextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
