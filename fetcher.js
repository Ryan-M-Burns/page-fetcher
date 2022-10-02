const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);
const writeTo = args[1];
const readThis = args[0];

request(readThis, (error, response, body) => {
  
  if(error) {
    console.log(error);
    return;
  }

  fs.writeFile(writeTo, body, err => {

    if (!err) {
      console.log(`Downloaded and saved ${body.length} bytes to ${writeTo}`);
      return;
    }

    console.error(err);

  });

});

// node fetcher.js http://www.example.edu/ ./index.html

//fs.stat - look into it