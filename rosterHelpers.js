(function() {

	var groupByProperty = function(group, propertyName) {
		if(!_.isArray(group) || !_.isString(propertyName)) {
			throw Error("You must pass in an array of object and a string property eg groupPlayersByProperty(players, 'position')")
		}
		group.map(function(p, index){
			if(!_.has(p, propertyName)) {
				console.warn("Note the object at array index", index, "does not have the", propertyName, "property")
			}
		});
	  	return _.map(_.groupBy(group, propertyName), function(group, propertyValue) { 
	    	var x = { };
	    	x[propertyName] = propertyValue;
	      	x.group = group;
	      	return x;
	  	});
	};

	var sum = function(values) {
	  return values.reduce(function(a,b) { 
	    return a + b;
	  }, 0);
	};

	var showInList = function(selector, listOfStrings) {
		var element = $(selector);
		if(!element[0]) {
			throw Error("No element found that matches the selector '" + selector + "'");
		}
		var newHtml = listOfStrings.map(function(s) { 
			return "<li>" + s + "</li>"; 
		}).join('\n');
		element.html(newHtml);
	};


	window.rosterHelpers = {
		groupByProperty: groupByProperty,
		sum: sum,
		showInList: showInList,
	};
}).call();