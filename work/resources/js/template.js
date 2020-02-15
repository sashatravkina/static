$(window).on('pageshow',function() {
    window.scrollTo(window.scrollX, window.scrollY - 1);
});

$(window).on('pageshow',function(){
    tocbot.init({
        tocSelector: '.js-toc',
        contentSelector: '.article .wrapper',
        headingSelector: '.toc-header',
        includeHtml: true,
    });
});

$(window).on('pageshow',function(){
    var $window = $(window);  
    var $sidebar = $(".toc"); 
    var $sidebarHeight = $sidebar.innerHeight();   
    var $footerOffsetTop = $(".sticky-end").offset().top; 
    var $sidebarOffset = $sidebar.offset();
    
    $window.scroll(function() {
        if($window.scrollTop() > $sidebarOffset.top) {
            $sidebar.addClass("fixed");
            $sidebar.css({"top": "0"}); 
        } else {
            $sidebar.removeClass("fixed");   
            $sidebar.css({"top": "-24px"});
        }    
        if($window.scrollTop() + $sidebarHeight > $footerOffsetTop) {
            $sidebar.css({"top" : -($window.scrollTop() + $sidebarHeight - $footerOffsetTop)});        
        } else {

        }
    });  
});

$(document).ready(function() { 
    $(".information-blocks .item-1 .button").click(function() {
        $('.information-blocks .item-1 .section-2').addClass("active");
        $('.information-blocks .item-1 .section-2').removeClass("hidden");

        $('.information-blocks .item-1 .section-1').addClass("hidden");
        $('.information-blocks .item-1 .section-1').removeClass("active");
    });
});

$(document).ready(function() { 
    $(".information-blocks .item-2 .button").click(function() {
        $('.information-blocks .item-2 .section-2').addClass("active");
        $('.information-blocks .item-2 .section-2').removeClass("hidden");

        $('.information-blocks .item-2 .section-1').addClass("hidden");
        $('.information-blocks .item-2 .section-1').removeClass("active");
    });
});

/* 
$(document).ready(function() { 
    var hamburger = {
        navToggle: document.querySelector('.nav-toggle'),
        nav: document.querySelector('.nav'),
        doToggle: function(e) {
            e.preventDefault();
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
            $('html').toggleClass('scrolling');
        }
    };
    hamburger.navToggle.addEventListener('click', function(e) { 
        hamburger.doToggle(e);
    });
}());
*/

$(document).ready(function() { 
    const radioList = document.querySelector(".digital-protect__list"),
        radios = document.querySelectorAll(".digital-protect__list input"),
        images = document.querySelectorAll(".js-img"),
        animate = ({
            draw: e,
            duration: t
        }) => {
            let i = performance.now();
            requestAnimationFrame((function r(a) {
                let o = (a - i) / t;
                o > 1 && (o = 0), e(o), o < 1 && requestAnimationFrame(r)
            }))
        },
        toggle = e => {
            for (const e of images) e.classList.remove("js-img_active");
            for (const e of radios) e.removeAttribute("checked"), animate({
                duration: 0,
                draw(t) {
                    e.nextElementSibling.querySelector(".label-timer").style.width = "0%"
                }
            });
            e.checked = !0, document.querySelector(`div[data-id='${e.dataset.id}']`).classList.add("js-img_active"), animate({
                duration: 6e3,
                draw(t) {
                    e.nextElementSibling.querySelector(".label-timer").style.width = 100 * t + "%"
                }
            })
        },
        timer = (e = 0) => run = setInterval(() => {
            e == radios.length - 1 ? toggle(radios[e = 0]) : (++e, toggle(radios[e]))
        }, 6e3);
    toggle(radios[0]), timer(), radioList.onchange = e => {
        clearInterval(run), toggle(e.target), timer(e.target.dataset.id - 1)
    };
});

$('.scrolled-body').mousewheel(function(e, delta) {
    $(this).scrollLeft(this.scrollLeft + (-delta * 100));
    e.preventDefault();
});

