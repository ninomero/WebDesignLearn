import React from "react";
import Carousel from "react-bootstrap/Carousel";

const MainContents = () => {
  return (
    // 画像の自動再生
    <>
     <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/bg.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/blog1.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./assets/img2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
    
  );
};


export default MainContents;
