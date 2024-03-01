document.addEventListener("DOMContentLoaded", function() {
      document.getElementById("submitBtn").addEventListener("click", function(event) {
        event.preventDefault();
    
        var name = document.getElementsByName("name")[0].value;
        var age = document.getElementsByName("age")[0].value;
        var email = document.getElementsByName("email")[0].value;
    
        fetch("/submit-form", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, age: age, email: email })
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