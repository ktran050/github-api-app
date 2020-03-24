const myHeaders = new Headers({
  Accept: "application/vnd.github.v3+json"
});

let options = {
  method: "GET",
  header: myHeaders,
  redirect: "follow"
};

let fetchUrl = "https://api.github.com/users/ktran050/repos";

// fetches all repositories when given a username
function fetchRepos(username) {
  fetch(fetchUrl, options)
    .then(function(result) {
      if (!result.ok) {
        throw new Error("result not ok");
      }
      return result.text();
    })
    .then(function(result) {
      console.log(result);
    })
    .catch(function(error) {
      console.log("error", error);
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
