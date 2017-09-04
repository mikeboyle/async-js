const request = require("request");

function getPost () {
  console.log("Fetching post from API...");
  request({
    url: "https://jsonplaceholder.typicode.com/posts/1"
  }, (err, res, body) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      const json = JSON.parse(body);
      console.log(`TITLE: ${json.title}`);
      console.log(`BODY: ${json.body}`);
    }
  });
}

getPost();
