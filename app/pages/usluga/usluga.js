/* eslint-disable */

import * as Snap from 'snapsvg';

const $ = window.$;

$(document).ready(function () {
  

  var windowWidth = $(window).width();
  var svg = Snap('#steps-svg');
  var svgWidth = $('.usluga-steps__svg-wrap').width();
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
                        stroke: '#c6c6c6',
                      });
    var path = svg.path(pathAdaptive)
                  .attr({
                    id: 'stroke',
                    strokeWidth: 2,
                    stroke: '#0081cb',
                  });

    svg.attr({
      width: svgWidth,
      height: svgHeight,
      fill: 'none',
      zIndex: -1,
    });
    
    var arrow = svg.polyline('0, 0, 12, 11, 0, 22')
                    .attr({
                      id: 'arrow',
                      strokeWidth: 2,
                      stroke: '#0081cb'
                    });
    initArrow(path);
    animateSVG();
  }
  // рисуем стрелку
  function initArrow(path){
    var arrowGroup = svg.g( arrow ), // Group polyline 
    movePoint = path.getPointAtLength(length);
    arrowGroup.transform( 't' + parseInt(movePoint.x - 6) + ',' + parseInt( movePoint.y - 11) + 'r' + (movePoint.alpha - 90));
  };

  // Вычисляем нужные блоки для активации
  function stepsAdd (persent) {

    if ($(window).width() > 1292) {
      var steps = [0, 3, 14, 23, 40, 52, 61, 72, 84, 93.5, 94];
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
    $(".step").removeClass("step_active");
    for (var i = stepActivided-1; i >= 0; i--) {
      $(".step").eq(i).addClass("step_active");
    }
  }

  // Двигаем stroke и arrow при скролле
  function animateSVG() {
    if(svg) {
      var len = path.getTotalLength(),
          movePoint = svg.getPointAtLength(length),
          container = $(".usluga-steps__svg-wrap").height(),
          contTop = $(".usluga-steps__svg-wrap").offset().top,
          beginAnime = contTop - container -100,
          endAnime = beginAnime + container - 1500,
          windowWidth = $(window).width();

        if(windowWidth <= 1292) {
          beginAnime = contTop -750;
        }    

      var  scrollTop = $(window).scrollTop(),
        persent = (scrollTop - beginAnime)/( endAnime),
        move = parseInt(len - (len*persent)),
        moveArrow = parseInt(len*persent);

          

      if (persent >= 0.95) {
        move = 0;
        $("#arrow").fadeIn(300);
      }

      if (move >= 0 && $(window).width() > 749) {
        path.attr({
          stroke: '#0081cb',
          strokeWidth: 2,
          fill: 'none',
          "stroke-dasharray": len +" " + len,
          "stroke-dashoffset": move
        }).animate({"stroke-dashoffset": move}, 100, mina.bounce);
        var arrowGroup = svg.g( arrow );

        Snap.animate(moveArrow, moveArrow, function( value ) {
          movePoint = path.getPointAtLength( value );
          if (persent >= 0.95) {
            arrow.addClass("hide");
            $(".usluga-steps__done").addClass("usluga-steps__done_active");
          } else {
            arrow.removeClass("hide");
            $(".usluga-steps__done").removeClass("usluga-steps__done_active");
            arrow.transform( 't' + parseInt(movePoint.x - 6) + ',' + parseInt( movePoint.y - 11) + 'r' + (movePoint.alpha + 180));
          }
          if(persent <= 0 ) {
            arrow.addClass("hide");
          }

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
      var svgWidth = $('.usluga-steps__svg-wrap').width() + 60;
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
