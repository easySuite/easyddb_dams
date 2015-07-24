<?php
/**
 * @file
 * easyddb_dams_media_browser.features.inc
 */

/**
 * Implements hook_ctools_plugin_api().
 */
function easyddb_dams_media_browser_ctools_plugin_api($module = NULL, $api = NULL) {
  if ($module == "strongarm" && $api == "strongarm") {
    return array("version" => "1");
  }
}

/**
 * Implements hook_views_api().
 */
function easyddb_dams_media_browser_views_api($module = NULL, $api = NULL) {
  return array("api" => "3.0");
}
