const handlebars = require('handlebars');
const navigation = require('./navigation');

function generateLinkUrl(destination){
  return navigation[destination];
};

function logString(loggable){
  console.log(loggable);
};

module.exports = () => {
  handlebars.registerHelper('log', logString);
  handlebars.registerHelper('linkUrl', generateLinkUrl);
};