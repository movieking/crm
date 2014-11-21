define(function(require, exports, module) {
	
	var mod = getQueryString('mod'),
		con = getQueryString('con'),
		act = getQueryString('act');
	
	if(mod && con){
		mod = mod.replace('_','/');
		act = (!!act)?act:'init';
		require.async('../'+mod+'/'+con, function(a){
			a[act]('main');
		});		
	}
	
	/**
	 * 解析url参数
	 */
	function getQueryString(name) {
	    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	    var r = window.location.search.substr(1).match(reg);
	    if (r != null) {
	    	return unescape(r[2]);
	    }
	    return null;
	}
});
