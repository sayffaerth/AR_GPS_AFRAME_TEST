/*if ("geolocation" in navigator) {
    console.log("The location is:"+GeolocationCoordinates.latitude)
  } else {
    console.log("Location is not available.")
  }*/

  navigator.geolocation.getCurrentPosition(function(position) {
      // The user's latitude and longitude are in position.coords.latitude and position.coords.longitude
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    }, function(error) {
      // Handle errors, if any
      switch (error.code) {
          case error.PERMISSION_DENIED:
              console.error("User denied the request for geolocation.");
              break;
          case error.POSITION_UNAVAILABLE:
              console.error("Location information is unavailable.");
              break;
          case error.TIMEOUT:
              console.error("The request to get user location timed out.");
              break;
          case error.UNKNOWN_ERROR:
              console.error("An unknown error occurred.");
              break;
      }
    });