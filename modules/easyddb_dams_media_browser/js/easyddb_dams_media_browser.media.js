/**
 *  @file
 *  This file handles the JS for Media Module functions.
 */
(function ($) {
  'use strict';
/**
 * Loads media browsers and callbacks, specifically for media as a field.
 */
Drupal.behaviors.mediaElement = {
  attach: function (context, settings) {
    // Options set from media.fields.inc for the types, etc to show in the browser.

    // For each widget (in case of multi-entry)
    $('.media-widget, td', context).once('mediaBrowserLaunch', function () {
      let options = settings.media.elements[this.id];
      let globalOptions = {};
      if (options && options.global !== undefined) {
        globalOptions = options.global;
      }
      // options = Drupal.settings.media.fields[this.id];
      let fidField = $('.fid', this);
      let previewField = $('.preview', this);
      let editButton = $('.edit', this);
      let removeButton = $('.remove', this);
      let attachButton = $('.attach', this);

      // Hide the edit and remove buttons if there is no file data yet.
      if (fidField.val() === 0) {
        editButton.hide();
        removeButton.hide();
      }

      attachButton.hide();

      // When someone clicks the link to pick media (or clicks on an existing thumbnail)
      $('.launcher', this).on('click', function () {
        // Launch the browser, provide the following callback function.
        // @TODO: This should not be an anonymous function.
        Drupal.media.popups.mediaBrowser(function (mediaFiles) {
          if (mediaFiles.length < 0) {
            return;
          }
          let mediaFile = mediaFiles[0];
          // Set the value of the file field fid (hidden) and trigger a change.
          fidField.val(mediaFile.fid);
          fidField.trigger('change');

          if (mediaFile.wasSelected === undefined) {
            editButton.trigger('click');
          }

          // Set the preview field HTML.
          $(previewField).html(mediaFile.preview);

          // Trigger attach button.
          attachButton.trigger('mousedown');
        }, globalOptions);
        return false;
      });

      // When someone clicks the Remove button.
      $('.remove', this).on('click', function () {
        // Set the value of the file field fid (hidden) and trigger change.
        fidField.val(0);
        fidField.trigger('change');
        // Set the preview field HTML.
        previewField.html('');

        return false;
      });

      // Show or hide the edit/remove buttons if the field has a file or not.
      $('.fid', this).on('change', function() {
        let fid = fidField.val();

        if (fid === 0) {
          editButton.hide();
          removeButton.hide();
        }
        else {
          editButton.attr('href', '/file/' + fid + '/edit');
          editButton.attr('target', '_blank');
          editButton.addClass('overlay-exclude');
          // Re-process the edit link through CTools modal behaviors.
          editButton.unbind('click');
          // @todo Maybe add support for Drupal.detachBehaviors in Drupal.behaviors.ZZCToolsModal?
          Drupal.attachBehaviors(editButton.parent(), Drupal.settings);
          removeButton.show();
          editButton.show();
        }
      });
    });
  }
};
})(jQuery);
