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

function renderPost(data) {
  // order of data guaranteed to be in order of promises
  const post = data[0];
  console.log(`TITLE: ${post.title}`);
  console.log(`BODY: ${post.body}`);
  return data;
}

function renderComments(data) {
  // order of data guaranteed to be in order of promises
  const comments = data[1];
  comments.forEach( (comment) => {
    console.log(comment["id"])
    console.log(`NAME: ${comment.name}`);
    console.log(`EMAIL: ${comment.email}`);
    console.log("");
  });
  return data;
}

function getPostAndComments() {
  console.log("Fetching post from API...");
  getWithPromise("https://jsonplaceholder.typicode.com/posts/1")
    .then( (post) => {
      console.log("Fetching comments from API...");
      const comments_url = `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
      return Promise.all([post, getWithPromise(comments_url)]);
    })
    .then( (data) => renderPost(data) )
    .then( (data) => renderComments(data) )
    .catch( (err) => console.log(`ERROR: ${err}`));
}

getPostAndComments();

// stil not blocked by API call
console.log("loading header...");
console.log("rendering main grid...");
