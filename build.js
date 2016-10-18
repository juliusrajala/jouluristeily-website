var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var filter = require('metalsmith-filter');
var layouts = require('metalsmith-layouts');
var handlebarsHelpers = require('./src/lib/handlebars-worker');

metalsmith(__dirname)
  .source('./src/content')
  .destination('dist')
  .use(markdown())
  .use(layouts({
    'engine':'handlebars', 
    'directory':'src/layouts'
  }))
  .use(filter(['!*.scss', '*.html', '!dist/*', '*.md']))
  .use(handlebarsHelpers())
  .build(function(err){
    if(err) { throw err; }
    else console.log('Metalsmith build successful!');
  });