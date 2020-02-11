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

$(window).on('pageshow',function(){
    $(".information-blocks .item-1 .button").click(function() {
        $('.information-blocks .item-1 .section-2').addClass("active");
        $('.information-blocks .item-1 .section-2').removeClass("hidden");

        $('.information-blocks .item-1 .section-1').addClass("hidden");
        $('.information-blocks .item-1 .section-1').removeClass("active");
    });
});

$(window).on('pageshow',function(){
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

$(window).on('pageshow',function(){
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
            e.checked = !0, document.querySelector(`img[data-id='${e.dataset.id}']`).classList.add("js-img_active"), animate({
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

$(window).on('pageshow',function(){
    jQuery(".responsive-headline").fitText(1.2, { minFontSize: '24px', maxFontSize: '48px' });
    jQuery(".responsive-subtitle").fitText(2.4, { minFontSize: '18px', maxFontSize: '24px' });

    jQuery(".responsive-h2").fitText(1.1, { minFontSize: '24px', maxFontSize: '32px' });
    jQuery(".responsive-h2-sub").fitText(0.8, { minFontSize: '24px', maxFontSize: '36px' });
});

$(window).on('pageshow',function(){
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

$(window).on('pageshow',function(){
    $(".load-button").on("click",function(){
        var btndom = $(this);
            btndom.addClass("loading-start");
            btndom.attr("disabled",true);
        
        setTimeout(function(){
            btndom.removeClass("loading-start").removeAttr("disabled");
        }, 3000);
    });
});

$(window).on('pageshow',function(){
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

$(window).on('pageshow',function(){
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

$(window).on('pageshow',function(){
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

$(window).on('pageshow',function(){
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

$(window).on('pageshow',function(){
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