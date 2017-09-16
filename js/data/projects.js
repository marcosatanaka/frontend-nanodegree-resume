var projects = {
	"projects": [
		{
			"title": "Project #1",
			"date": "07/2017",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor commodo elit, sit amet volutpat metus scelerisque non.",
			"images": ["images/197x148.gif", "images/197x148.gif"]
		},
		{
			"title": "Project #2",
			"date": "07/2013 - 05/2017",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tempor commodo elit, sit amet volutpat metus scelerisque non.",
			"images": ["images/197x148.gif", "images/197x148.gif"]
		}
	],
	"display": function() {
		appendOn(PROJECTS, HTMLprojectStart);
		this.projects.forEach(project => {
			appendOn(PROJECTS_ENTRY, HTMLprojectTitle, project.title);
			appendOn(PROJECTS_ENTRY, HTMLprojectDates, project.date);
			appendOn(PROJECTS_ENTRY, HTMLprojectDescription, project.description);
			project.images.forEach(image => {
				appendOn(PROJECTS_ENTRY, HTMLprojectImage, image);
			});

		});
	}
};