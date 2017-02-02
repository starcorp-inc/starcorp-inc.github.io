setInterval(expel, 1);

function expel() {
 $(".lb-tt.lb-share-tt").css({"display": "none"});
 $(".lb-tooltip-tt").css({"display": "none"});
 $('.lb-style-black .lb-like,.lb-style-black .lb-dislike').css({"background-color": "rgba(0, 0, 0, 0)"});
 $('.lb-count').css({"border": "none"});
 $('.lb-count').css({"color": "#FFFFFF"});
 $('.lb-count').css({"font-family": "mspsemibold"});
 $('.lb-count').css({"font-size": "14px"});
 $('.lb-like-label, .lb-dislike-label').remove();
 $('.lb-style-black .lb-like-icon').css({"background-image": "url(data/image/like.png)","width" : "16px","height" : "16px","background-size" : "100% 100%", "background-repeat" : "no-repeat"});
 $('.lb-style-black .lb-dislike-icon').css({"background-image": "url(data/image/dislike.png)","width" : "16px","height" : "16px","background-size" : "100% 100%", "background-repeat" : "no-repeat"});
}