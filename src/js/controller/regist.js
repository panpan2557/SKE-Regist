//courses
var courses = [
	{courseName: "Discrete Mathematics",courseID: "1204211",credit: "3",category: "Specific",subcategory: "",recommendation: "2",description: ""}, 
	{courseName: "ADT and Problem Solving",courseID: "1204212",credit: "3",category: "Specific",subcategory: "",recommendation: "2",description: ""},
	{courseName: "ADT Laboratory",courseID: "1219212",credit: "1",category: "Specific",subcategory: "",recommendation: "2",description: ""}, 
	{courseName: "Software Development Training Camp",courseID: "1219211",credit: "1",category: "Specific",subcategory: "",recommendation: "2",description: ""}, 
	{courseName: "Communication Skills for SKE",courseID: "1200111",credit: "3",category: "Specific",subcategory: "",recommendation: "2",description: ""}, 
	{courseName: "Prob Stat for SKE",courseID: "1219214",credit: "3",category: "Specific",subcategory: "",recommendation: "2",description: ""}, 
	{courseName: "Computer Organization and Architecture",courseID: "1219221",credit: "3",category: "Specific",subcategory: "",recommendation: "2",description: ""}, 
	{courseName: "Foundation English II",courseID: "1355112",credit: "3",category: "Language",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "Foundation English III",courseID: "1355113",credit: "3",category: "Language",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "Technical English",courseID: "1355206",credit: "3",category: "Language",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "Fundamental English Listening Speaking",courseID: "1355204",credit: "3",category: "Language",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "Elementary Japanese I",courseID: "1358101",credit: "3",category: "Free Elective",subcategory: "",recommendation: "3",description: ""}, 
	{courseName: "Principle of Marketing",courseID: "1134111",credit: "3",category: "Free Elective",subcategory: "",recommendation: "3",description: ""}, 
	{courseName: "Innovative Thinking",courseID: "1200101",credit: "1",category: "General",subcategory: "Science and Mathematics",recommendation: "23",description: ""}, 
	{courseName: "Food for Mankind",courseID: "1999011",credit: "3",category: "General",subcategory: "Science and Mathematics",recommendation: "23",description: ""}, 
	{courseName: "Health for Life",courseID: "1999012",credit: "3",category: "General",subcategory: "Science and Mathematics",recommendation: "23",description: ""}, 
	{courseName: "New Age Information Management in Everyday Life",courseID: "1999013",credit: "3",category: "General",subcategory: "Science and Mathematics",recommendation: "23",description: ""}, 
	{courseName: "Mathematics and Computer in Everyday Life",courseID: "1999211",credit: "3",category: "General",subcategory: "Science and Mathematics",recommendation: "23",description: ""}, 
	{courseName: "Concepts of Sciences and Philosophy",courseID: "1999212",credit: "3",category: "General",subcategory: "Science and Mathematics",recommendation: "23",description: ""}, 
	{courseName: "Environment Technology and Life",courseID: "1999213",credit: "3",category: "General",subcategory: "Science and Mathematics",recommendation: "23",description: ""}, 
	{courseName: "Man and Society",courseID: "1999141",credit: "3",category: "General",subcategory: "Social Sciences",recommendation: "23",description: ""}, 
	{courseName: "Economic for Better Living",courseID: "1999041",credit: "3",category: "General",subcategory: "Social Sciences",recommendation: "23",description: ""}, 
	{courseName: "Arts of Living",courseID: "1999033",credit: "3",category: "General",subcategory: "Humanities",recommendation: "23",description: ""}, 
	{courseName: "Thai Studies",courseID: "1999021",credit: "3",category: "General",subcategory: "Humanities",recommendation: "23",description: ""},
	{courseName: "Engineering Mathematics I",courseID: "1417167",credit: "3",category: "Math and Physics",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "Engineering Mathematics II",courseID: "1417168",credit: "3",category: "Math and Physics",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "General Physics I",courseID: "1420111",credit: "3",category: "Math and Physics",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "General Physics II",courseID: "1420112",credit: "3",category: "Math and Physics",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "Laboratory in Physics I",courseID: "1420113",credit: "1",category: "Math and Physics",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "Laboratory in Physics II",courseID: "1420114",credit: "1",category: "Math and Physics",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "Social Dancing",courseID: "1175143",credit: "1",category: "Sport",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "Badminton for Health",courseID: "1175112",credit: "1",category: "Sport",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "Basketball for Health",courseID: "1175121",credit: "1",category: "Sport",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "Weight Training for Health",courseID: "1175165",credit: "1",category: "Sport",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "Tennis for Health",courseID: "1175113",credit: "1",category: "Sport",subcategory: "",recommendation: "23",description: ""}, 
	{courseName: "Knowledge Engineering and Knowledge Management",courseID: "1219271",credit: "3",category: "Specific",subcategory: "",recommendation: "3",description: ""}, 
	{courseName: "Data Communication and Computer Networks Program",courseID: "1219321",credit: "3",category: "Specific",subcategory: "",recommendation: "3",description: ""}, 
	{courseName: "Workgroup Software Process",courseID: "1219347",credit: "3",category: "Specific",subcategory: "",recommendation: "3",description: ""}, 
	{courseName: "Workgroup Software Process Lab",courseID: "1219348",credit: "1",category: "Specific",subcategory: "",recommendation: "3",description: ""},
	{courseName: "Knowledge Representation",courseID: "1219363",credit: "3",category: "Specific",subcategory: "",recommendation: "3",description: ""}, 
	{courseName: "Group Dynamic and Psychology",courseID: "1219391",credit: "3",category: "Specific",subcategory: "",recommendation: "3",description: ""}, 
	{courseName: "Coorperative Education",courseID: "1219490",credit: "9",category: "Specific",subcategory: "",recommendation: "4",description: ""}
];

