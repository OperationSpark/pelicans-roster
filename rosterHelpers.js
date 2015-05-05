(function() {
	var groupPlayersByPosition = function(players) {
	  return _.map(_.groupBy(players, 'position'), function(players, position) { 
	    return {
	      position: position,
	      players: players
	    };
	  });
	};
	var sum = function(values) {
	  return values.reduce(function(a,b) { 
	    return a + b;
	  }, 0);
	};

	window.rosterHelpers = {
		groupPlayersByPosition: groupPlayersByPosition,
		sum: sum
	};
}).call();