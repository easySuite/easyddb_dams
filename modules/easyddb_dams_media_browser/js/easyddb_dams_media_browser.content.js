/**
 * @file
 * Handles the JS for the media upload form.
 */


(function ($) {
  $(document).ready(function() {
    var easyddb_dialog = $('<div></div>');
    var options = {};
    $('a.easyddb-dams-popup').live('click', function(e) {
      var dialog_content = '';
      var media = $(this).attr('href');

      // A little messy audio popup
      // with NO FALLBACK (due to encoeasyddb issues)
      if ($(this).hasClass('easyddb-dams-audio')) {
        dialog_content = '<object type="application/x-shockwave-flash" \
data="' + Drupal.settings.easyddb_dams.audio_player + '" width="300" height="30">\
<param name="movie" value="' + Drupal.settings.easyddb_dams.audio_player + '" />\
<param name="bgcolor" value="#085c68" />\
<param name="wmode" value="opaque">\
<param name="FlashVars" value="mp3=' + media + '&showvolume=1" />\
<embed href="' + Drupal.settings.easyddb_dams.audio_player + '" bgcolor="#085c68" width="300" \
height="30" wmode="opaque" name="movie" align=""\
type="application/x-shockwave-flash" flashvars="mp3=' + media + '&showvolume=1">\
</embed>\
</object>';
        options = {
          width    : "350",
          height   : "100",
          modal    : true,
          title    : 'Audio player',
          autoOpen : false,
          close: function() {
            $(this).dialog('destroy');
          },
          resizable: false
        }
      }

      // A little messy video popup
      // with NO FALLBACK (straight flash player)
      if ($(this).hasClass('easyddb-dams-video')) {
        dialog_content = '<object type="application/x-shockwave-flash" \
data="' + Drupal.settings.easyddb_dams.video_player + '" width="640" height="360">\
<param name="movie" value="' + Drupal.settings.easyddb_dams.video_player + '" />\
<param name="allowFullScreen" value="false" />\
<param name="wmode" value="opaque" />\
<param name="FlashVars" value="controlbar=over&file=' + media + '" />\
<embed href="' + Drupal.settings.easyddb_dams.video_player + '" bgcolor="#085c68" width="640" \
height="360" wmode="opaque" allowFullScreen="false" name="movie" align=""\
type="application/x-shockwave-flash" flashvars="controlbar=over&file=' + media + '">\
</embed>\
</object>';
        options = {
          width    : "700",
          height   : "430",
          modal    : true,
          title    : 'Video player',
          autoOpen : false,
          close: function() {
            $(this).dialog('destroy');
          },
          resizable: false
        }
      }

      easyddb_dialog.html(dialog_content).dialog(options).dialog('open');
      e.preventDefault();
      return false;
    });
  });
}(jQuery));
