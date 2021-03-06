/**
 * @file
 * Handles the JS for the views file browser.
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
      $('.media-item').bind('click', function (e) {
        // Remove all currently selected files
        $('.media-item').removeClass('selected');
        // Set the current item to active
        $(this).addClass('selected');
        // Add this FID to the array of selected files
        var fid = $(this).attr('data-fid');

        // Edit button
        var x = $('<a>');
        x.addClass('button').attr('href', '/file/' + fid + '/edit').attr('id', 'edit-media-button').html('Edit');
        x.attr('target', '_blank');
        $('.form-actions #edit-media-button').remove();
        $('.form-actions').append(x);
        $('.form-actions #edit-media-button').show();
        var empty_settings = [];
        Drupal.behaviors.AJAX.attach(x, empty_settings);

        // Track button
        var settings = [];
        var y = $('<a>');
        y.addClass('button').attr('id', 'track-media-button').attr('href', '/file/' + fid + '/usage').attr('target','_blank').html('Track');
        $('.form-actions #track-media-button').remove();
        $('.form-actions').append(y);
        $('.form-actions #track-media-button').show();

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
        var files = new Array();
        files.push(file);
        Drupal.media.browser.selectMedia(files);
      });
    }
  }



}(jQuery));

