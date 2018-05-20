console.log('in burger.js');
$(function() {
  $(".change").on("click", function(event) {
    let id = $(this).data("id");
    let devour = $(this).data("devour");

    let devourState = {
      devoured: devour
    };

    // Update Request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devourState
    }).then(
      function() {
        console.log("changed eaten? to: ", devour);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();

    let newBurger = {
      burger: $("#burger").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $('.delBurger').on('click', function(event) {
    event.preventDefault();
    let id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("deleted id ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  }); 

}); 