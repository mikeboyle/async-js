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

async function getPostAndComments () {
  try {
    // get the post
    console.log("Fetching post from API...");
    const post = await getWithPromise("https://jsonplaceholder.typicode.com/posts/1")
    console.log(`TITLE: ${post.title}`);
    console.log(`BODY: ${post.body}`);
    console.log("");

    // get the comments
    console.log("Fetching comments from API...");
    const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    const comments = await getWithPromise(commentsUrl);

    comments.forEach( (comment) => {
      console.log(comment["id"])
      console.log(`NAME: ${comment.name}`);
      console.log(`EMAIL: ${comment.email}`);
      console.log("");
    });
  } catch (err) {
    console.log(`ERROR: ${err}`);
  }
}

getPostAndComments();

// stil not blocked by API call
console.log("loading header...");
console.log("rendering main grid...");
