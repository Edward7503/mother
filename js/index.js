/**
 * Created by Administrator on 2017/6/1.
 */
//        当窗口大小改变时
window.onresize=function () {
    fn();
};
function fn() {
    var window_W = $(window).width();
    var window_H = $(window).height();
    if(window_W > 760 && window_W < 960){
        $(".swiper-container").width("640px").find(".swiper-wrapper").height("1150px");
    }else if(window_W >= 960){
        $(".swiper-container").width("720px").find(".swiper-wrapper").height("1250px");
    }else {
        $(".swiper-container").width("100%").find(".swiper-wrapper").height(window_H);
    }
}
fn();
//上下滑动
var num = 0;
var mySwiper = new Swiper(".swiper-container",{
    direction : "vertical",
    // initialSlide : 8,
    onTransitionEnd: function(swiper){
        if(num != mySwiper.activeIndex){
            $(".swiper-slide").eq(num).find(".top").removeClass("bounceInDown")
                .parent(".swiper-slide").find(".left").removeClass("bounceInLeft")
                .parent(".swiper-slide").find(".right").removeClass("bounceInRight");
        }
        $(".swiper-slide").eq(mySwiper.activeIndex).find(".top").addClass("animated bounceInDown")
            .parent(".swiper-slide").find(".left").addClass("animated bounceInLeft")
            .parent(".swiper-slide").find(".right").addClass("animated bounceInRight");
        num = mySwiper.activeIndex;
    }
});
