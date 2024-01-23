let mainImage = document.querySelector(".carousel-item");
let subImage = [...document.querySelectorAll(".image")];

//ある特定の位置を超えると作動する関数
let setItemActive = (entries) => {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active-1");
    }
  });
};

//具体的にいつ発動させるのかを決めるオプション
let options = {
  rootMargin: "0px", //デフォルトで０.marginとほぼ同じ。
  threshold: 0.5, //閾値は0.2。これが１になると完全に画面におさまってから発動する
};

//監視
let observer = new IntersectionObserver(setItemActive, options);
observer.observe(mainImage);

//複数の.imageが読み込まれるたびに.active-1を付与する
subImage.map((image) => {
    observer.observe(image);
});