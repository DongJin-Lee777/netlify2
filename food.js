$(function() {
    var topArrow = $("#topArrow");

    $("ul#menu_imgs li img").click(function() {
        var target = $(this).attr("src").substring(8).split(".")[0];
        $(".action").removeClass('action');
        $("#"+target).addClass('action');
    })

    $(window).scroll(function() {
        var current_scroll = $(window).scrollTop();
        if(current_scroll > 755) {
            topArrow.show();
        } else {
            topArrow.hide();
        }
    })

    $("#topArrow").click(function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 500 );
        return false;
    })

    $(window).resize(function(){
        var w = $(window).width();
        var w_half = w/2;

        var img_w = $("#brand_img").width();
        var map_w = $("#map").width();

        var margin_value = [w_half-img_w, w_half-map_w];

        $("#brand_img").css("margin-left", w_half+"px");
        $("#map").css("margin-left", w_half+"px");

        if(w > 1103){
            $("#brand_img").css("margin-left", margin_value[0]+"px");
            $("#map").css("margin-left", margin_value[1]+"px");
        } else {
            $("#brand_img").css("margin-left", 0+"px");
            $("#map").css("margin-left", 0+"px");
        }
    })
})