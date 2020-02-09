$(document).ready(function() { 
    window.scrollTo(window.scrollX, window.scrollY - 1);
}); 

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

$(document).ready(function() {
    tocbot.init({
        // Where to render the table of contents.
        tocSelector: '.js-toc',
        // Where to grab the headings to build the table of contents.
        contentSelector: '.article .wrapper',
        // Which headings to grab inside of the contentSelector element.
        headingSelector: '.toc-header',
        // For headings inside relative or absolute positioned containers within content.
        hasInnerContainers: false,
    });
});

$(function() {
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

$(document).ready(function(){
    jQuery(".responsive-headline").fitText(1.2, { minFontSize: '24px', maxFontSize: '48px' });
    jQuery(".responsive-subtitle").fitText(2.4, { minFontSize: '18px', maxFontSize: '24px' });

    jQuery(".responsive-h2").fitText(1.1, { minFontSize: '24px', maxFontSize: '32px' });
    jQuery(".responsive-h2-sub").fitText(0.8, { minFontSize: '24px', maxFontSize: '36px' });
});

$(function() {
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

$(function(){
    $(".load-button").on("click",function(){
        var btndom = $(this);
            btndom.addClass("loading-start");
            btndom.attr("disabled",true);
          
        setTimeout(function(){
            btndom.removeClass("loading-start").removeAttr("disabled");
        }, 3000);
    });
});

$(document).ready(function(){
    $('#protect-checkbox').click(function(){
        if($(this).is(":checked")){
            $('.header-form .check').addClass('checked');
            $('.header-form .uncheck').addClass('unchecked');
            $('.header-form .load-button').addClass('button-red');
        }
        else if($(this).is(":not(:checked)")){
            $('.header-form .check').removeClass('checked');
            $('.header-form .uncheck').removeClass('unchecked');
            $('.header-form .load-button').removeClass('button-red');
        }
    });
    $('#protect-footer-checkbox').click(function(){
        if($(this).is(":checked")){
            $('.footer-form .check').addClass('checked');
            $('.footer-form .uncheck').addClass('unchecked');
            $('.footer-form .load-button').addClass('button-red');
        }
        else if($(this).is(":not(:checked)")){
            $('.footer-form .check').removeClass('checked');
            $('.footer-form .uncheck').removeClass('unchecked');
            $('.footer-form .load-button').removeClass('button-red');
        }
    });
});

$(function(){
    $('#verticalCarousel1').carousel({
        interval: 7000  
    })

    $('#verticalCarousel2').carousel({
        interval: 8000  
    })
});

$(document).ready(function() {
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