var canvas = $(document).find("#canvas");


$(document).on('mousedown', function(){
  $('body').css('cursor', 'url(img/mobile-cursor-tap.png) 36 36, auto');
});

$(document).on('mouseup', function(){
  $('body').css('cursor', 'url(img/mobile-cursor.png) 36 36, auto');
});



// add a new problem to the list
canvas.on('mousedown', function(){
    
    $( ".inputField" ).append( "<li><input class='first' type=\"text\" placeholder=\"Route name\"><input class=\"grade\" type=\"text\" placeholder=\"Grade\"></li>" );
    $( ".inputField" ).find('input.first').focus();
});

// add a start point
var count = 0;

canvas.on('mousedown', function(e){
  count += 1;
  var x = e.pageX;
  var y = e.pageY;
  var dot = $('<div class="dot">'+ count +'</div>').css({
       'left':  x - $(document).width()/2 + $(canvas).width()/2 - 12,
       'top':   y - $(canvas).height()/2 + 66
    });

  $("#screen").append(dot);
});

canvas.on('mouseup', function(e){
  var x = e.pageX;
  var y = e.pageY;
  var dot = $('<div class="dot">'+ count +'</div>').css({
       'left':  x - $(document).width()/2 + $(canvas).width()/2 - 12,
       'top':   y - $(canvas).height()/2 + 66
    });

  $("#screen").append(dot);
});


$(document).find("#reset").on('mousedown', function(){
  $('.list').find("li").remove();
  $(document).find(".dot").remove();
  $(document).find(".crag").val("");

  count = 0;
  // alert(count);
});


// page switch

$('#reset').on('mousedown', function(){

  $(".pick").animate({
    'left': '0px'
    // 'display': 'none'
  }, 200);

  $(".draw").animate({
    'left': '375px'
    // 'display': 'inline'
  }, 200);

});

// photo choose

$('.imgList').find('img').on('mouseup', function(){

  $(".pick").animate({
    'left': '-375px'
    // 'display': 'none'
  }, 200);

  $(".draw").animate({
    'left': '0px'
    // 'display': 'inline'
  }, 200);

  // alert('click');

  var newSrc = $(this).attr('src');
  // $('.mainImg').find('img').attr('src', newSrc);
  canvas.css('background-image', 'url(\"' + newSrc + '\")');

});


// drag scroll

// var clicked = false, clickY;
// $(document).find('ul').on({
//     'mousemove': function(e) {
//         clicked && updateScrollPos(e);
//     },
//     'mousedown': function(e) {
//         clicked = true;
//         clickY = e.pageY;
//     },
//     'mouseup': function() {
//         clicked = false;
//         $('html').css('cursor', 'auto');
//     }
// });

// var updateScrollPos = function(e) {
//     $('html').css('cursor', 'row-resize');
//     $(window).scrollTop($().scrollTop() + (clickY - e.pageY));
// }

// ----------------------------------------------------

// // add a start point
// var count = 0;

// canvas.on('mousedown', function(e){
//   var x = e.pageX;
//   var y = e.pageY;
//   var div = $('<div class="dot">').css({
//        'left':  x - $('div').width()/2,
//        'top':   y - $('div').height()/2
//     });

//     var span = $('<span>'count'</span>').css({
//        'left':  x,
//        'top':   y
//     });

//   canvas.append(div);
//   canvas.append(span);
// });



// ----------------------------------------------------


// var canvas = $(document).find("#canvas");


// // add a start point
// var count = 0;

// canvas.on('mousedown', function(e){
//   var x = e.pageX;
//   var y = e.pageY;
//   var div = $('<div class="dot">').css({
//        'left':  x - $('div').width()/2,
//        'top':   y - $('div').height()/2
//     });

//     var span = $('<span>'count'</span>').css({
//        'left':  x,
//        'top':   y
//     });

//   canvas.append(div);
//   canvas.append(span);
// });

// // add a new problem to the list
// canvas.on('mouseup', function(){
//     $( ".inputField" ).append( "<li><input type=\"text\" placeholder=\"Type route name\"></li>" );
// });


// ==================================================================================







// var colors = ['#e50583', '#77f8c2'];

// $(document).on('mousemove', function(e){
//     $('div.mouse').css({
//        left:  e.pageX - $('div.mouse').width()/2,
//        top:   e.pageY - $('div.mouse').height()/2
//     });
// });

// $(document).on('mousedown', function(e){
//   var x = e.pageX;
//   var y = e.pageY;
//   var div = $('<div>').css({
//        'left':  x - $('div').width()/2,
//        'top':   y - $('div').height()/2,
//        'background': colors[Math.floor((Math.random() * 9))]
//     });

//     var p = $('<p>' + x + '/' + y + '</p>').css({
//        'left':  x + 10,
//        'top':   y
//     });

//   $(document.body).append(div);
//   $(document.body).append(p);
// });