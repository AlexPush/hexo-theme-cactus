/**
* Meta Helper
* @description Stops generating the Hexo generator meta tag
*/

hexo.extend.filter.unregister('after_render:html', require('../../../node_modules/hexo/lib/plugins/filter/meta_generator'));