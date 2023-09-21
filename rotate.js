var first_tab = 'up';
var second_tab = 'down'
var third_tab = 'down'



function rotateChev(index) {
    if (index == 'one') {
        if (first_tab == 'up') {
            $('.chev_first').css('transform', 'rotate(' + 180 + 'deg)', { transition: "transform 0.5s" });
            // $('.chev_first').animate({ deg: 180 })
            first_tab = 'down'
        } else {
            $('.chev_first').css('transform', 'rotate(' + 360 + 'deg)');
            first_tab = 'up'
        };
        $('.chev_second').css('transform', 'rotate(' + 180 + 'deg)');
        second_tab = 'up'
        $('.chev_third').css('transform', 'rotate(' + 180 + 'deg)');
        third_tab = 'up'
    } else if (index == 'two') {
        if (second_tab == 'up') {
            $('.chev_second').css('transform', 'rotate(' + 360 + 'deg)', { transition: "transform 0.5s" });
            // $('.chev_first').animate({ deg: 180 })
            second_tab = 'down'
        } else {
            $('.chev_second').css('transform', 'rotate(' + 180 + 'deg)');
            second_tab = 'up'
        };
        $('.chev_first').css('transform', 'rotate(' + 360 + 'deg)');
        first_tab = 'up'
        $('.chev_third').css('transform', 'rotate(' + 180 + 'deg)');
        third_tab = 'up'
    } else if (index == 'three') {
        if (third_tab == 'up') {
            $('.chev_third').css('transform', 'rotate(' + 360 + 'deg)', { transition: "transform 0.5s" });
            // $('.chev_first').animate({ deg: 180 })
            third_tab = 'down'
        } else {
            $('.chev_third').css('transform', 'rotate(' + 180 + 'deg)');
            third_tab = 'up'
        };
        $('.chev_first').css('transform', 'rotate(' + 360 + 'deg)');
        first_tab = 'up'
        $('.chev_second').css('transform', 'rotate(' + 180 + 'deg)');
        second_tab = 'up'
    }
}

$('.button').click(function() {
    $('.box').animate({ deg: 180 }, {
        duration: 1200,
        step: function(now) {
            $(this).css({ transform: 'rotate(' + now + 'deg)' });
        }
    });
});