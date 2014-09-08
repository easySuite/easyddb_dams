<?php
/**
 * @file
 * easyddb_dams_media_browser1.features.features_overrides.inc
 */

/**
 * Implements hook_features_override_default_overrides().
 */
function easyddb_dams_media_browser1_features_override_default_overrides() {
  // This code is only used for UI in features. Exported alters hooks do the magic.
  $overrides = array();

  // Exported overrides for: field_instance
  $overrides["field_instance.node-ding_event-field_ding_event_files.settings|file_extensions"] = 'txt pdf doc docx ppt pptx xsl xslx odt ods mp3 wav wma';
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|allowed_schemes|vimeo"] = 0;
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|allowed_schemes|youtube"] = 0;
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|allowed_types|default"]["DELETED"] = TRUE;
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|allowed_types|document"] = 0;
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|browser_plugins|artesis_media_browser--media_browser_1"] = 0;
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|browser_plugins|dams_media_browser--media_browser_2"] = 0;
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|browser_plugins|dams_media_browser--media_browser_3"] = 0;
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|browser_plugins|dams_media_browser--media_browser_4"] = 0;
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|browser_plugins|dams_media_browser--media_browser_5"] = 0;
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|browser_plugins|library"]["DELETED"] = TRUE;
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|browser_plugins|media_default--media_browser_1"]["DELETED"] = TRUE;
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|browser_plugins|media_default--media_browser_my_files"]["DELETED"] = TRUE;
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|browser_plugins|media_internet"] = 0;
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|browser_plugins|youtube"] = 0;
  $overrides["field_instance.node-ding_event-field_ding_event_files.widget|settings|progress_indicator"]["DELETED"] = TRUE;
  $overrides["field_instance.node-ding_news-field_ding_news_files.settings|file_extensions"] = 'txt pdf mp3 wav wma';
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|allowed_schemes|vimeo"] = 0;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|allowed_schemes|youtube"] = 0;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|allowed_types|0"]["DELETED"] = TRUE;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|allowed_types|default"]["DELETED"] = TRUE;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|allowed_types|document"] = 0;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|browser_plugins|artesis_media_browser--media_browser_1"] = 0;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|browser_plugins|dams_media_browser--media_browser_2"] = 0;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|browser_plugins|dams_media_browser--media_browser_3"] = 0;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|browser_plugins|dams_media_browser--media_browser_4"] = 0;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|browser_plugins|dams_media_browser--media_browser_5"] = 0;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|browser_plugins|library"]["DELETED"] = TRUE;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|browser_plugins|media_default--media_browser_1"]["DELETED"] = TRUE;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|browser_plugins|media_default--media_browser_my_files"]["DELETED"] = TRUE;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|browser_plugins|media_internet"] = 0;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|browser_plugins|youtube"] = 0;
  $overrides["field_instance.node-ding_news-field_ding_news_files.widget|settings|progress_indicator"]["DELETED"] = TRUE;

 return $overrides;
}
