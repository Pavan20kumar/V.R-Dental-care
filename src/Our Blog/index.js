// OurBlog.jsx
import React, { useState } from 'react';
import './OurBlog.css';

const OurBlog = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const blogPosts = [
    {
      id: 1,
      image: './blog/blog-1.jpg',
      title: 'Cras accumsan nulla nec lacus ultricies placerat.',
      description: 'Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.',
      link: '',
    },
    {
      id: 2,
      image: '/blog/blog-2.jpg',
      title: 'The Importance of Regular Dental Check-ups',
      description: 'Discover why it\'s crucial to visit your dentist regularly for check-ups and cleanings.',
      link: '',
    },
    {
      id: 3,
      image: './blog/blog-3.jpg',
      title: 'Cosmetic Dentistry: Enhancing Your Smile',
      description: 'Explore the various cosmetic dental procedures available to improve your smile.',
      link: '',
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? blogPosts.length - 1 : currentSlide - 1);
  };

  const handleNextSlide = () => {
    setCurrentSlide(currentSlide === blogPosts.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <a name="our-blog">
    <div className="our-blog">
      <h2>Our Blog</h2>
      <div className="carousel">
        <button className="prev" onClick={handlePrevSlide}>&#8249;</button>
        <div className="carousel-slide">
          <img src={blogPosts[currentSlide].image} alt={blogPosts[currentSlide].title} />
          <div className="slide-content">
            <h3>{blogPosts[currentSlide].title}</h3>
            <p>{blogPosts[currentSlide].description}</p>
            <a href={blogPosts[currentSlide].link} className="read-more">Read More</a>
          </div>
        </div>
        <button className="next" onClick={handleNextSlide}>&#8250;</button>
      </div>
    </div>
    </a>
  );
};

export default OurBlog;