//search a course function
var searchCourse = function(courseID) {
	var elementPos = courses.map(function(x) {return x.courseID; }).indexOf(courseID);
	var objectFound = courses[elementPos];
	if (elementPos == -1) {
		return -1;
	}
	console.log(elementPos + ":" + courseID);
	return objectFound;
}

var checkUsername = function(username) {
	if (username == undefined || username == null) {
		return false;
	}
	if (username.length != 11){
		console.log("err1");
		return 0;
	}
	if (username[0] != "b") {
		console.log("err2");
		return 0;
	}
	if (!(parseInt(username[1] + username[2]) >= 51 && parseInt(username[1] + username[2])  <= 59)) {
		console.log("err3");
		return 0;
	}
	if (username.substr(3, 4) != "1054") { //for ske student
		console.log("err4");
		return 2;	
	}
	if (parseInt(username[1] + username[2]) == 59) {
		return 3;
	} 
	return 1;
}

angular.module('registApp', ['ui.router'])
  .controller('registerController', function () {

  	$(".login").fadeIn('slow', function() {
		
	});

	$('.input').keypress(function (e) {
	  if (e.which == 13) {
	    $(".login-btn").click();
	    return false;
	  }
	});

  	var regist = this;

  	var ACADEMIC_YEAR = 59;

	//mock user
	var tempUsername = "b5710545722";
	var tempPassword = "123456";

	//user model
	var user = {
		username: tempUsername,
		password: tempPassword,
		year: 0,
		courseList: [],
		totalCredit: 0,
		enroll: function(course) {
			course.numberOfStudent++;
			this.courseList.push(course);
			this.totalCredit += parseInt(course.credit);

		},
		drop: function(course) {
			course.numberOfStudent--;
			var i = this.courseList.indexOf(course);
			if(i != -1) {
				this.courseList.splice(i, 1);
			}
			this.totalCredit -= parseInt(course.credit);
		},
		yearSuffix: function() {
			if (this.year == 2) return "nd";
			else if (this.year == 3) return "rd";
			else return "th";
		},
		isExceed: function(credit) {
			credit = parseInt(credit);
			if (this.totalCredit + credit > 22)
				return true;
			return false;
		},
		writeJSON: function() {
			//modify courselist
			var user = {
				id: this.username.substr(1), 
				year: this.year, 
				totalEnrolledCredit: this.totalCredit,
				campus: "Bangkhen",
				faculty: "Engineering",
				department: "Software & Knowledge Engineering (E17)"
			};
			var obj = {
				name: "registrationReport", 
				academicYear: 2559, 
				semester: 2, 
				user: user,
				enrolledCourseList: this.courseList
			};
			regist.changeOutput();
			regist.json = JSON.stringify(obj, null, 2);
		}
	};

	var setup = function(username, password) {
		user.username = username;
		user.password = password;
		user.year = ACADEMIC_YEAR - parseInt(user.username.slice(1, 3)) + 1; //year b[56]xxxxxxx
		var recCourse = {};

		//add enroll & drop function
		for (var i = 0; i < courses.length; i++) {
			courses[i].numberOfStudent = 0;
		}

		//reccomendation
		if (user.year > 4) { //5++
			for (var i = 0; i < courses.length; i++) {
				if (recCourse[courses[i].category] == null) {
					recCourse[courses[i].category] = [];
				}
				recCourse[courses[i].category].push(courses[i]);
			}
		}
		else { //2-4
			for (var i = 0; i < courses.length; i++) {
				var course = courses[i];
				var rec = course.recommendation;
				rec = rec.split("").map(Number);
				course.recommendation = rec;
				//recommendation course
				if (rec.includes(user.year)) {
					if (recCourse[course.category] == null) {
						recCourse[course.category] = [];
					}
					recCourse[course.category].push(course);
				}
			}
		}

		//rearrange the object structure
		var cats = [];
		var keys = Object.keys(recCourse);
		for (var i = 0; i < keys.length; i++) {
			var catCourses = recCourse[keys[i]];
			cats.push({name: catCourses[0].category, courses: catCourses});
		}

		//cat = sorted category
		cats = sortCourse(user.year, cats);
		regist.cats = cats;
	}
	
	//add to controller
	regist.user = user;
	regist.courses = courses;
	regist.outputType = 0;
	regist.json = "";
	regist.loginStatus = -1;
	regist.changeOutput = function() {
		if (this.outputType == 1)
			this.outputType = 0;
		else {
			this.outputType = 1;
		}
	}
	regist.login = function(username, password) {
		console.log(password);
		if (password == null || password == undefined || password == "") {
			regist.loginStatus = 4;
			console.log(regist.loginStatus);
			return;
		}
		var check = checkUsername(username);
		if (check == 1) {
			regist.loginStatus = 1;
			setup(username, password);
			this.user.username = username;
			this.user.password = password;
			$(".login").fadeOut('slow', function() {
				$(".main").fadeIn('slow', function() {
				});
			});
		}
		else if (check == 2) {
			regist.loginStatus = 2;
		}
		else if (check == 3) {
			regist.loginStatus = 3;
		}
		else {
			regist.loginStatus = 0;
		}
	}
  });

//sort according to my implemented sequence
var sortCourse = function(year, cat) {
	var seq;
	if (year == 2) {
		seq = ["Specific", "Language", "General", "Math and Physics", "Sport"];
	}
	else if (year == 3) {
		seq = ["Specific", "General", "Free Elective", "Language", "Math and Physics", "Sport"];
	}
	else {
		//4th year++
		return cat;
	}
	return seqSort(seq, cat);
}

var seqSort = function(seq, cat) {
	var temp = [];
	for (var i = 0; i < seq.length; i++) {
		for (var j = 0; j < cat.length; j++) {
			// console.log(cat[j].name);
			if (cat[j].name == seq[i]) {
				temp.push(cat[j]);
				break;
			}
		}
	}
	return temp;
}

