$(document).ready(function() {

    /*добавление классa для появления success*/
  $(document).on('click', '.button-get', function(){
    $('.button-get').addClass("off");
    $('.success').addClass("on");
    setTimeout(function(){
      $('.button-get').removeClass("off");
      $('.success').removeClass("on");
    }, 3000);
  });

  /*lang!!!!!!!!!!!!*/
  $('.lang ul li:nth-child(1) a, .lang ul li:nth-child(2) a, .lang ul li:nth-child(4) a').on('click', function(){
      $('.lang-help').addClass('active');
  })

  $('.lang-help a').on('click', function(){
      $('.lang-help').removeClass('active');
  })
  $("body").click(function(e) {
    if($(e.target).closest(".lang-help, .lang ul li:nth-child(1) a, .lang ul li:nth-child(2) a, .lang ul li:nth-child(4) a").length==0) $(".lang-help").removeClass("active");
  });

/*mobi-menu*/

  $('.icon-mobi-menu').on('click', function(){
      $('nav').addClass('active');
  })

  $('.icon-close').on('click', function(){
      $('nav').removeClass('active');
  })



  my_resize();

  //opera mini
  var operamini=Object.prototype.toString.call(window.operamini)==="[object OperaMini]";
  if(operamini){
      $('body').addClass('operaMini');
  }

  /*mobi-menu*/

  $('.icon-mobi-menu').on('click', function(){
      $('.operaMini nav').addClass('open');
  });

  $('.icon-close').on('click', function(){
      $('.operaMini nav').removeClass('active');
  });
  

  $(window).resize(function() {
    my_resize();
  });

});

function draw_calculator() {
  if ($(this).scrollTop() > $('.get-credit').offset().top) {
    $('.calculator').addClass('small');
    $('.calculator p').addClass('small');
  }
  if ($(this).scrollTop() < $('.get-credit').offset().top) {
    $('.calculator').removeClass('small');
    $('.calculator p').removeClass('small');
  }
}

function my_resize() {
  /*calculator !!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
  if (window.innerWidth > 1250) { 
      draw_calculator();
      $(window).scroll(function() {
        draw_calculator();

      });
  }else{
    $(window).unbind('scroll');
    $('.calculator').addClass('small');
    $('.calculator p').addClass('small');
  }
/* выравнивание по высоте*/
  if (window.innerWidth >= 481) {
    function setEqualHeight(columns) {
      var tallestcolumn = 0;
      columns.each(
      function()
      {
      currentHeight = $(this).height();
      if(currentHeight > tallestcolumn)
      {
      tallestcolumn = currentHeight;
      }
      }
      );
      columns.height(tallestcolumn);
    }
    /* get-credit!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
    setEqualHeight($(".get-credit-box > .step"));
    setEqualHeight($(".step > .discr"));

    /*clients!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
    setEqualHeight($(".main-box-second > .secondary-box"));

    /* reviews!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
    setEqualHeight($(".reviews-main-box > .reviews-box"));
    setEqualHeight($(" .reviews-box > .reviews-text"));

  }

  var inputs = $('.form input');
  inputs.keyup(function() {
    credit_calculator()
  });

  $('.slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".jast-numb").keypress(function( b ){
    var C = /[1-9\x25\x24\x23]/;
    var a = b.which;
    var c = String.fromCharCode(a);
    return !(a==0||a==8||a==9||a==13||c.match(C));
});

/* credit calculator*/

  /*$('.sum-installment-sum').text("0");
  $('.sum-balance-sum').text("0");*/

  function credit_calculator() {
    var a = $('#credit-amount').val();
    var b = $('#monthly-rate').val();
    var c = $('#time').val();

    var x = 2;
    var y = 3;

    if (a && b) {
      var d = a*b*x;
      $('.sum-installment-sum').text(d);
      $('.sum-balance-sum').text("0");
    }
    if(a && c) {
      var e = a*c*y; 
      $('.sum-balance-sum').text(e);
      $('.sum-installment-sum').text("0");
    }
    /*else {
      $('.sum-installment-sum').text("0");
      $('.sum-balance-sum').text("0");
    }*/
  }

}
