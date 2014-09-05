<a href="<?php echo $download_path; ?>" class="easyddb-dams-audio easyddb-dams-popup">
  <img src="<?php echo $image_icon; ?>"/>
  <div class="easyddb-dams-popup-content" style="visibility:hidden;">
    <audio controls>
      <source src="<?php echo $download_path;?>" type="audio/mpeg" />
      <object class="playerpreview" type="application/x-shockwave-flash"
      data="<?php echo $player;?>" width="200" height="20">
        <param name="movie" value="player_mp3_mini.swf" />
        <param name="bgcolor" value="#085c68" />
        <param name="FlashVars" value="mp3=<?php echo $download_path;?>" />
        <embed href="<?php echo $player;?>" bgcolor="#085c68" width="200"
          height="20" name="movie" align=""
          type="application/x-shockwave-flash" flashvars="mp3=<?echo $download_path;?>">
        </embed>
      </object>
    </audio>
  </div>
</a>
