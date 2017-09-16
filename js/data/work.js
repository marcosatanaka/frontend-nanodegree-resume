var work = {
	"jobs": [
		{
			"employer": "DB1 Global Software",
			"title": "Software Developer",
			"location": "Maringá - PR",
			"date": "07/2013 - atual",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium mi semper finibus tristique. Pellentesque consequat pretium purus vitae sodales. Morbi tellus metus, tincidunt at libero placerat, faucibus condimentum justo. Duis lorem mi, hendrerit ac mollis quis, euismod et leo. Nunc sed libero congue, fringilla augue eget, condimentum felis. Suspendisse dignissim sagittis ligula et porta. Cras sed imperdiet elit. Suspendisse id velit dapibus, venenatis augue et, blandit turpis."
		},
		{
			"employer": "Strada Soluções em Tecnologia",
			"title": "Test Analist",
			"location": "Maringá - PR",
			"date": "01/2011 - 07/2013",
			"description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium mi semper finibus tristique. Pellentesque consequat pretium purus vitae sodales. Morbi tellus metus, tincidunt at libero placerat, faucibus condimentum justo. Duis lorem mi, hendrerit ac mollis quis, euismod et leo. Nunc sed libero congue, fringilla augue eget, condimentum felis. Suspendisse dignissim sagittis ligula et porta. Cras sed imperdiet elit. Suspendisse id velit dapibus, venenatis augue et, blandit turpis."
		}
	],
	"display": function() {
		appendOn(WORK, HTMLworkStart);
		this.jobs.forEach(job => {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", job.title);

			appendOn(WORK_ENTRY, formattedEmployer + formattedTitle);
			appendOn(WORK_ENTRY, HTMLworkDates, job.date);
			appendOn(WORK_ENTRY, HTMLworkLocation, job.location);
			appendOn(WORK_ENTRY, HTMLworkDescription, job.description);
		});
	}
};