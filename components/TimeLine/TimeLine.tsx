"use client"
import React, { useState, useRef, useEffect } from 'react';
import { TimeLineData } from '../../constants/constants';
import {
  Section,
  SectionDivider,
  SectionTitle,
} from '@/styles/GlobalComponents';

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return node.scrollTo({ left, behavior: 'smooth' });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );
      setActiveItem(index);
    }
  };

  // Navigate to previous item
  const handlePrev = () => {
    if (activeItem > 0) {
      const newIndex = activeItem - 1;
      setActiveItem(newIndex);
      handleClick({ preventDefault: () => {} }, newIndex);
    }
  };

  // Navigate to next item
  const handleNext = () => {
    if (activeItem < TimeLineData.length - 1) {
      const newIndex = activeItem + 1;
      setActiveItem(newIndex);
      handleClick({ preventDefault: () => {} }, newIndex);
    }
  };

  // snap back to beginning of scroll when window is resized
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Section id="about">
      <div className="">
        <div className="flex gap-2 flex-col">
          <SectionTitle main> About Me</SectionTitle>
          <SectionDivider />
        </div>

        {/* Section Title */}

        {/* Section Text */}
        <p className="text-lg text-gray-300 mb-12 max-w-3xl">
          I am a friendly and dedicated full stack developer with a passion for
          software development. I have experience in a range of technologies,
          from front-end development using HTML, CSS, and JavaScript to back-end
          development using Node.js, Express.js, and MongoDB. With a strong
          understanding of RESTful APIs, Git and version control, and testing, I
          am confident in my ability to bring your business to the next level.
          Let's work together to create amazing software that can make the world
          a better place.
        </p>

        {/* Timeline Carousel Container */}
        <div className="relative mb-16 mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8 ">
          {/* Timeline Carousel */}
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide snap-x snap-mandatory scroll-smooth"
          >
            {TimeLineData.map((item, index) => (
              <div
                key={index}
                className={`
                  flex-shrink-0 w-full max-w-xs sm:max-w-sm snap-start
                  ${activeItem === index ? 'opacity-100' : 'opacity-70'}
                `}
                onClick={(e) => handleClick(e, index)}
              >
                <div className="bg-gray-900 rounded-lg p-6 h-full border border-gray-800 cursor-pointer transition-all duration-300 hover:border-gray-600">
                  <div className="flex items-center mb-4">
                    <h4 className="font-bold text-2xl bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                      {item.year}
                    </h4>
                    <div className="h-px bg-gray-700 flex-grow ml-4"></div>
                  </div>
                  <p className="text-sm leading-relaxed text-white/75">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            disabled={activeItem === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-900 p-2 rounded-full text-white disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={activeItem === TimeLineData.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-900 p-2 rounded-full text-white disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex justify-center items-center mx-auto mb-12">
          {TimeLineData.map((item, index) => (
            <button
              key={index}
              className={`
                box-border bg-transparent p-1 border-none cursor-pointer mx-1
                ${activeItem === index ? 'opacity-100' : 'opacity-30'}
                focus:outline-none transition-all duration-300
              `}
              onClick={(e) => handleClick(e, index)}
              type="button"
              aria-label={`Go to ${item.year}`}
            >
              <div
                className={`bg-white rounded-full w-2 h-2 ${
                  activeItem === index ? 'scale-150' : ''
                }`}
              ></div>
            </button>
          ))}
        </div>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
      </div>
    </Section>
  );
};

export default Timeline;
