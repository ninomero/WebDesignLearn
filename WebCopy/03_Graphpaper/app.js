let mainImage = document.querySelector(".carousel-item");

//ある特定の位置を超えると作動する関数
let setItemActive = (entries) => {
    entries.map((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("active-1");
        }
    });
};

let options = {};

//監視
let observer = new IntersectionObserver(setItemActive, options);

observer.observe(mainImage);

let subImage = [...document.querySelectorAll(".image")];

let setImageActive = (entires) => {
    entires.map((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("active-1");
        }
    });
};

let observer1 = new IntersectionObserver(setImageActive, options);

subImage.map((image) => {
    observer1.observe(image);
})