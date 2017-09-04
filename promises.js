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
  return json;
}

console.log("Fetching post from API...");

getWithPromise("https://jsonplaceholder.typicode.com/posts/1")
  .then( (post) => printField(post, "title") )
  .then( (post) => printField(post, "body") )
  .catch( (err) => console.log(`ERROR: ${err}`));
