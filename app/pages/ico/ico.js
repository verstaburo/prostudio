/* eslint-disable */

import * as Snap from 'snapsvg';

const $ = window.$;

$(document).ready(function () {


  var windowWidth = $(window).width();
  var svg = Snap('#ico-svg');
  var svgWidth = $('.ico-uslugi__svg-wrap').width();
  // отрисовка stroke
  if (windowWidth > 1292) {
    var pathAdaptive = 'm 11 11 h 1104 c 195,0, 195,284, 0,284 l -960 0 c -195,0, -195,284, 0,284 h 1060';
    var svgWidth = 1280;
    var svgHeight = 600;


  } else if (windowWidth <= 1292) {

    // Считаем длину линий

    var pathWidth = svgWidth - 10;
    var cercleWidht = 148.5;
    var lineWidht = pathWidth - cercleWidht*2;
    var firstLine = pathWidth - cercleWidht;
    var lastLine = pathWidth - cercleWidht - 40;
    var svgHeight = 1400;

    var pathAdaptive = 'm 11 11 h ' + firstLine + 'c 195,0, 195,284, 0,284 l ' + -lineWidht + ' 0 c -195,0, -195,284, 0,284 h ' + lineWidht;
    pathAdaptive += ' c 195,0, 195,284, 0,284 l ' + -lineWidht + ' 0 c -195,0, -195,284, 0,284 h' + lastLine;

  };
  if (svg) {
    var pathBg = svg.path(pathAdaptive)
      .attr({
        id: 'stroke',
        strokeWidth: 2,
        stroke: '#1c1c1c',
      });
    var path = svg.path(pathAdaptive)
      .attr({
        id: 'stroke',
        strokeWidth: 2,
        stroke: '#00b294',
      });

    svg.attr({
      width: svgWidth,
      height: svgHeight,
      fill: 'none',
      zIndex: -1,
    });
    animateSVG();
  }

  // Вычисляем нужные блоки для активации
  function stepsAdd (persent) {

    if ($(window).width() > 1292) {
      var steps = [0, 3, 8, 13, 18, 23, 42, 47, 52, 57, 62, 74, 79, 84, 89, 94];
    } else if ($(window).width() <= 1292) {
      var steps = [0, 2, 9, 28, 36, 43, 51, 68, 77, 91, 94];
    } else if ($(window).width() <= 900) {
      var steps = [0, 3, 9, 27, 34, 44, 51, 68, 76, 91, 94];
    }


    function findSteps (steps, persent) {
      for(var i = steps.length; i > 0; i--) {
        if (persent >= steps[i]) {
          return i;
        }
      }
    }
    var stepActivided  = findSteps(steps, persent)
    $(".ico-uslugi-item").removeClass("is-active");
    for (var i = stepActivided-1; i >= 0; i--) {
      $(".ico-uslugi-item").eq(i).addClass("is-active");
    }
  }

  // Двигаем stroke и arrow при скролле
  function animateSVG() {
    if(svg) {
      var len = path.getTotalLength(),
        movePoint = svg.getPointAtLength(length),
        container = $(".ico-uslugi__svg-wrap").height(),
        contTop = $(".ico-uslugi__svg-wrap").offset().top,
        beginAnime = contTop - $(window).height() + 100,
        endAnime = beginAnime + container + 150,
        windowWidth = $(window).width();

      var  scrollTop = $(window).scrollTop(),
        persent = (scrollTop - beginAnime)/(endAnime - beginAnime),
        move = parseInt(len - (len*persent) - 4),
        moveArrow = parseInt(len*persent);

      if (persent >= 0.95) {
        move = 0;
        $("#arrow").fadeIn(300);
      }

      if (move >= 0 && $(window).width() > 749) {
        path.attr({
          stroke: '#00b294',
          strokeWidth: 2,
          fill: 'none',
          "stroke-dasharray": len +" " + len,
          "stroke-dashoffset": move
        }).animate({"stroke-dashoffset": move}, 100, mina.bounce);

        Snap.animate(moveArrow, moveArrow, function( value ) {
          movePoint = path.getPointAtLength( value );
        }, 100, mina.bounce )

        stepsAdd(persent*100);
      }
    }
  };

  $(window).on("scroll", function(){
    animateSVG();
  });

  $(window).on("resize", function(){
    if (svg) {
      var windowWidth = $(window).width();
      var svgWidth = $('.ico-uslugi__svg-wrap').width() + 60;
      if (windowWidth > 1292) {
        var pathAdaptive = 'm 11 11 h 1104 c 195,0, 195,284, 0,284 l -960 0 c -195,0, -195,284, 0,284 h 1060';

        path.animate({
          'd': pathAdaptive,
        }, 500)

        pathBg.animate({
          'd': pathAdaptive,
        }, 500)

        svg.attr({
          width: svgWidth,
          height: svgHeight,
          fill: 'none',
          zIndex: -1,
        });

        //initArrow();
        animateSVG();

      } else if (windowWidth >=768) {

        // Считаем длину линий
        var pathWidth = svgWidth - 66;
        var cercleWidht = 148.5;
        var lineWidht = pathWidth - cercleWidht*2;
        var firstLine = pathWidth - cercleWidht;
        var lastLine = pathWidth - cercleWidht - 40;

        var pathAdaptive = 'm 11 11 h ' + firstLine + 'c 195,0, 195,284, 0,284 l ' + -lineWidht + ' 0 c -195,0, -195,284, 0,284 h ' + lineWidht;
        pathAdaptive += ' c 195,0, 195,284, 0,284 l ' + -lineWidht + ' 0 c -195,0, -195,284, 0,284 h' + lastLine;

        path.animate({
          'd': pathAdaptive,
        }, 500)

        pathBg.animate({
          'd': pathAdaptive,
        }, 500)

        svg.attr({
          width: svgWidth,
          height: 1400,
          fill: 'none',
          zIndex: -1,
        });


        animateSVG();
      };
    };
  })

});
/* eslint-enable */
