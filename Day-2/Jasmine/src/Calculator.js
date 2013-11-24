function add(){
	function parseArg(n){
		if (typeof n === "string") return parseInt(n);
		if (typeof n === "undefined") return 0;
		if (typeof n === "function") return parseArg(n());
		if (n.length && n.length > 0) return add.apply(this,n);
		return n;
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : 
		parseArg(arguments[0]) + add.apply(this,[].splice.call(arguments,1));
}