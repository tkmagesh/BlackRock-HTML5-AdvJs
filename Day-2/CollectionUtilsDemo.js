var products = [
	{id : 101, name : "pen", units : 4, cost : 21, category :1},
	{id : 104, name : "hen", units : 3, cost : 72, category :2},
	{id : 109, name : "den", units : 7, cost : 43, category :2},
	{id : 106, name : "ken", units : 5, cost : 71, category :1},
	{id : 103, name : "ten", units : 9, cost : 32, category :1},
	{id : 102, name : "len", units : 2, cost : 93, category :2},
]

function display(products){
	for(var i=0;i<products.length;i++){
		var product = products[i];
		console.log("id=",product["id"], "name=", product.name, "units=",product.units, "cost=", product.cost, "category=", product.category);
	}
};

function sort(products, productComparerFn){
	for(var i=0;i<products.length-1;i++)
		for(var j=i+1;j<products.length;j++){
			var left = products[i], right = products[j];
			if (productComparerFn(left,right) > 0){
				var temp = left;
				products[i] = products[j];
				products[j] = temp;
			}
		}
}

function sort(products, attrName){
	for(var i=0;i<products.length-1;i++)
		for(var j=i+1;j<products.length;j++){
			var left = products[i], right = products[j];
			if (left[attrName] > right[attrName]){
				var temp = left;
				products[i] = products[j];
				products[j] = temp;
			}
		}
}

function sort(products, comparer){
	var comparerFn = typeof comparer === "function" ? comparer : function(l,r){ 
		if (l[comparer] > r[comparer]) return 1;
		if (l[comparer] < r[comparer]) return -1;
		return 0;
	};
	for(var i=0;i<products.length-1;i++)
		for(var j=i+1;j<products.length;j++){
			var left = products[i], right = products[j];
			if (comparerFn(left,right) > 0){
				var temp = left;
				products[i] = products[j];
				products[j] = temp;
			}
		}
}

function filter(list,criteriaFn){
	var result = [];
	for(var i=0;i<list.length;i++)
		if (criteriaFn(list[i])) result.push(list[i]);
	return result;
}

function groupBy(list,keySelector){
	var result = {};
	var keySelectorFn = typeof keySelector === "function" ? keySelector : function(item){
		return item[keySelector];
	};
	for(var i=0;i<list.length;i++){
		var key = keySelectorFn(list[i]);
		if (!result[key]) result[key] = [];
		result[key].push(list[i]);
	}
	return result;
}

display(products); //should print the product list sorted by id