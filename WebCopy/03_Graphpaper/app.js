let mainImage = document.querySelector(".carousel-item");

//ある特定の位置を超えると作動する関数
let setItemActive = (entries) => {
    console.log(entries);

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