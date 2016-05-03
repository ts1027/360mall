$(function(){
    /*拖拽*/
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 0
    });

    /*轮播*/
    //头部
    var closebtn=$(".closebtn");
    console.log(closebtn);
    var header=$(".header");
    closebtn.click(function(){
        header.css({"display":"none"});
    })


});