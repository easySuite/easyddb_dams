<?php if ($file_type == 'audio') : ?>
  <object class="easyddb-dams-inline easyddb-dams-<?php echo $file_type; ?>"
          type="application/x-shockwave-flash" data="<?php echo $player; ?>"
          width="300" height="30">
    <param name="movie" value="<?php echo $player; ?>"/>
    <param name="bgcolor" value="#085c68"/>
    <param name="wmode" value="opaque"/>
    <param name="FlashVars"
           value="mp3=<?php echo $download_path; ?>&showvolume=1"/>
    <embed href="<?php echo $player; ?>" bgcolor="#085c68" width="300"
           height="30" wmode="opaque" name="movie" align=""
           type="application/x-shockwave-flash"
           flashvars="mp3=<?php echo $download_path; ?>&showvolume=1"></embed>
  </object>
<?php endif; ?>
<?php if ($file_type == 'video') : ?>
  <?php if (isset($dams_youtube_video)): ?>
    <?php print $dams_youtube_video; ?>
  <?php elseif (isset($dams_vimeo_video)): ?>
    <?php print $dams_vimeo_video; ?>
  <?php else: ?>
    <video width="100%" controls>
      <source src="<?php print $download_path ?>" type="video/mp4" />
    </video>
  <?php endif; ?>
<?php endif; ?>
