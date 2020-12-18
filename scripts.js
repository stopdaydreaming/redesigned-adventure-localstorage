$(document).ready(function() {
    //dom variables
          
    //javascript variables
    var moviesArray = []; //"frozen", "frozen2", "mulan", "jaws"

    function init(){
        var moviesFromStorage = JSON.parse(localStorage.getItem("moviesArray"));
        if(moviesFromStorage !== null) {
            moviesArray = moviesFromStorage;
        }
        renderButtons();
    }

    //function definitions
    function renderButtons(){
    $("#buttons-display").empty();
        for(var i = 0; i < moviesArray.length; i++) {
            var button = $("<button>").addClass("btn btn-info").text(moviesArray[i]);
            $("#buttons-display").append(button);
        }
    }

    function getMovieData(title){
        //build the url dynamically with title
        //make ajax call to retrieve data
        //manipulate the dome to display the data
    }

    //function calls
    init();

    //event listeners
    $("#movie-form").on("submit", function(e){
        //always prevent default on a form
        e.preventDefault();
        console.log("form submitted");
        var newMovie = $("#movie-name").val();
        moviesArray.push(newMovie);
        localStorage.setItem("moviesArray", JSON.stringify(moviesArray));
        renderButtons();
        
        //AJAX CALL
    })
  });