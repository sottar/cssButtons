/// <reference path="../javascript/plugins/jquery.d.ts" />
$(function () {
    $('.button').on('click', function () {
        var btnID = '#' + $(this).attr('id'), sourceID = btnID + '_source', params = "";
        if ($(sourceID).css('display') === 'none') {
            $('.source_box').hide();
            $(sourceID).animate({
                height: 'show',
                opacity: 'show'
            });
            $('.button_list').css('border', '3px solid #ccc');
            $(btnID).parent('.button_list').css('border', '3px dashed #ccc');
        }
        else {
            $(sourceID).animate({
                height: 'hide',
                opacity: 'hide'
            });
            $(btnID).parent('.button_list').css('border', '3px solid #ccc');
        }
        function setParameter(id) {
            var url = location.href, parameters = url.split('?');
            parameters[1] = id;
            location.href = parameters[0] + '?' + parameters[1];
        }
    });
});
// smooth scroll
$(function () {
    $('a[href^=#]').click(function () {
        var speed = 500;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({ scrollTop: position }, speed, "swing");
        return false;
    });
});
