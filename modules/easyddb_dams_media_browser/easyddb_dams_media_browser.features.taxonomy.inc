<?php
/**
 * @file
 * easyddb_dams_media_browser.features.taxonomy.inc
 */

/**
 * Implements hook_taxonomy_default_vocabularies().
 */
function easyddb_dams_media_browser_taxonomy_default_vocabularies() {
  return array(
    'dams_category' => array(
      'name' => 'EasyDDB DAMS Category',
      'machine_name' => 'dams_category',
      'description' => 'Categories used for DAMS',
      'hierarchy' => 0,
      'module' => 'taxonomy',
      'weight' => 0,
    ),
  );
}