$(document).ready(function() { 
    jQuery(".responsive-headline").fitText(1.2, { minFontSize: '24px', maxFontSize: '48px' });
    jQuery(".responsive-subtitle").fitText(2.4, { minFontSize: '18px', maxFontSize: '24px' });

    jQuery(".responsive-h2").fitText(1.1, { minFontSize: '24px', maxFontSize: '32px' });
    jQuery(".responsive-h2-sub").fitText(0.8, { minFontSize: '24px', maxFontSize: '36px' });
});

$(document).ready(function() { 
    $('.tabgroup > div').hide();
    $('.tabgroup > div:first-of-type').show();
    $('.tabs a').click(function(e){
    e.preventDefault();
        var $this = $(this),
            tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
            others = $this.closest('li').siblings().children('a'),
            target = $this.attr('href');
        others.removeClass('active');
        $this.addClass('active');
        $(tabgroup).children('div').hide();
        $(target).show();
    
    })
});

$(document).ready(function() { 
    $(".load-button").on("click",function(){
        var btndom = $(this);
            btndom.addClass("loading-start");
            btndom.attr("disabled", true);
            btndom.removeClass("loading-end");
        
        setTimeout(function(){
            btndom.removeClass("loading-start").removeAttr("disabled");
            btndom.addClass("loading-end").delay(5000).queue(function(next) {
                $(this).removeClass("loading-end");
                next();
            });
        }, 3000);
    });
});

$(document).ready(function() { 
    $('#protect-checkbox').click(function(){
        if($(this).is(":checked")){
            $('.header-form .check').addClass('checked');
            $('.header-form .uncheck').addClass('unchecked');
            $('.header-form .load-button').addClass('button-red');
            $('.header-form .checkbox').addClass('checked');
        }
        else if($(this).is(":not(:checked)")){
            $('.header-form .check').removeClass('checked');
            $('.header-form .uncheck').removeClass('unchecked');
            $('.header-form .load-button').removeClass('button-red');
            $('.header-form .checkbox').removeClass('checked');
        }
    });
});

$(document).ready(function() { 
    $('#protect-checkbox-footer').click(function(){
        if($(this).is(":checked")){
            $('.footer-form .check').addClass('checked');
            $('.footer-form .uncheck').addClass('unchecked');
            $('.footer-form .load-button').addClass('button-red');
            $('.footer-form .checkbox').addClass('checked');
        }
        else if($(this).is(":not(:checked)")){
            $('.footer-form .check').removeClass('checked');
            $('.footer-form .uncheck').removeClass('unchecked');
            $('.footer-form .load-button').removeClass('button-red');
            $('.footer-form .checkbox').removeClass('checked');
        }
    });
});

$(document).ready(function() { 
    $('#protect-checkbox-ddos1').click(function(){
        if($(this).is(":checked")){
            $('.ddos1-form .check').addClass('checked');
            $('.ddos1-form .uncheck').addClass('unchecked');
            $('.ddos1-form .load-button').addClass('button-red');
            $('.ddos1-form .checkbox').addClass('checked');
        }
        else if($(this).is(":not(:checked)")){
            $('.ddos1-form .check').removeClass('checked');
            $('.ddos1-form .uncheck').removeClass('unchecked');
            $('.ddos1-form .load-button').removeClass('button-red');
            $('.ddos1-form .checkbox').removeClass('checked');
        }
    });
});

$(document).ready(function() { 
    $('#protect-checkbox-ddos2').click(function(){
        if($(this).is(":checked")){
            $('.ddos2-form .check').addClass('checked');
            $('.ddos2-form .uncheck').addClass('unchecked');
            $('.ddos2-form .load-button').addClass('button-red');
            $('.ddos2-form .checkbox').addClass('checked');
        }
        else if($(this).is(":not(:checked)")){
            $('.ddos2-form .check').removeClass('checked');
            $('.ddos2-form .uncheck').removeClass('unchecked');
            $('.ddos2-form .load-button').removeClass('button-red');
            $('.ddos2-form .checkbox').removeClass('checked');
        }
    });
});

