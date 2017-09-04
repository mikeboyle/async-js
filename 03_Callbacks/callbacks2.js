const request = require("request");

function getWithCallback (url, cb) {
  request({
    url: url
  }, (err, res, body) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      const json = JSON.parse(body);
      cb(json);
    }
  })
}

function getPostAndComments() {
  console.log("Fetching post from API...");

  getWithCallback("https://jsonplaceholder.typicode.com/posts/1", (post) => {
    // get the post
    console.log(`TITLE: ${post.title}`);
    console.log(`BODY: ${post.body}`);
    console.log("");

    // get the comments
    console.log("Fetching comments from API...");
    const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`;
    getWithCallback(commentsUrl, (comments) => {
      comments.forEach( (comment) => {
        console.log(comment["id"])
        console.log(`NAME: ${comment.name}`);
        console.log(`EMAIL: ${comment.email}`);
        console.log("");
      })
    })
  });
}

getPostAndComments();
