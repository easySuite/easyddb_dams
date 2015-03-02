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

/**
 * Implements hook_field_default_field_instances_alter().
 */
function easyddb_dams_media_browser_field_default_field_instances_alter(&$data) {
  if (isset($data['node-ding_event-field_ding_event_files'])) {
    $data['node-ding_event-field_ding_event_files']['settings']['file_extensions'] = 'txt pdf doc docx ppt pptx xsl xslx odt ods mp3 wav wma'; /* WAS: 'txt pdf doc docx ppt pptx xsl xslx odt ods' */
    $data['node-ding_event-field_ding_event_files']['widget']['settings']['allowed_schemes']['vimeo'] = 0; /* WAS: '' */
    $data['node-ding_event-field_ding_event_files']['widget']['settings']['allowed_schemes']['youtube'] = 0; /* WAS: '' */
    $data['node-ding_event-field_ding_event_files']['widget']['settings']['allowed_types']['document'] = 0; /* WAS: '' */
    $data['node-ding_event-field_ding_event_files']['widget']['settings']['browser_plugins']['dams_media_browser--media_browser_2'] = 0; /* WAS: '' */
    $data['node-ding_event-field_ding_event_files']['widget']['settings']['browser_plugins']['dams_media_browser--media_browser_3'] = 0; /* WAS: '' */
    $data['node-ding_event-field_ding_event_files']['widget']['settings']['browser_plugins']['dams_media_browser--media_browser_4'] = 0; /* WAS: '' */
    $data['node-ding_event-field_ding_event_files']['widget']['settings']['browser_plugins']['dams_media_browser--media_browser_5'] = 0; /* WAS: '' */
    $data['node-ding_event-field_ding_event_files']['widget']['settings']['browser_plugins']['media_internet'] = 0; /* WAS: '' */
    $data['node-ding_event-field_ding_event_files']['widget']['settings']['browser_plugins']['youtube'] = 0; /* WAS: '' */
    unset($data['node-ding_event-field_ding_event_files']['widget']['settings']['allowed_types']['default']);
    unset($data['node-ding_event-field_ding_event_files']['widget']['settings']['browser_plugins']['library']);
    unset($data['node-ding_event-field_ding_event_files']['widget']['settings']['browser_plugins']['media_default--media_browser_1']);
    unset($data['node-ding_event-field_ding_event_files']['widget']['settings']['browser_plugins']['media_default--media_browser_my_files']);
    unset($data['node-ding_event-field_ding_event_files']['widget']['settings']['progress_indicator']);
  }
  if (isset($data['node-ding_news-field_ding_news_files'])) {
    $data['node-ding_news-field_ding_news_files']['settings']['file_extensions'] = 'txt pdf mp3 wav wma'; /* WAS: 'txt pdf' */
    $data['node-ding_news-field_ding_news_files']['widget']['settings']['allowed_schemes']['vimeo'] = 0; /* WAS: '' */
    $data['node-ding_news-field_ding_news_files']['widget']['settings']['allowed_schemes']['youtube'] = 0; /* WAS: '' */
    $data['node-ding_news-field_ding_news_files']['widget']['settings']['allowed_types']['document'] = 0; /* WAS: '' */
    $data['node-ding_news-field_ding_news_files']['widget']['settings']['browser_plugins']['dams_media_browser--media_browser_2'] = 0; /* WAS: '' */
    $data['node-ding_news-field_ding_news_files']['widget']['settings']['browser_plugins']['dams_media_browser--media_browser_3'] = 0; /* WAS: '' */
    $data['node-ding_news-field_ding_news_files']['widget']['settings']['browser_plugins']['dams_media_browser--media_browser_4'] = 0; /* WAS: '' */
    $data['node-ding_news-field_ding_news_files']['widget']['settings']['browser_plugins']['dams_media_browser--media_browser_5'] = 0; /* WAS: '' */
    $data['node-ding_news-field_ding_news_files']['widget']['settings']['browser_plugins']['media_internet'] = 0; /* WAS: '' */
    $data['node-ding_news-field_ding_news_files']['widget']['settings']['browser_plugins']['youtube'] = 0; /* WAS: '' */
    unset($data['node-ding_news-field_ding_news_files']['widget']['settings']['allowed_types']['0']);
    unset($data['node-ding_news-field_ding_news_files']['widget']['settings']['allowed_types']['default']);
    unset($data['node-ding_news-field_ding_news_files']['widget']['settings']['browser_plugins']['library']);
    unset($data['node-ding_news-field_ding_news_files']['widget']['settings']['browser_plugins']['media_default--media_browser_1']);
    unset($data['node-ding_news-field_ding_news_files']['widget']['settings']['browser_plugins']['media_default--media_browser_my_files']);
    unset($data['node-ding_news-field_ding_news_files']['widget']['settings']['progress_indicator']);
  }
}