$(document).ready(function() { 
    $(".calculator-2 .head .bth-ruble").click(function() {
        $('.calculator-2 .head .bth-ruble').addClass("active");
        $('.calculator-2 .head .bth-dollar').removeClass("active");
    });

    $(".calculator-2 .head .bth-dollar").click(function() {
        $('.calculator-2 .head .bth-dollar').addClass("active");
        $('.calculator-2 .head .bth-ruble').removeClass("active");
    });
});

$(document).ready(function() { 
    $(".calculator-3 .head .bth-hour").click(function() {
        $('.calculator-3 .head .bth-hour').addClass("active");
        $('.calculator-3 .slider-hour').addClass("active");

        $('.calculator-3 .head .bth-day').removeClass("active");
        $('.calculator-3 .slider-day').removeClass("active");
    });

    $(".calculator-3 .head .bth-day").click(function() {
        $('.calculator-3 .head .bth-day').addClass("active");
        $('.calculator-3 .slider-day').addClass("active");

        $('.calculator-3 .head .bth-hour').removeClass("active");
        $('.calculator-3 .slider-hour').removeClass("active");
    });
});

$(document).ready(function() { 
    $('#verticalCarousel1').carousel({
        interval: 3000  
    })

    $('#verticalCarousel2').carousel({
        interval: 4000  
    })
});

function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).html()).select();
    document.execCommand("copy");
    $temp.remove();
};

$(document).ready(function() {
    slider = $('.slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        centerMode: false,
        centerPadding: '0',
        speed: 300,
        cssEase: 'ease',
        draggable: true,
        easing: 'linear',
        respondTo: 'window',
        slidesToShow: 1,
        swipeToSlide: true,
        variableWidth: true,
        focusOnChange: false,
        focusOnSelect: true
    });

    $('input[type="number"]').focus(function () {
        console.log('in');
        slider.slick("slickSetOption", "draggable", "focusOnSelect", "focusOnChange", "swipeToSlide", false, false, false, false, false);
    }).blur(function () {
        console.log('out');
        slider.slick("slickSetOption", "draggable", "focusOnSelect", "focusOnChange", "swipeToSlide", true, false, false, false, false);
    });
});

$(document).ready(function() {
    $.fn.textWidth = function(text, font) {
        if (!$.fn.textWidth.fakeEl) $.fn.textWidth.fakeEl = $('<span>').hide().appendTo(document.body);
        $.fn.textWidth.fakeEl.text(text || this.val() || this.text() || this.attr('placeholder')).css('font', font || this.css('font'));
        return $.fn.textWidth.fakeEl.width();
    };

    $('.number').on('input', function() {
        var inputWidth = $(this).textWidth();
        $(this).css({
            width: inputWidth + 15
        })
    }).trigger('input');

    function inputWidth(elem, minW, maxW) {
        elem = $(this);
        console.log(elem)
    }

    var targetElem = $('.number');

    inputWidth(targetElem);
});

$(document).ready(function() {
    Number.prototype.between  = function (a, b, inclusive) {
        var min = Math.min.apply(Math, [a,b]),
            max = Math.max.apply(Math, [a,b]);
        return inclusive ? this >= min && this <= max : this > min && this < max;
    };
 
    $('.number.cash').keydown(function(event){
        var v = parseFloat(this.value + String.fromCharCode(event.which));
        return parseFloat(v).between(1, 999, true);
    });

    $('.number.hour').keydown(function(event){
        var v = parseFloat(this.value + String.fromCharCode(event.which));
        return parseFloat(v).between(1, 24, true);
    });

    $('.number.day').keydown(function(event){
        var v = parseFloat(this.value + String.fromCharCode(event.which));
        return parseFloat(v).between(1, 31, true);
    });
});