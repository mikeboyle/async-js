const request = require("request");

function getPost () {
  console.log("Fetching post from API...");

  const res = request({
    url: "https://jsonplaceholder.typicode.com/posts/1"
  });

  // this won't work :(
  const json = JSON.parse(res);
  console.log(`TITLE: ${json.title}`);
  console.log(`BODY: ${json.body}`);
}

getPost();
