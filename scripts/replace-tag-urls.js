/**
* Homepage: Remove trailing slash
*/

hexo.extend.filter.register('after_render:html', function(str, data) {
  return str.replace(/https\:\/\/ifigure.de\/\">$/gm, 'https://ifigure.de">');
});

/**
* Other Pages: Remove "index.html"
*/

hexo.extend.filter.register('after_render:html', function(str, data) {
  return str.replace(/index\.html\">$/gm, '\">');
});
