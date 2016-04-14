// Copyright 2010 htmldrive.net Inc.
/**
 * @projectHomepage: http://www.htmldrive.net/go/to/desSlideshow
 * @projectDescription: Stylish featured image slideshow jQuery plugin.
 * @author htmldrive.net
 * More script and css style : htmldrive.net
 * @version 1.0
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * Modified for Radio GLUD project by Jorge Ulises Useche Cuellar
 */
(function(a){
    a.fn.slideshow=function(p){
        var p=p||{};

        var autoplay=p&&p.autoplay?p.autoplay:"enable";
        var slideshow_width=p&&p.slideshow_width?p.slideshow_width:"600";
        var slideshow_height=p&&p.slideshow_height?p.slideshow_height:"250";
        var thumbnail_width=p&&p.thumbnail_width?p.thumbnail_width:"200";
        var time_Interval = p&&p.time_Interval?p.time_Interval:"4000";
        var directory=p&&p.directory?p.directory:"img/slides/";
        var slidebottom_hpadding=p&&p.slidebottom_hpadding?p.slidebottom_hpadding:"50";
        slideshow_height = parseInt(slideshow_height);
        slideshow_width = parseInt(slideshow_width);
        slidebottom_hpadding = parseInt(slidebottom_hpadding);
        time_Interval = parseInt(time_Interval);
        var g=a(this);
        var current = -1;
        var y=g.children(".slideimage").children("li").length;
        var v;
        var w;
        if(y==0){
            g.append("Require content");
            return null
        }
        init();
        if(autoplay == "enable"){
            g.find(".slideimage").css("display","block");
            g.find(".slidebottom").css("display","block");
            g.css("background","none");
            play();
        }else{
            g.find(".slideimage").css("display","block");
            g.find(".slidebottom").css("display","block");
            g.css("background","none");
            current = 0;
            showpic();
        }
        g.find(".slidebottom").children("li").hover(
            function(){
                var index = g.find(".slidebottom").children("li").index($(this));
                if(index != current){
                    current = index;
                    showpic();
                }
            },
            function(){

            }
        );
        g.hover(
            function(){

            },
            function(){
                if(autoplay == "enable"){
                    v=setTimeout(play,time_Interval);
                }
            }
        );
        function init(){
            g.find("slideimage").css("width",slideshow_width+"px").css("height",slideshow_height+"px").css("position","relative").css("font-family","Verdana,Geneva,sans-serif").css("border-top","0px solid #CCCCCC").css("overflow","hidden");
            g.find("a").css("color","#000");
            g.find("img").css("border","none");
            g.find("ul").css("margin","0px").css("padding","0px");
            g.find("li").css("margin","0px").css("padding","0px").css("list-style","none");
            g.find(".slideimage").css("position","relative");
            g.find(".slideimage").children("li").css("position","absolute").css("overflow","hidden");
            g.find(".slideimage").children("li").children("p").css("position","absolute").css("padding","5px").css("margin","0px").css("bottom","0px").css("opacity","0.6").css("background-color","#000").css("color","#FFF").css("font-size","12px").css("width","100%");
            g.find(".slidebottom").css("width",thumbnail_width+"px").css("height",slideshow_height+"px").css("position","absolute").css("padding-left",slidebottom_hpadding+"px");
            g.find(".slidebottom").children("li").css("height","43px").css("background-image","url("+directory+"flashtext-bg.jpg)").css("line-height","43px").css("border-bottom","1px solid #CCCCCC").css("border-right","1px solid #CCCCCC");
            g.find(".slidebottom").children("li").children("a").css("text-decoration","none").css("height","40px").css("display","block").css("padding-left","5px").css("font-size","14px");
            g.find(".slidebottom").children("li").css("margin-left","1px");
            g.find(".slideimage").children("li").hide();
        }
        function showpic(){
            clearTimeout(v);
            g.find(".slidebottom").children("li").css("background-image","url("+directory+"bottom.gif)").css("border-bottom","0px solid #CCCCCC");
            g.find(".slidebottom").children("li").eq(current).css("background-image","url("+directory+"bottom.gif)").css("border-bottom","none");
            g.find(".slideimage").children("li").fadeOut();
            g.find(".slideimage").children("li").eq(current).fadeIn();
            g.find(".slidebottom").children("li").eq(current).animate({marginLeft: '-25px'}, "fast");
            g.find(".slidebottom").children("li").eq(w).animate({marginLeft: '0px'}, "fast");
            w = current;

        }
        function play(){
            current++;
            if(current>=y){
                current=0
            }
            showpic();
            v=setTimeout(play,time_Interval);
        }
    }
})(jQuery);
