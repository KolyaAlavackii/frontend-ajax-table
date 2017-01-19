'use strict';

module.exports = {

	sortingAge: function(a, b) {
  	return a.age - b.age;
	},

	sortingName: function(a, b){
        var nameA = a.name.first + a.name.last; 
        var nameB = b.name.first + b.name.last;
            if (nameA < nameB) 
                return -1 
            if (nameA > nameB)
                return 1
                return 0 
	}
}
