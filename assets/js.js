var animals = ["cat", "dog", "snake", "bird", "turtle", "duck"];

// Function for displaying animal data
      function renderButtons() {

        $("#animalButtons").empty();
        // Loops through the array of animals
        for (var i = 0; i < animals.length; i++) {

          // Then dynamicaly generates buttons for each animal in the array
          // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
          var a = $("<button>");
          // Adds a class of movie to our button
          a.addClass("animal");
          // Added a data-attribute
          a.attr("data-name", animals[i]);
          // Provided the initial button text
          a.text(animals[i]);
          // Added the button to the animalButtons div
          $("#animalButtons").append(a);
        }
      }

      // This function handles events where the add movie button is clicked
      $("#addAnimal").on("click", function(event) {
        event.preventDefault();
        // This line of code will grab the input from the textbox
        var animal = $("#animal-input").val().trim();

        // The animal from the textbox is then added to our array
        animals.push(animal);

        // Calling renderButtons which handles the processing of our movie array
        renderButtons();

      });

      // Adding click event listeners to all elements with a class of "animal"
      $(document).on("click", ".animal", displayAnimalInfo);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();
      



function displayAnimalInfo() {

$("button").on("click", function() {
    $("#animal-gifs").empty();
      var animal = $(this).attr("data-name");
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=GP4NxJe50NGjilKYX3mW0pTz0z3haEkw&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
        var result = response.data;
        for (var i = 0; i < result.length; i++) {
          var gifDiv = $("<div class= 'item'>");
          var rating = result[i].rating;

          var p = $("<p>").text("Rating: " + rating);
          gifDiv.prepend();

          var thing = $("<img>");

          thing.attr("src", result[i].images.fixed_height.url);

          // $(".item").prepend(p);
          gifDiv.prepend(thing);   
                   $("#animal-gifs").prepend(gifDiv);
       
        }
        // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
        
        // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.
        console.log(response);
  
      });
    });};
