/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = (filePath, cb) => {
  fs.readFile(filePath, 'utf8', (err, data)=> {
    if (data) { data = data.split('\n')[0]; }
    cb(err, data);
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = (url, cb) => {
  request(url, (error, res, body) => 
    error ? cb(error) : cb(error, res.statusCode));
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
