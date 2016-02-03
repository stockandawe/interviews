$(document).ready(function(){
  // Set jQuery validation plugin configuration (http://jqueryvalidation.org/)
  $("#search-form").validate({
    submitHandler: function(form) {
      $.ajax({
        type: 'POST',
        url: 'https://api.airbnb.com/v1/listings/search?key=bcxkf89pxe8srriv8h3rj7w9t',
        dataType: "jsonp",
        jsonpCallback: 'search_results',
        data: $("#search-form").serialize(),
        success: function(data)
        {
          displaySearchResults(data);
        }
      });
    },
    rules: {
      location: "required",
      checkin: {
        required: {
          depends: function(element){
            return $('#search-form_checkout').val()!=''
          }
        }
      },
      checkout: {
        required: {
          depends: function(element){
            return $('#search-form_checkin').val()!=''
          }
        }
      }
    },
    errorElement: "div"
  });
});

function displaySearchResults(search_results) {
  var $template = $('#search-item-template .search-results_item');
  var $results_list = $('#search-results_list')
  $results_list.empty();

  $('#search-results_number').text(search_results.listings_count+" Results")

  $.each(search_results.listings, function(index, element){
    $item = $template.clone();

    $('img', $item).attr('src', element.listing.thumbnail_url);
    $('.index', $item).text(index + 1);
    $('.name', $item).attr('href', "http://www.airbnb.com/rooms/"+element.listing.id);
    $('.name h2', $item).text(element.listing.name);
    $('.location', $item).text(element.listing.smart_location);
    $('.price', $item).text(element.listing.price);

    $results_list.append($item);
  });
}
