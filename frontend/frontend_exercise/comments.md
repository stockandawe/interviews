### Front end Exercise

The Exercise:

Implement a page that renders Airbnb search results according to the included mockup and spec.
Think about what constitutes a minimum viable product. There is no time limit, but the maximum time you should spend on this is 3 hours.

To render search results, fetch JSON from our API.  In order to make a cross-domain request to the API, you will have to use JSONP.  The URL to the search endpoint is https://api.airbnb.com/v1/listings/search?key=bcxkf89pxe8srriv8h3rj7w9t.
Submitting the form should re-render the list of results.  Fetch filtered search results from the API over JSONP using the GET parameterslocation, checkin, checkout, and guests.
We’ve provided a file sample_api_response.js that has a sample JSONP API response.
The form should pass the following validations:
1) The location cannot be blank.
2) The checkin cannot be submitted without a checkout and vice versa.

Hints/Suggestions:
1) You may use any libraries, frameworks, or existing code that you like.
2) All images are provided or given as URLs in the JSON. The rest of the page should be styled only via CSS.
3) The search result should link to http://www.airbnb.com/rooms/<listing_id>.
4) Add a date picker for dates. (if this is taking too long, feel free to not use a date picker)
5) Guest dropdown should have options 1-16.
6) No need to add pagination.
7) Target the latest stable WebKit / Firefox release. Don't worry about responsiveness or cross-browser functionality with IE.
