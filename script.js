/*
// returns an array of location strings from locations in resume
function locationFinderExample() {
	var locations = [];
	locations.push(bio.contacts.location);
	for (var school in education.schools) {
		locations.push(education.schools[school].location);
	}
	for (var job in work.jobs) {
		locations.push(work.jobs[job].location);
	}
	return replaceArrItem(locations, undefined);
}
//console.log(locationFinderExample());

// helper function to remove all items of a given value from an array
function replaceArrItem(arr, item) {
	var temp = [];
	for (var i = 0; i < arr.length; ++i) {
		if (arr[i] !== undefined) {
			temp.push(arr[i]);
		}
	}
	return temp;
}

// function to return the "internation" version of a person's name
function internationalName(firstLastName) {
	var name = firstLastName.trim().split(" ");
	var inName = firstLastName;
	if (name[0] && name[1]) {
		inName = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
		inName += " ";
		inName += name[1].toUpperCase();
	}
	console.log(inName);
	return inName;
}
//internationalName("nick khoury");
//$("#main").append(internationalizeButton);
*/

/*
 * // JSON notes
$.getJSON("test.json", function(data) {
	console.log(data);
});

// can also do
var printData = function(data) {
	console.log(data)
};
$.getJSON("test.json", printData);
*/

//jQuery notes
//$('tag'); // tag selector
//$('.class'); // class selector, selects all elements of the class
//$('#id'); // id selector, specific to single element
//$('#id').parents(); // id selector that gets parents of the element. also can use: parent() parents() children() find() siblings()

