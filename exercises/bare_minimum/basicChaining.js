/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var con = require('./promiseConstructor');
var pro = require('./promisification');
var writefile = Promise.promisify(fs.writeFile);

var fetchProfileAndWriteToFile = (readFilePath, writeFilePath) =>
  con.pluckFirstLineFromFileAsync(readFilePath)
  .then(user => pro.getGitHubProfileAsync(user))
  .then(res => writefile(writeFilePath, JSON.stringify(res)));
  
// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
