const request = require("request");

let post;

function getPost () {
  console.log("Fetching post from API...");

  request({
    url: "https://jsonplaceholder.typicode.com/posts/1"
  }, (err, res, body) => {
    if (!err) {
      console.log(post)
      post = JSON.parse(body); // assign to post here?? :pray:
    }
  });

  // ... this still won't work :(
  console.log(`TITLE: ${post.title}`);
  console.log(`BODY: ${post.body}`);
}

getPost();
