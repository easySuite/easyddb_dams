/**
 * @file
 *
 * Handles the JS for the views file browser. Note that this does not currently
 * support multiple file selection
 */


(function ($) {

Drupal.behaviors.mediaViews = {
  attach: function (context, settings) {

    // Container for the files that get passed back to the browser
    var files = {};

    // Disable the links on media items list
    $('.view-content ul.media-list-thumbnails a').click(function() {
      return false;
    });

    // Catch the click on a media item
    $('#media-browser-library-list li div.media-item', context).bind('click', function (e) {
      // Remove all currently selected files
      $('.media-item').removeClass('selected');
      // Set the current item to active
      $(this).addClass('selected');
      // Add this FID to the array of selected files
      var fid = $(this).children().attr('data-fid');

      // Edit button
      $('.edit-button').remove();
      var x = $('<a>');
      x.addClass('button edit-button').attr('href', '/file/' + fid + '/edit').attr('id', 'edit-media-button').attr('target','_blank').html('Edit');
      $('.form-actions', context).append(x);
      var empty_settings = [];
      Drupal.behaviors.AJAX.attach(x, empty_settings);

      // @TODO: Hotfix because it's not working atm for first page only
      var file;
      $(Drupal.settings.media.files).each(function (id, element) {
        if (element.fid == fid) {
          file = element;
          return false;
        } else if (element.fid == undefined) {
          file = Drupal.settings.media.files[fid];
          return false;
        }
      });
      file.wasSelected = true;
      // var file = Drupal.settings.media.files[fid];
      var files = new Array();
      files.push(file);
      Drupal.media.browser.selectMedia(files);
    });
  }
}

}(jQuery));
