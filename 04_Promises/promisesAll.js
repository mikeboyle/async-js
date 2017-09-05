const request = require("request");

function getWithPromise (url) {
  return new Promise( (resolve, reject) => {
    request({
      url: url
    }, (err, res, body) => {
      if (err) {
        reject(err);
      } else {
        console.log(url); // api requests can finish in any order
        resolve(JSON.parse(body));
      }
    });
  });
}

function getPostAndComments() {
  Promise.all([
    getWithPromise(`https://jsonplaceholder.typicode.com/posts/1`),
    getWithPromise(`https://jsonplaceholder.typicode.com/comments?postId=1`)
  ])
    .then( (data) => {
      const post = data[0]; // order of data guaranteed to be in order of promises
      console.log(`TITLE: ${post.title}`);
      console.log(`BODY: ${post.body}`);
      return data;
    })
    .then( (data) => {
      const comments = data[1];
      comments.forEach( (comment) => {
        console.log(comment["id"])
        console.log(`NAME: ${comment.name}`);
        console.log(`EMAIL: ${comment.email}`);
        console.log("");
      })
      return data;
    })
    .catch( (err) => console.log(`ERROR: ${err}`));
}
getPostAndComments();

// stil not blocked by API call
console.log("loading header...");
console.log("rendering main grid...");
