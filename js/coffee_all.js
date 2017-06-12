 $.fn.extend({ //為了讓網頁無須重整即可重複使用animate css動畫效果
        animateCss: function(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass('animated ' + animationName).one(animationEnd, function() {
                $(this).removeClass('animated ' + animationName);
            });
        }
    });

$(document).ready(function() {
	/*$('ul.products_list li div').hover(function(event) {
		$(this).animateCss('animated rubberBand');
	});*/

    $(".nope").click(function(event) { // 產品列表
		event.preventDefault(); // 阻止元素發生默認的行為
	});
    

	$(".fa-bars,.fa-chevron-up").click(function(event) { // 顯示/隱藏men_list
		$('.menu_list').slideToggle(200); //兩毫秒
	});

    $('.site_banner input').click(function(event) {
        $('html,body').animate({
            scrollTop:$('#header').offset().top
        }, 800);
    });

    $(window).scroll(function() { // 當卷軸(y軸)大於250，右側liaise鈕則顯示
        if ( $(this).scrollTop() > 250){
            $('#liaise').fadeIn("fast");
        } else {
            $('#liaise').stop().fadeOut("fast");
        }
    });

    $(window).scroll(function() {
        if ( $(this).scrollTop() > 250){
            $('#go_top').fadeIn("fast");
        } else {
            $('#go_top').stop().fadeOut("fast");
        }
    });
    $('#go_top').click(function(event) {
        $('html,body').animate({ // top上升動畫
             scrollTop:$('#header').offset().top
        }, 1000);
    });

});


