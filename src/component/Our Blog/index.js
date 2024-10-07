import React, { useState } from 'react';
import './OurBlog.css';
import Carousel from './salid';
import { Fragment } from 'react';



const OurBlog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const blogPosts = [
    {
      id: 1,
      image: 'blog/blog-1.jpg',
      title: 'The Importance of Regular Dental Check-ups',
      description: 'Regular dental check-ups are essential for maintaining good oral health...',
    },
    {
      id: 2,
      image: 'blog/blog-2.jpg',
      title: 'Teeth Whitening: Myths and Facts',
      description: 'Teeth whitening has become a popular cosmetic dental procedure...',
    },

    {
      id: 3,
      image: 'blog/blog-3.jpg',
      title: 'Seas accumsan nulla nec lacus ultricies placerat',
      description:'Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci',
    },
    
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? blogPosts.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === blogPosts.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <Fragment >
    
    <div className="our-blog" id='Blog'>
      <h2>Our Dental Care Blog</h2>
      <Carousel
        currentSlide={currentSlide}
        blogPosts={blogPosts}
        handlePrevSlide={handlePrevSlide}
        handleNextSlide={handleNextSlide}
      />
    </div>
    </Fragment>
    
  );
};

export default OurBlog;
