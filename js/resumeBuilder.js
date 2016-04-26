/*
This is empty on purpose! Your code to build the resume will go here.
 */
var bio = {
    "name": "Guiming Huang",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "9794026699",
        "email": "guiming2011@gmail.com",
        "github": "hitwater",
        "twitter": "@guiming",
        "blog": "hitwater",
        "location": "Austin"
    },
    "welcomeMessage": "Welcome to my resume",
    "skills": ["HTML5", "CSS", "Javascript", "Bootstrap"],
    "biopic": "images/fry.jpg"
};

bio.display = function() {

    var formattedheaderName = HTMLheaderName.replace("%data%", bio.name);
    var formattedheadRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedblog = HTMLblog.replace("%data%", bio.contacts.blog);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var idStrings = ["#topContacts", "#footerContacts"];
    for (i = 0; i < idStrings.length; i++) {
        $(idStrings[i]).append(formattedmobile);
        $(idStrings[i]).append(formattedemail);
        $(idStrings[i]).append(formattedtwitter);
        $(idStrings[i]).append(formattedgithub);
        $(idStrings[i]).append(formattedlocation);
    }
    $("#header").append(formattedbioPic);
    $("#header").append(formattedwelcomeMsg);
    $("#header").append(HTMLskillsStart);
    for (var skill = 0; skill < bio.skills.length; skill++) {
        var formattedskills = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedskills);
    }
    $("#header").prepend(formattedheadRole);
    $("#header").prepend(formattedheaderName);
};

bio.display();

var work = {
    "jobs": [{
        "employer": "BOA Marine Services Inc.",
        "title": "Marine Engineer",
        "location": "Houston",
        "dates": "Dec. 2013-Mar. 2015",
        "description": "As a marine engineer, I was focusing on devloping GUI tools and spreadsheet."
    }, {
        "employer": "TAMU",
        "title": "Teaching Assistant",
        "location": "College Station",
        "dates": "Aug. 2011-May 2012",
        "description": "Help undergraduate students to slove homework related problems and grade homework and quiz."
    }]

};
work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    for (var job = 0; job < work.jobs.length; job++) {
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedworkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedworkLocation = MLHLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        $(".work-entry:last").append(formattedworkEmployer+formattedworkTitle);
        $(".work-entry:last").append(formattedworkDates);
        $(".work-entry:last").append(formattedworkLocation);
        $(".work-entry:last").append(formattedworkDescription);
    }
};
work.display();

var education = {
    "schools": [{
        "name": "TAMU",
        "location": "College Station",
        "degree": "Master degree",
        "majors": ["Ocean Engineering"],
        "dates": "08-01-2011",
        "url": "https://www.tamu.edu/"
    }, {
        "name": "HIT",
        "location": "San Deigo",
        "degree": "Bachelor degree",
        "majors": ["Mechanical Engineering"],
        "dates": "08-01-2005",
        "url": "http://en.hit.edu.cn/"
    }],
    "onlineCourses": [{
        "title": "NanoDegree",
        "school": "Udacity",
        "date": "02.01.2016",
        "url": "https://www.udacity.com/"
    }]
};

education.display = function() {

    $("#education").append(HTMLschoolStart);
    for (var school = 0; school < education.schools.length; school++) {
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var formattedschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);

        $(".education-entry:last").append(formattedschoolName+formattedschoolDegree);
        $(".education-entry:last").append(formattedschoolDates);
        $(".education-entry:last").append(formattedschoolLocation);
        $(".education-entry:last").append(formattedschoolMajor);
    }

    var formattedonlineClasses = '<h3 id="classes-h3">Online Classes</h3>';
    var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[0].title);
    var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[0].school);
    var formattedonlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[0].date);
    var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[0].url);
    $("#education").append(formattedonlineClasses);
    $("#classes-h3").append(formattedonlineTitle+formattedonlineSchool);
    $("#classes-h3").append(formattedonlineDates);
    $("#classes-h3").append(formattedonlineURL);
};

education.display();

var projects = {
    "projects": [{
        "title": "BlackJack",
        "dates": "08.20.2015",
        "description": "Python-OO Design",
        "images": ["images/blackjack.png"]
    }, {
        "title": "Asteroid",
        "dates": "09.20.2015",
        "description": "Python-OO Design",
        "images": ["images/asteroid.png"]
    }],
    "display": "function()"
};

projects.display = function() {

    $("#projects").append(HTMLprojectStart);
    for (var project = 0; project < projects.projects.length; project++) {
        var formattedprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedprojectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var formattedprojectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

        $(".project-entry:last").append(formattedprojectTitle);
        $(".project-entry:last").append(formattedprojectDates);
        $(".project-entry:last").append(formattedprojectDescription);
        $(".project-entry:last").append(formattedprojectImage);
    }
};
projects.display();

$("#mapDiv").append(googleMap);
$("#main").append(internationalizeButton);

function inName(fullname) {
    tmpFullName = fullname.trim().split(" ");
    var lastName = tmpFullName[1].toUpperCase();
    var firstName = tmpFullName[0][0].toUpperCase() + tmpFullName[0].slice(1).toLowerCase();
    return firstName + " " + lastName;
}


