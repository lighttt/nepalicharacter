function loader(){if(0!==$(".dsn-loader .dsn-progress-page").length){new ProgressBar.Line(".dsn-loader .dsn-progress-page",{easing:"easeInOut",duration:1400,trailWidth:1,svgStyle:{width:"100%",height:"1px"},step:(e,t)=>{t.setText(Math.round(100*t.value())+" %")}}).animate(1),$(window).on("load",function(){scroller($(window));(new TimelineMax).to(".dsn-loader .dsn-progress-page",.7,{opacity:0}).to(".dsn-up",2,{ease:Bounce.easeOut,top:"-50%"}).to(".dsn-down",2,{ease:Bounce.easeOut,top:"100%"},.7).to(".dsn-loader",.1,{display:"none"});var e=$(".dsn-grid-info"),t=e.find(".dsn-slider-active");t.css("opacity",0),setTimeout(function(){t.css("opacity",1);var n=new TimelineLite;t.find(".word__wrapper .chars__wrapper").each(function(){switch(getRndInteger(0,3)){case 0:n.fromTo($(this),.05,{opacity:0,scaleY:0},{opacity:1,scaleY:1});break;case 1:n.fromTo($(this),.05,{opacity:0,scaleX:0},{opacity:1,scaleX:1});break;case 2:n.fromTo($(this),.05,{opacity:0,x:1},{opacity:1,x:0});break;case 3:n.fromTo($(this),.05,{opacity:0,y:1},{opacity:1,y:0});break;default:n.fromTo($(this),.05,{opacity:0},{opacity:1})}}),n.fromTo(e.find(".slide-meta li "),1,{opacity:0,x:-40},{ease:Back.easeOut.config(1),opacity:1,x:0}),n.fromTo(e.find(".custom-btn"),1,{opacity:0,x:-40},{ease:Back.easeOut.config(4),opacity:1,x:0})},900)}),$(".proj-container .single-image").fancybox({openEffect:"none",closeEffect:"none",speedIn:600,speedOut:200,overlayShow:!1})}}function data_overlay(){$("[data-overlay-color]").each(function(){var e=$(this),t=dsnGridRemoveAttr(e,"data-overlay-color");e.addClass("dsn-overlay"),$("body").append("<style>.dsn-overlay[data-overlay]:before{background: "+t+";}</style>")})}function background(){$(".cover-bg, section , [data-image-src]").each(function(){var e=$(this).attr("data-image-src");void 0!==e&&!1!==e&&$(this).css("background-image","url("+e+")")})}function scrolling_event(e){var t=$(".site-header").outerHeight();e.on("scroll",function(){var n=e.scrollTop(),o=$(".site-header , .header-top");n>250?(o.addClass("header-stickytop"),$(".sections").addClass("body-pt"),$("body").css("paddingTop",t)):(o.removeClass("header-stickytop"),$("body").css("paddingTop",0))})}function dsn_slider(){function e(e,t){project=e.html().trim(),e.html(""),out="";for(var n=0;n<project.length;n++)0===n&&(out+='<div class="word__wrapper">')," "!==project.charAt(n)?out+='<span class="chars__wrapper">'+project.charAt(n)+"</span>":out+="</div>"+project.charAt(n)+'<div class="word__wrapper">';out+="</div>",t.append(out)}var t=$(".dsn-grid-prev"),n=$(".dsn-grid-slider-effect"),o=$(".dsn-grid-wrapper .dsn-grid-nav-box .to_top"),a=$(".dsn-grid-wrapper .dsn-grid-nav-box .to_bottom"),i=$(".dsn-grid-hover-label"),s=$(".dsn-grid-info"),r=s.find(".dsn-slider-active"),c=$(".dsn-progress-circle"),d="",l=new TimelineMax,f=1.85;t.slick({arrows:!1,speed:1500}),n.slick({arrows:!1,asNavFor:".dsn-grid-prev",speed:1500,slidesToShow:1,draggable:!1}),o.on("click",function(){d="right",n.slick("slickPrev")}),a.on("click",function(){d="left",n.slick("slickNext")}),t.on("swipe",function(e,t,o){"left"===o?(d="left",n.slick("slickNext")):(d="right",n.slick("slickPrev"))}),s.find("h6 span").each(function(){e($(this),$(this).parent())}),s.find("h2").each(function(){e($(this),$(this))}),n.on("beforeChange",function(e,t,n,o){"left"===d?TweenMax.fromTo(i,f,{left:"100%"},{ease:Power3.easeOut,left:"-100%"}):"right"===d&&TweenMax.fromTo(i,f,{left:"-100%"},{ease:Power3.easeOut,left:"100%"}),d="",$(".word__wrapper .chars__wrapper").css("opacity","0"),s.find(".dsn-grid-info-wrapper").removeClass("dsn-slider-active"),l.reverse().progress(0),setTimeout(function(){l.play()},500)}),n.on("afterChange",function(e,t,n){var o=$(t.$slides.get(n)),a=$(".dsn-grid-num span"),i=new TimelineLite;i.fromTo(a,.5,{opacity:0,x:0},{opacity:1,ease:Back.easeIn.config(4),x:-20}),n++,a.text((n<10?"0":"")+n),i.fromTo(a,1.5,{x:-20},{ease:Back.easeOut.config(4),x:0}),(r=s.find('[data-id="'+o.data("id")+'"]')).addClass("dsn-slider-active");var c=new TimelineLite;r.find(".word__wrapper .chars__wrapper").each(function(){switch(getRndInteger(0,3)){case 0:c.fromTo($(this),.05,{opacity:0,scaleY:0},{opacity:1,scaleY:1});break;case 1:c.fromTo($(this),.05,{opacity:0,scaleX:0},{opacity:1,scaleX:1});break;case 2:c.fromTo($(this),.05,{opacity:0,x:1},{opacity:1,x:0});break;case 3:c.fromTo($(this),.05,{opacity:0,y:1},{opacity:1,y:0});break;default:c.fromTo($(this),.05,{opacity:0},{opacity:1})}}),c.fromTo(s.find(".slide-meta li "),1,{opacity:0,x:-40},{ease:Back.easeOut.config(1),opacity:1,x:0}),c.fromTo(s.find(".custom-btn"),1,{opacity:0,x:-40},{ease:Back.easeOut.config(4),opacity:1,x:0})}),n.bind("mousewheel DOMMouseScroll",function(e){e.originalEvent.wheelDelta>0||e.originalEvent.detail<0?(d="right",n.slick("slickPrev")):(d="left",n.slick("slickNext"))}),l.fromTo(c.find("svg path"),8,{"stroke-dashoffset":309},{"stroke-dashoffset":0,onComplete:function(){0!==$(".dsn-grid-root").length?(d="left",n.slick("slickNext")):l=null}}),$("body").on("mousemove",function(e){c.css({left:e.pageX-15,top:e.pageY-15})}),$(".dsn-grid-root a").on("",function(e){e.preventDefault()}),dsn_view_project(l,c)}function getRndInteger(e,t){return Math.floor(Math.random()*(t-e))+e}function slider_project(){var e=$(".proj-slider-image"),t=$(".dsn-hover");e.each(function(){var e=$(this),n="left",o=!1;e.slick({arrows:!1}),e.find(".item-project").each(function(){var a=$(this);a.find("img").on("mousemove",function(e){var i=$(this);if(a.hasClass("slick-current")){var s=e.pageX,r=i.width(),c=10*r/100,d=(r+c)/2;s>c?(o=!0,t.css("top",0),s<d?t.hasClass("dsn-left-hover")||(t.addClass("dsn-left-hover"),n="left"):s>d&&t.hasClass("dsn-left-hover")&&(t.removeClass("dsn-left-hover"),n="right"),t.find(".custom-btn").css({display:"inline-flex",left:e.pageX-35,top:e.pageY-30})):(t.css("top",""),o=!1,t.find(".custom-btn").css({display:"none"}))}else t.css("top",""),o=!1}).on("mouseleave",function(){t.find(".custom-btn").css({display:"none"}),t.css("top","")}).on("mouseenter",function(){t.find(".custom-btn").css({display:"inline-flex"})}).on("click",function(){o&&("left"===n?e.slick("slickNext"):e.slick("slickPrev"),t.find(".custom-btn").css({display:"inline-flex"}))})})})}function hoverPlayVideo(){TweenMax.set(".play-circle-01",{rotation:90,transformOrigin:"center"}),TweenMax.set(".play-circle-02",{rotation:-90,transformOrigin:"center"}),TweenMax.set(".play-perspective",{xPercent:-2,scale:.08,transformOrigin:"center 41%",perspective:1}),TweenMax.set(".play-video",{visibility:"hidden",opacity:0}),TweenMax.set(".play-triangle",{transformOrigin:"left center",transformStyle:"preserve-3d",rotationY:10,scaleX:2});var e=new TimelineMax({paused:!0}).to(".play-circle-01",.7,{opacity:.1,rotation:"+=360",strokeDasharray:"456 456",ease:Power1.easeInOut},0).to(".play-circle-02",.7,{opacity:.1,rotation:"-=360",strokeDasharray:"411 411",ease:Power1.easeInOut},0);const t=document.querySelector(".play-button");null!==t&&(t.addEventListener("mouseover",()=>e.play()),t.addEventListener("mouseleave",()=>e.reverse()))}function changeCircle(){dsnGridMouseChange("a","override-circle"),dsnGridMouseChange(".site-header a","override-circle-none")}function scroller(e){(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)||navigator.userAgent.match(/Edge/i)||navigator.userAgent.match(/MSIE 10/i)||navigator.userAgent.match(/MSIE 9/i))&&$("body").addClass("cuby-mobile");e.on("mousewheel DOMMouseScroll",function(t){t.preventDefault();var n=t.originalEvent.wheelDelta/120||-t.originalEvent.detail/3,o=e.scrollTop()-parseInt(200*n);TweenMax.to(e,.3,{scrollTo:{y:o,autoKill:!0},ease:Power4.easeOut,autoKill:!0,overwrite:10})})}function dsn_view_project(e,t){var n=$(".dsn-grid-info"),o=n.find(".dsn-grid-info-wrapper .title "),a=n.find(".dsn-grid-info-wrapper .title , .custom-btn"),i=$(".dsn-grid-current"),s=$(".dsn-grid-prev"),r=$("body"),c=new TimelineMax,d=null,l=$(window).width();$(window).on("resize",function(){l=$(window).width()}),o.on("mouseenter",function(){l>991&&(i.find(".dsn-grid-slider-effect").css({transform:"scale(1.1)"}),n.css({transform:"scale(1.1) translate3d(-40px , -50% ,0)"}),s.css({transform:"translate3d(-40px , 0 , 0)"})),e.pause()}).on("mouseleave",function(){l>991&&(i.find(".dsn-grid-slider-effect").css({transform:""}),n.css({transform:""}),s.css({transform:""})),e.resume()}),a.on("",function(t){t.preventDefault();var o=$(this).parent(".dsn-slider-active"),a=o.data("id"),l=o.data("url");e.pause(),$("body").attr("data-dsn-grid-mousemove","true"),mouseMove(),function(e){if(!c.isActive()){var t=i.find('.slick-active[data-id="'+e+'"]'),o=t.attr("data-image-src"),a=$('<header class="header-project cover-bg " data-overlay="2"></header>');a.css({position:"absolute","background-image":'url("'+o+'")',width:t.width(),height:"100%",top:0,left:t.offset().left}),r.append(a),c.staggerTo([n,s,$(".dsn-grid-nav-box")],1,{ease:Back.easeIn.config(1.7),y:"-100%",opacity:0}).to(a,1,{ease:Back.easeIn.config(1.7),width:"100%",left:0,onStart:function(){TweenMax.to(i,.1,{opacity:0})},onComplete:function(){d=l,ajaxProject(e,l,a)}})}}(a)})}function effectBackForward(){$(window).on("popstate",function(e){$("body").toggleClass("dsn-loader-active"),setTimeout(function(){$(".root").load(document.location+" .dsn-grid-color",function(){refreshScript()})},1e3)})}function nexProject(){var e=new TimelineMax;$(".project-next-box ").on("click",function(t){if(t.preventDefault(),!e.isActive()){var n=$(this),o=$("body"),a=n.data("id"),i=n.data("url"),s=n.find(".project-next-bg[data-image-src]").attr("data-image-src"),r={opacity:0,y:-100,ease:Back.easeIn.config(4)};e.to(n.find(".next-project h4 "),1,r),e.to(n.find(".next-title"),1,r,.3),e.to(n,1,{ease:Elastic.easeIn.config(1,.3),opacity:0,y:"100%",onComplete:function(){o.css("overflow","hidden");var e=$('<header class="header-project cover-bg " data-overlay="2"></header>');e.css({position:"fixed","clip-path":"circle(0% at 50% 50%)","background-image":'url("'+s+'")',width:"100%",height:"100%",top:0,left:0,transform:"translateY(100%)","z-index":9999}),o.append(e),TweenMax.to(e,2.5,{ease:Elastic.easeOut.config(1,.75),y:0,"clip-path":"circle(100% at 50% 50%)",onStart:function(){$(".dsn-grid-color").html(""),$("body,html").animate({scrollTop:0})},onComplete:function(){ajaxProject(a,i,e)}})}})}})}function ajaxProject(e,t,n){$.ajax({url:"ajax/project"+e+".html",dataType:"html",cache:!1,beforeSend:function(){$(".dsn-move").addClass("dsn-loader")},success:function(o,a,i){n.css({"z-index":9999}),$(".dsn-grid-color").html(o),setTimeout(function(){animation(n),refreshScript(),history.pushState({page:e},"project"+e,t),$(".dsn-move").removeClass("dsn-loader")},100)},error:function(e,t,n){console.log(e)}})}function animation(e){var t=$(".dsn-grid-animation");TweenMax.to(e,.5,{opacity:0,onComplete:function(){null!==e&&void 0!==e&&e.remove()}}),TweenMax.fromTo(t,1,{opacity:1,y:"100%"},{ease:Back.easeOut.config(1.7),opacity:1,x:"-50%",y:"-50%"}),TweenMax.to($("body"),1,{overflow:""})}function effectHeader(){var e=$(".content-block:not(footer .content-block)");e.length>0&&e.attr("data-aos","fade-up"),setTimeout(function(){AOS.init({duration:1e3})},1e3),setTimeout(()=>document.body.classList.add("render"),60);const t=Array.from(document.querySelectorAll("nav.demos > .demo")),n=t.length,o=t.findIndex(e=>e.classList.contains("demo--current")),a=e=>{document.body.classList.remove("render"),document.body.addEventListener("transitionend",()=>window.location=e.href)};t.forEach(e=>e.addEventListener("click",e=>{e.preventDefault(),a(e.target)})),document.addEventListener("keydown",e=>{const i=e.keyCode||e.which;let s;if(37===i)s=o>0?t[o-1]:t[n-1];else{if(39!==i)return!1;s=o<n-1?t[o+1]:t[0]}a(s)}),imagesLoaded(".glitch__img",{background:!0},()=>{document.body.classList.remove("loading"),document.body.classList.add("imgloaded")})}function hoverReveal(){class e{constructor(e){this.DOM={el:e},this.DOM.reveal=document.createElement("div"),this.DOM.reveal.className="hover-reveal",this.DOM.reveal.innerHTML=`<div class="hover-reveal__inner"><div class="hover-reveal__img" style="background-image:url(${this.DOM.el.dataset.img})"></div></div>`,this.DOM.el.appendChild(this.DOM.reveal),this.DOM.revealInner=this.DOM.reveal.querySelector(".hover-reveal__inner"),this.DOM.revealInner.style.overflow="hidden",this.DOM.revealImg=this.DOM.revealInner.querySelector(".hover-reveal__img"),this.initEvents()}initEvents(){this.positionElement=(e=>{const t=(e=>{let t=0,n=0;return e||(e=window.event),e.pageX||e.pageY?(t=e.pageX,n=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,n=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:t,y:n}})(e),n={left:document.body.scrollLeft+document.documentElement.scrollLeft,top:document.body.scrollTop+document.documentElement.scrollTop};this.DOM.reveal.style.top=`${t.y+20-n.top}px`,this.DOM.reveal.style.left=`${t.x+20-n.left}px`}),this.mouseenterFn=(e=>{this.positionElement(e),this.showImage()}),this.mousemoveFn=(e=>requestAnimationFrame(()=>{this.positionElement(e)})),this.mouseleaveFn=(()=>{this.hideImage()}),this.DOM.el.addEventListener("mouseenter",this.mouseenterFn),this.DOM.el.addEventListener("mousemove",this.mousemoveFn),this.DOM.el.addEventListener("mouseleave",this.mouseleaveFn)}showImage(){TweenMax.killTweensOf(this.DOM.revealInner),TweenMax.killTweensOf(this.DOM.revealImg),this.tl=new TimelineMax({onStart:()=>{this.DOM.reveal.style.opacity=1,TweenMax.set(this.DOM.el,{zIndex:1e3})}}).add("begin").add(new TweenMax(this.DOM.revealInner,.2,{ease:Sine.easeOut,startAt:{x:"-100%"},x:"0%"}),"begin").add(new TweenMax(this.DOM.revealImg,.2,{ease:Sine.easeOut,startAt:{x:"100%"},x:"0%"}),"begin")}hideImage(){TweenMax.killTweensOf(this.DOM.revealInner),TweenMax.killTweensOf(this.DOM.revealImg),this.tl=new TimelineMax({onStart:()=>{TweenMax.set(this.DOM.el,{zIndex:999})},onComplete:()=>{TweenMax.set(this.DOM.el,{zIndex:""}),TweenMax.set(this.DOM.reveal,{opacity:0})}}).add("begin").add(new TweenMax(this.DOM.revealInner,.2,{ease:Sine.easeOut,x:"100%"}),"begin").add(new TweenMax(this.DOM.revealImg,.2,{ease:Sine.easeOut,x:"-100%"}),"begin")}}Array.from(document.querySelectorAll('[data-fx="1"] > a, a[data-fx="1"]')).forEach(t=>new e(t)),imagesLoaded(document.querySelectorAll(".preload"),()=>document.body.classList.remove("loading"))}function navBar(){!function(){var e=void 0,t=void 0,n=function(){t.addEventListener("click",function(){return o(e,"nav-active")})};$(".nav__list-item:not(.nav__list-dropdown) ").on("click",function(){$("body").removeClass("nav-active")}),$(".nav__list-dropdown > a").on("click",function(e){e.preventDefault();var t=$(this).parent(),n=t.find("ul").css("display");$(".nav__list-dropdown").find("ul").slideUp("slow"),"block"!==n&&t.find("ul").slideDown("slow")});var o=function(e,t){e.classList.contains(t)?e.classList.remove(t):e.classList.add(t)};e=document.querySelector("body"),t=document.querySelector(".menu-icon"),document.querySelectorAll(".nav__list-item"),n()}()}function loadMore(){var e=$(".button-loadmore"),t=e.find(".dsn-load-progress-ajax"),n=e.find(".progress-text"),o=n.text(),a=e.data("url"),i=(parseInt(e.data("page")),$(".dsn-block-content"));e.on("click",function(){$.ajax({url:a,data:{},beforeSend:function(){e.addClass("dsn-loading")},success:function(a){setTimeout(function(){i.append(a),e.removeClass("dsn-loading"),t.css("width",0),n.text(o),hoverReveal(),AOS.init({duration:1e3})},500)},xhrFields:{onprogress:function(e){if(e.lengthComputable){var o=e.loaded/e.total*100;t.css("width",o+"%"),n.text(o+"%")}}}})})}function refreshScript(){var e=$(window);dsnGridMouseParallax(),dsnGridProgressCircle(e),embedVideo(),mouseMove(),loader(e),background(),scrolling_event(e),dsn_slider(),hoverPlayVideo(),slider_project(),effectHeader(),nexProject(),hoverReveal(),changeCircle(),loadMore()}!function(e){"use strict";var t=jQuery(window);loader(t),data_overlay(),background(),scrolling_event(t),dsn_slider(),hoverPlayVideo(),slider_project(),effectHeader(),nexProject(),hoverReveal(),navBar(),changeCircle(),loadMore(),effectBackForward()}();
