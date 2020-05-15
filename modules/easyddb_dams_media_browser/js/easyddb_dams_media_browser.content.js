/**
 * @file
 * Handles the JS for the media upload form.
 */

(function ($) {
  'use strict';

  $(document).ready(function() {
    var easyddb_dialog = $('<div></div>');
    var options = {};
    $('a.easyddb-dams-popup').on('click', function(e) {
      var dialog_content = '';
      var media = $(this).attr('href');

      if ($(this).hasClass('easyddb-dams-audio')) {
        dialog_content = '<audio width="250" height="100" controls>' +
          '<source src="' + media + '">' +
          'Please use browser which supports JS.' +
          '</audio>';

        options = {
          width    : "410",
          height   : "200",
          modal    : true,
          title    : 'Audio player',
          autoOpen : false,
          close: function() {
            $(this).dialog('destroy');
          },
          open: function () {
            $(this).css('overflow', 'hidden'); //this line does the actual hiding
          },
          resizable: false,
        };
      }

      if ($(this).hasClass('easyddb-dams-video')) {
        if ($(this).hasClass('easyddb-dams-youtube')) {
          var url = new URL(media);
          var ytId = url.searchParams.get('v');
          dialog_content = '<iframe width="640" height="360" src="http://www.youtube.com/embed/' + ytId + '"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
        }
        else {
          dialog_content = '<video width="640" height="360" controls>' +
            '<source src="' + media + ' "type="video/mp4"></source>' +
            '</video>';
        }
        options = {
          width    : "700",
          height   : "460",
          modal    : true,
          title    : 'Video player',
          autoOpen : false,
          close: function() {
            $(this).dialog('destroy');
          },
          open: function () {
            $(this).css('overflow', 'hidden'); //this line does the actual hiding
          },
          resizable: false,
        };
      }

      easyddb_dialog.html(dialog_content).dialog(options).dialog('open');
      e.preventDefault();
      return false;
    });
  });
})(jQuery);
