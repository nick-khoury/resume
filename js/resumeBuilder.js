/*
This is empty on purpose! Your code to build the resume will go here.

PS frontend-nanodegree-resume\js> jsc .\resumeBuilder.js
*/


var bio = {
	"name": "Nick Khoury",
	"role": "Developer",
	"contacts": {
		"email": "nick@mail.com",
		"mobile": "900-800-7000",
		"github": "nick-khoury",
		"twitter": "@nick",
		"location": "Minneapolis",
		"blog": "myblog.com"
	},
	"biopic": "images/logo.png",
	"welcomeMessage": "Welcome to my online resume page!",
	"skills": [
		"JavaScript", 
		"Java", 
		"Python"
	],
	"display": function() {
		$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
		$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#footerContacts").append(HTMLblog.replace("%data%", bio.contacts.blog));
		$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
		$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
		$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
		$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
		$("#topContacts").append(HTMLblog.replace("%data%", bio.contacts.blog));
		$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
		$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
		$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
		if (bio.skills) {
			$("#header").append(HTMLskillsStart);
			for (var i = 0; i < bio.skills.length; ++i) {
				$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
			}
		}
	}
};

var work = {
	"jobs": [
		{
			"title": "Front End Developer",
			"employer": "Udacity",
			"dates": "2016 - 2017",
			"location": "West Lafayette",
			"description": "Front end web designer"
		},
		{
			"employer": "Udacity",
			"title": "Course Developer",
			"location": "Mountain View, CA",
			"dates": "Feb 2014 - Current",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "LearnBIG",
			"title": "Software Engineer",
			"location": "Seattle, WA",
			"dates": "May 2013 - Jan 2014",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "LEAD Academy Charter High School",
			"title": "Science Teacher",
			"location": "Nashville, TN",
			"dates": "Jul 2012 - May 2013",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		},
		{
			"employer": "Stratford High School",
			"title": "Science Teacher",
			"location": "Nashville, TN",
			"dates": "Jun 2009 - Jun 2012",
			"description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
		}
	],
	"display": function () {
		for (var i = 0; i < work.jobs.length; ++i) {
			$("#workExperience").append(HTMLworkStart);
			$(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[i].employer));
			$(".work-entry:last").append(HTMLworkTitle.replace("%data%", work.jobs[i].title));
			$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
			$(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[i].location));
			$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
		}
	}
};

var projects = {
	"projects": [
		{
			"title": "Project 1",
			"dates": "2015 - 2016",
			"description": "description of project 1. the project was projected to project projections of projector sales.",
			"images": [
				"images/logo.png"
			]
		},
		{
			"title": "Project 2",
			"dates": "2010 - 2012",
			"description": "description of project 2. the project was projected to project projections of projector sales.",
			"images": [
				"images/logo.png"
			]
		}
	],
	"display": function() {
		for (var i = 0; i < projects.projects.length; ++i) {
			$("#projects").append(HTMLprojectStart);
			$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
			$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
			for (var j = 0; j > projects.projects[i].images.length; ++j) {
				$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images[i]));
			}
		}
	}
};

var education = {
	"schools": [
		{
			"name": "U of U",
			"dates": "2014 - 2017",
			"location": "West Lafayette",
			"degree": "BS",
			"majors": [
				"Web Design",
				"CS"
			],
			"graduation": 2017,
			"url": "u.edu"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Development",
			"school": "udacity",
			"dates": "2017 - 2017",
			"url": "udacity.com"
		}
	],
	"display": function() {
		var i;
		for (i = 0; i < education.schools.length; ++i) {
			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name));
			$(".education-entry:last").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
			$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
			for (var j = 0; j < education.schools[i].majors.length; ++j) {
				$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
			}
		}
		for (i = 0; i < education.onlineCourses.length; ++i) {
			$("#education").append(HTMLonlineClasses);
			$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
			$(".education-entry:last").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
			$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
		}
	}
};

// display following sections
bio.display();
work.display();
projects.display();
education.display();

// display Google maps
$("mapDiv").append(googleMap);



