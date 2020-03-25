const myHeaders = new Headers({
  Accept: "application/vnd.github.v3+json"
});

let options = {
  method: "GET",
  header: myHeaders,
  redirect: "follow"
};

// fetches all repositories when given a username
function fetchRepos(username) {
  let fetchUrl = `https://api.github.com/users/${username}/repos`;
  let someArr = [];
  fetch(fetchUrl, options)
    .then(function(result) {
      if (!result.ok) {
        $("#results").html("<p>ERROR: user not found</p>");
        throw new Error("result not ok");
      } else {
        return result.text();
      }
    })
    .then(function(result) {
      let someArr = JSON.parse(result);
      let resultsHMTL = "";
      for (let i = 0; i < someArr.length; ++i) {
        resultsHMTL += `<li>${someArr[i].full_name}<a href="${someArr[i].html_url}">link</a></li>`;
      }
      $("#results").html(resultsHMTL);
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
    fetchRepos(userInput);
  });
}

function getRepos() {
  handleFormSubmit();
}

$(getRepos());
