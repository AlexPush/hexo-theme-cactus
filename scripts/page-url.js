/**
* Page URL
* @description Removes the /index.html that Hexo automatically appends to the url of the page.
  Insert using the helper funtion.
* @example
*    <%= page_url(url) %>
*/

hexo.extend.helper.register('page_url', function(path, options) {
    return this.url_for(path, options).replace(/index\.html$/, '');
});