/**
 * @file
 * Handles the JS for the media upload form.
 */


(function ($) {
  // Click script
  $('div.upload-row input.upload-type-checkbox').on('click', function() {
    var other_element = $(this).parent().siblings();
    if ($(this).is(':checked')) {
      other_element.removeClass('form-disabled').find(':disabled').removeAttr('disabled');
    } else {
      other_element.addClass('form-disabled').find('input[type!=checkbox]').attr('disabled', true);
    }
    var other_option_row = $(this).parent().parent().siblings('.upload-row');
    other_option_row.find('input.upload-type-checkbox').removeAttr('checked').parent().siblings().addClass('form-disabled').find('input[type!=checkbox]').attr('disabled', true);
  });

}(jQuery));
