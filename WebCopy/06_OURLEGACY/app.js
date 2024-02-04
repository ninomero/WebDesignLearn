$(function(){
    $(".menu-button").click(function(){
        $(".main-content").toggleClass("main-content-disappear");
        $(".f-nav").toggleClass("main-content-appear");
    });
});