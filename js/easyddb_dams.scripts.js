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
      $('[href="#media-tab-youtube"]').click();
      window.location.hash = '';
    }
  });
})(jQuery);
