import React from 'react'

const MainCOntents = () => {
  return (
    // 画像の自動再生
    <div id="carouselExampleSlidesOnly" class="carousel slide mb-5" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <a href="#">
                    <img src="images/bg.jpg" class="d-block w-100" alt="" />
                </a>
            </div>
            <div class="carousel-item">
                <a href="#">
                    <img src="images/blog1.jpg" class="d-block w-100" alt="" />
                </a>
            </div>
            <div class="carousel-item">
                <a href="#">
                    <img src="images/img2.jpg" class="d-block w-100" alt=""> /</img>
                </a>
            </div>
        </div>
    </div>
  )
}

export default MainCOntents