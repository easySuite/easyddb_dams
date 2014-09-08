<a href="<?php echo $download_path; ?>" class="easyddb-dams-video easyddb-dams-popup">
  <img src="<?php echo $image_icon; ?>"/>
  <div class="easyddb-dams-popup-content" style="visibility:hidden;">
    <video controls="controls" width="640" height="360">
      <source src="<?php echo $download_path; ?>"/>
      <object type="application/x-shockwave-flash" data="<?php echo $player; ?>" width="640" height="360">
        <param name="movie" value="<?php echo $player; ?>" />
		    <param name="allowFullScreen" value="true" />
		    <param name="wmode" value="transparent" />
        <param name="flashVars" value="controlbar=over&file=<?php echo $download_path; ?>" />
      </object>
    </video>
  </div>
</a>
