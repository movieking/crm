define(function(require, exports, module) {
  require('./css/common.css');
  
  var init = function(id){
	  var html = require('./view/index.html');
	  $('#'+id).append(html);
  };
  
  module.exports = {
	 'init':init,
  };
});