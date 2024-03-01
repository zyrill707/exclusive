document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("submitBtn").addEventListener("click", function(event) {
        event.preventDefault();
    
        var form = document.getElementById("myForm");
        var formData = new FormData(form);
    
        fetch("/", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams(formData).toString()
          })
          .then(response => {
            if (response.ok) {
              console.log("Form submitted successfully!");
              alert("Check your email");
            } else {
              console.error("Failed to submit form.");
            }
          })
          .catch(error => {
            console.error("Error:", error);
          });
      });
    });
