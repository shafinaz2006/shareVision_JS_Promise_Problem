function checkData() {
  // Create a jQuery deferred object
  const deferred = $.Deferred();

  // Example AJAX call
  $.ajax({
      url: 'https://example.com/api/data', // Replace with the actual endpoint
      method: 'GET',
      dataType: 'json'
  })
  .done(function(response) {
      // Assuming response.data holds the value 0 or 1
      if (response.data === 1) {
          deferred.resolve("Data returned 1 - Promise resolved");
      } else if (response.data === 0) {
          deferred.reject("Data returned 0 - Promise rejected");
      } else {
          deferred.reject("Unexpected data - Promise rejected");
      }
  })
  .fail(function(error) {
      deferred.reject("AJAX call failed - Promise rejected");
  });

  // Return the deferred's promise object
  return deferred.promise();
}

// Example of using the function
checkData()
  .done(function(successMessage) {
      console.log("Success:", successMessage);
  })
  .fail(function(errorMessage) {
      console.log("Error:", errorMessage);
  });