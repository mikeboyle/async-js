const request = require("request");

function getWithPromise (url) {
  return new Promise( (resolve, reject) => {
    request({
      url: url
    }, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
}

function printField (json, key) {
  console.log(`${key.toUpperCase()}: ${json[key]}`);
  return json; // return a value for the next then() in chain
}

console.log("Fetching post from API...");

getWithPromise("https://jsonplaceholder.typicode.com/posts/1")
  .then( (post) => printField(post, "title") )
  .then( (post) => printField(post, "body") )
  .then( (post) => {
    console.log("Fetching comments from API...");
    const comments_url = `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    return getWithPromise(comments_url)
  })
  .then( (comments) => {
    comments.forEach( (comment) => {
      console.log(comment["id"])
      console.log(`NAME: ${comment.name}`);
      console.log(`EMAIL: ${comment.email}`);
      console.log("");
    })
    return comments;
  })
  .catch( (err) => console.log(`ERROR: ${err}`));

// stil not blocked by API call
console.log("loading header...");
console.log("rendering main grid...");
