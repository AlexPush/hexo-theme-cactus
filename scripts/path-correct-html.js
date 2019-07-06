/**
* Meta Helper
* @description Add correct url without the index.html part that Hexo
* automatically appends to it
* @example
*     <%= page_url(url) %>
*/

hexo.extend.helper.register('page_url', function(url, options) {
    return this.url_for(url, options).replace(/index\.html$/, '');
});