<?php
/**
 * Implements hook_views_query_alter().
 *
 * Since views do not allow an OR condition for several fields, which
 * share the same value, small query munge is happening here.
 *
 * This will expand the filtering, through additional fields
 * defined in the view UI.
 *
 * The field, whose value is to be used for other fields
 * MUST be first in the view UI.
 */
function easyddb_dams_media_browser_views_query_alter(&$view, &$query) {
  if ($view->name == 'dams_media_browser') {
    foreach ($query->where as $group_id => &$condition_group) {
      foreach ($condition_group['conditions'] as $condition_id => &$condition) {
        if ($condition['field'] == 'file_managed.filename') {
          $query->queue_table('field_data_field_dams_alt_name');
          $condition_group['conditions'][] = array(
            'field' => 'field_data_field_dams_alt_name.field_dams_alt_name_value',
            'value' => $condition['value'],
            'operator' => $condition['operator'],
          );

          $query->queue_table('field_data_field_file_image_title_text');
          $condition_group['conditions'][] = array(
            'field' => 'field_data_field_file_image_title_text.field_file_image_title_text_value',
            'value' => $condition['value'],
            'operator' => $condition['operator'],
          );

          $query->queue_table('field_data_field_file_image_alt_text');
          $condition_group['conditions'][] = array(
            'field' => 'field_data_field_file_image_alt_text.field_file_image_alt_text_value',
            'value' => $condition['value'],
            'operator' => $condition['operator'],
          );

          $query->queue_table('field_data_field_dams_note');
          $condition_group['conditions'][] = array(
            'field' => 'field_data_field_dams_note.field_dams_note_value',
            'value' => $condition['value'],
            'operator' => $condition['operator'],
          );
        }
      }
    }
  }
}
