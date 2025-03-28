"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReviewCard from "./ReviewCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slideToSlide: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slideToSlide: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slideToSlide: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slideToSlide: 1
  },
};

type Props = {};

const ReviewSlide = (props: Props) => {
  return (
    <div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}

      >
        <ReviewCard image="/images/c1.png" name="John Doe" role="Founder Roitech" />
        <ReviewCard image="/images/c2.png" name="Chris Evans" role="Tech enterpeneur" />
        <ReviewCard image="/images/c3.png" name="Jenifer Murtingo" role="CEO" />
      </Carousel>
    </div>
  );
};

export default ReviewSlide;
