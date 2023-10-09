// 制作実習Ⅱ 第2期プログラム
// author 0J03013 岸本昂己
$(function () {
    // 上層メニューの制御
    $('.ac-child').css("display", "none");
    $('.ac-parent').on('click', function () {
        // openクラスをつける
        $(this).toggleClass('open');
        // クリックされていないac-parentのopenクラスを取る
        $(".ac-parent").not(this).removeClass("open");
        $(this).next().slideToggle();
        $('.ac-parent').not($(this)).next('.ac-child').slideUp();
    });

    // 下層メニューの制御
    $('.ac-child__description').css("display", "none");
    $('.ac-child__item').on('click', function () {
        $(this).next().slideToggle();
        $('.ac-child__item').not($(this)).next('.ac-child__description').slideUp();
        // openクラスをつける
        $(this).toggleClass('open');
        // クリックされていないac-child__itemのopenクラスを取る
        $(".ac-child__item").not(this).removeClass("open");
    });
});
