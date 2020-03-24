let header = new Headers();

let fetchUrl = "https://api.github.com/users/ktran050/repos";

// fetches all repositories when given a username
function fetchRepos(username) {
  fetch(fetchUrl).then(function(result) {
    console.log(result);
  });
}

// Reads user input on form submit and calls fetch repo to handle the fetching
function handleFormSubmit() {
  $("#form").on("click", "#submit", function(event) {
    event.preventDefault();
    let userInput = $("#username").val();
    console.log("form submit handled");
    console.log(`user input: ${userInput}`);
    fetchRepos(userInput);
  });
}

function getRepos() {
  handleFormSubmit();
}

$(getRepos());
