/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');
// var cb = require('./callbackReview');

var readfile = Promise.promisify(fs.readFile);
var requestPromise = Promise.promisify(request);

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFileAsync = filePath => 
  new Promise((resolve, reject) => resolve(filePath))
    .then(filePath => readfile(filePath, 'utf8'))
    .then(contents => contents.split('\n')[0])
    .catch(err => { throw err; });
/**** OR ****/
// var pluckFirstLineFromFileAsync = Promise.promisify(cb.pluckFirstLineFromFile);


// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = url =>
  new Promise((resolve, reject) => resolve(url))
    .then(url => requestPromise(url))
    .then(res => res.statusCode)
    .catch(err => { throw err; });

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
