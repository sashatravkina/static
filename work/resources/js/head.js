$(window).on('load', function() {
    window.scrollTo(window.scrollX, window.scrollY - 1);
});

$(window).on('load', function() {
    tocbot.init({
        tocSelector: '.js-toc',
        contentSelector: '.article .wrapper',
        headingSelector: '.toc-header',
        includeHtml: true,
    });
});

$(window).on('load', function() {
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