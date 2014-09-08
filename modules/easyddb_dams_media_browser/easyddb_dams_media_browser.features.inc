<?php
/**
 * @file
 * easyddb_dams_media_browser.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function easyddb_dams_media_browser_ctools_plugin_api() {
  list($module, $api) = func_get_args();
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function easyddb_dams_media_browser_views_api() {
  return array("version" => "3.0");
}
