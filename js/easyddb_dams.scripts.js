/**
 * @file
 */

(function ($) {
  Drupal.behaviors.easyddb_dams = {
    attach: function (context) {

      $('#media-tabs-wrapper > ul > li').click(function() {
        var ele = $(this);
        ele.parent('ul').find('li').removeClass('active');

        if (ele.hasClass('ui-state-active')) {
          ele.addClass('active');
        }
      });

      $('#media-tabs-wrapper > ul > li.ui-state-active').addClass('active');
    }
  };

  $(document).ready(function() {
    // Set youtube tab as default if search was made.
    if (window.location.hash.length > 0 && window.location.hash == '#media-youtube-search-tab') {
      $('ul').find('li').removeClass('active ui-state-active ui-state-focus');
      $('div#media-tab-upload').hide();
      $('div#media-tabs-wrapper ul > li[aria-controls="media-tab-youtube"]').addClass('ui-state-focus ui-state-active active');
      $('div#media-tab-youtube').show();
      window.location.hash = '';
    }
  });
})(jQuery);
