const request = require('request');
const fs = require('fs');

const args = process.argv.splice(2);

if (args.length > 1) {
  request(args[0], (error, response, body) => {
    if (!error) {
      fs.writeFile(args[1], body, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully");
        }
      });
    } else {
      console.log('error:', error);
    }
  });
} else {
  console.log("CLI format");
  console.log("node fetcher.js http://google.ca ./index.html");
}