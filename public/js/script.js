$(document).ready(() => {
    $('.list-image').on('mouseenter', (event) => {
        $(event.currentTarget).css('opacity', '0.6');
        $(event.currentTarget).find('.image-caption').fadeIn('fast');
    }).on('mouseleave', (event) => {
        $(event.currentTarget).css('opacity', '1');
        $(event.currentTarget).find('.image-caption').fadeOut('fast');
    });

    $('.project-link').on('mouseenter', (event) => {
        $(event.currentTarget).css('opacity', '0.6');
    }).on('mouseleave', (event) => {
        $(event.currentTarget).css('opacity', '1');
    });
});