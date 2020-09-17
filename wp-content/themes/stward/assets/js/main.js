(function($) {
    $(window).on('load resize', function() {
        $('.et_fullscreen_slider').each(function() {
            et_fullscreen_slider($(this));
        });
    });
    function et_fullscreen_slider(et_slider) {
        var et_viewport_height = $(window).height(),
            et_slider_height = $(et_slider).find('.et_pb_slider_container_inner').innerHeight(),
            $admin_bar = $('#wpadminbar'),
            $main_header = $('#main-header'),
            $top_header = $('#top-header');
        $(et_slider).height('auto');
        if ($admin_bar.length) {
            var et_viewport_height = et_viewport_height - $admin_bar.height();
        }
        if ($top_header.length) {
            var et_viewport_height = et_viewport_height - $top_header.height();
        }
        if (!$('.et_transparent_nav').length && !$('.et_vertical_nav').length) {
            var et_viewport_height = et_viewport_height - $main_header.height();
        }
        if (et_viewport_height > et_slider_height) {
            $(et_slider).height(et_viewport_height);
        }
    }
   
   function deletedClass(err = 'No hay sidebar', container_body_class = 'body', class_find = 'error404', class_deleted = 'et_right_sidebar', ok = 'listo'){
        if(jQuery(container_body_class).hasClass(class_find)){
            jQuery(container_body_class).removeClass(class_deleted);
            jQuery('div#sidebar').css({'display':'none'});
            jQuery('#main-content .container:before').css({'display':'none'});
			console.log(ok);
        }else{
            console.log(err);
        }
    }
    deletedClass();
})(jQuery);

