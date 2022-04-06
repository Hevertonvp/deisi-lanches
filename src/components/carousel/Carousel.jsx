import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import styled from "styled-components";


const CarouselPhotoContainer = styled.div`
height: 100em;
width: 200em;
overflow: hidden;
@media (max-width:2000px){
    height: 55em;
    width: 120em;
}
img{
width: 100%;
height: 100%;
}
`



function DemoCarousel() {
    return (
        <Carousel interval={5000} autoPlay autoFocus infiniteLoop swipeable emulateTouch >
            <CarouselPhotoContainer>
                <img alt="" src="/images/carousel1.jpg" />

            </CarouselPhotoContainer>
            <CarouselPhotoContainer>
                <img alt="" src="/images/carousel2.jpg" />

            </CarouselPhotoContainer>
            <CarouselPhotoContainer>
                <img alt="" src="/images/carousel3.jpg" />

            </CarouselPhotoContainer>
        </Carousel>
    )
}

export default DemoCarousel