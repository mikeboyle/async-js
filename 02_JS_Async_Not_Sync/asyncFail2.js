const request = require("request");

function getPost () {
  let post = {};

  console.log("Fetching post from API...");

  request({
    url: "https://jsonplaceholder.typicode.com/posts/1"
  }, (err, res, body) => {
    if (!err) {
      post = JSON.parse(body); // assign to post here?? :pray:
    }
  });

  // ... this still won't work :(
  console.log(`TITLE: ${post.title}`);
  console.log(`BODY: ${post.body}`);
}

getPost();

console.log("loading header...");
console.log("rendering main grid...");
