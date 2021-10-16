// jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
//   $("#MenuButton").click(function () {
//     // $(".l-drawer-menu").toggleClass("is-show");
//     // $(".p-drawer-menu").toggleClass("is-show");
//     $(".js-drawer-open").toggleClass("open");
//     $(".drawer-menu").toggleClass("open");
//     $("html").toggleClass("is-fixed");

//   });

  // var topBtn = $('.pagetop');
  // topBtn.hide();

  // // ボタンの表示設定
  // $(window).scroll(function () {
  //   if ($(this).scrollTop() > 70) {
  //     // 指定px以上のスクロールでボタンを表示
  //     topBtn.fadeIn();
  //   } else {
  //     // 画面が指定pxより上ならボタンを非表示
  //     topBtn.fadeOut();
  //   }
  // });

  // // TOPボタンをクリックしたらスクロールして上に戻る
  // topBtn.click(function () {
  //   $('body,html').animate({
  //     scrollTop: 0
  //   }, 300, 'swing');
  //   return false;
  // });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  // $(document).on('click', 'a[href*="#"]', function () {
  //   let time = 400;
  //   let header = $('header').innerHeight();
  //   let target = $(this.hash);
  //   if (!target.length) return;
  //   let targetY = target.offset().top - header;
  //   $('html,body').animate({ scrollTop: targetY }, time, 'swing');
  //   return false;
  // });


/*************************
ドロワーメニュー
**************************/
$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    $(".drawer-menu").fadeToggle(500);
    return false;
  });
  //ページ内リンクの場合の調整
  $('.drawer-menu__list a').on('click', function() {
    $('.btn-trigger').toggleClass('active');
    $(".drawer-menu").fadeToggle(500);

  });
});

/*************************
トップへ戻るボタン：少しスクロールしてから表示する
**************************/
$(window).on('scroll',function() {
  if (100 < $(this).scrollTop()) {
      $('.to--top').addClass('is-show');
  } else {
      $('.to--top').removeClass('is-show');
  }
});

$(function() {
  var nav = $('.nav');
  //スクロールしてページトップから100に達したらクラスを付与する
  $(window).on('load scroll',function () {
      if ($(this).scrollTop() > 1000) {
        nav.addClass('active');
      } else {
        nav.removeClass('active');
      }
  });
});


/*************************
ページ内リンクの飛び先高さ調整
**************************/
$(function(){
  var headerHeight = $('header').outerHeight(); // ヘッダーについているID、クラス名など、余白を開けたい場合は + 10を追記する。
  var urlHash = location.hash; // ハッシュ値があればページ内スクロール
  if(urlHash) { // 外部リンクからのクリック時
    $('body,html').stop().scrollTop(0); // スクロールを0に戻す
    setTimeout(function(){ // ロード時の処理を待ち、時間差でスクロール実行
      var target = $(urlHash);
      var position = target.offset().top - headerHeight;
      $('body,html').stop().animate({scrollTop:position}, 500); // スクロール速度ミリ秒
    }, 100);
  }
  $('.header__item a').click(function(){ // 通常のクリック時
    var href= $(this).attr("href"); // ページ内リンク先を取得
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 500); // スクロール速度ミリ秒
    return false; // #付与なし、付与したい場合は、true
  });
});