export function load_google_maps() {
  return new Promise(function(resolve, reject) {
    // define the global callback that will run when google maps is loaded
    window.resolveGoogleMapsPromise = function() {
      // resolve the google object
      resolve(window.google)
      // delete the global callback to tidy up since it is no longer needed
      delete window.resolveGoogleMapsPromise
    }
    // Now, Load the Google Maps API
    const script = document.createElement('script')
    const API_KEY = 'AIzaSyBGFUoZwQ4HeVqWvqf4nsjxLyxq_H1L9gU'
    script.src = `https://maps.googleapis.com/maps/api/js?librairies=places&key=${API_KEY}&callback=resolveGoogleMapsPromise`
    script.async = true
    document.body.appendChild(script)
  })
}
