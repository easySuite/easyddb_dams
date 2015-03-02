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
  }
})(jQuery);
