chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Handle message received from background script
  if (request.data) {
    // Access the data sent in the message
    var data = request.data;

    // Display the response on the website
    // You can modify this part to suit your specific use case
    alert("Response from background.js: " + JSON.stringify(data));
  }
});
