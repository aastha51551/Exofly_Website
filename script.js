document.addEventListener("DOMContentLoaded", function() {
    // Simulate some time-consuming operation
    setTimeout(function() {
      // Hide the loading overlay and show the content
      document.getElementById("loadingOverlay").style.display = "none";
      document.getElementById("content").style.display = "block";
    }, 3000); // Change this timeout to simulate your actual loading time
  });