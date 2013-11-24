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
		console.log("id=",product.id, "name=", product.name, "units=",product.units, "cost=", product.cost, "category=", product.category);
	}
};

function sort(products){
	//sorts products by id
}

display(products); //should print the product list sorted by id