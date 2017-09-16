var education = {
	"schools": [
		{
			"name": "Udacity",
			"location": "Online",
			"degree": "Nanodegree",
			"majors": ["Machine Learning"],
			"date": "2017 - 2017",
			"url": ""
		},
		{
			"name": "Unicesumar",
			"location": "Maringá - PR",
			"degree": "Technician",
			"majors": ["System Analysis and Development"],
			"date": "2016 - 2016",
			"url": ""
		},
		{
			"name": "State University of Maringá",
			"location": "Maringá - PR",
			"degree": "Bachelor",
			"majors": ["Computer Science"],
			"date": "2011 - 2015",
			"url": ""
		}
	],
	"onlineCourses": [
		{
			"title": "Orientação a objetos: melhores técnicas com Java",
			"school": "Alura",
			"date": "2015",
			"url": ""
		},
		{
			"title": "Curso Completo do Desenvolvedor iOS 9 - Crie 18 Apps",
			"school": "Udemy",
			"date": "2016",
			"url": ""
		},
		{
			"title": "Spring MVC: é hora de criar uma webapp com Spring MVC 4",
			"school": "Alura",
			"date": "2015",
			"url": ""
		}
	],
	"display": function() {
		appendOn(EDUCATION, HTMLschoolStart);
		this.schools.forEach(school => {
			appendOn(EDUCATION_ENTRY, HTMLschoolName, school.name);
			appendOn(EDUCATION_ENTRY, HTMLschoolDegree, school.degree);
			appendOn(EDUCATION_ENTRY, HTMLschoolDates, school.date);
			appendOn(EDUCATION_ENTRY, HTMLschoolLocation, school.location);
			school.majors.forEach(major => {
				appendOn(EDUCATION_ENTRY, HTMLschoolMajor, major);
			});
		});
		
		appendOn(COURSES, HTMLcoursesStart);
		this.onlineCourses.forEach(onlineCourse => {
			appendOn(COURSES_ENTRY, HTMLonlineTitle, onlineCourse.title);
			appendOn(COURSES_ENTRY, HTMLonlineSchool, onlineCourse.school);
			appendOn(COURSES_ENTRY, HTMLonlineDates, onlineCourse.date);
			
		});
	}
};