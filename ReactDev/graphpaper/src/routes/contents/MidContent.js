import React from "react";

const MidContent = () => {
  return (
    // container-fluidを使用することで画面全体を使用する
    <div class="container-fluid">
      <div class="row g-lg-5">
        {/* left-content */}
        <div class="left-content col-lg-6">
          <div class="image">
            <img src="images/bg.jpg" class="img-fluid" />
          </div>
          <h3 class="article-meta">
            <span>NEWS</span>
            <time datetime="2023/12/06 WED">2023/12/06 WED</time>
          </h3>
          <h2 class="article-title">
            <a href="#" title="">
              Aerta for Graphpaper 発売のお知らせ
            </a>
          </h2>
        </div>
        {/* right content */}
        <div class="right-content col-lg-6">
          <div class="image">
            <img src="images/bg.jpg" class="img-fluid" />
          </div>
          <h3 class="article-meta">
            <span>STORIES</span>
            <time datetime="2023/12/06 WED">2023/01/07 SAT</time>
          </h3>
          <h2 class="article-title">
            <a href="#" title="">
              構想数年、ついに完成 新定番のアンダーウェア
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MidContent;
