var bio = {
	"name": "Marcos Tanaka",
	"role": "Software Developer",
	"contacts": {
		"email": "marcosatanaka@gmail.com",
		"github": "github.com/marcosatanaka",
		"twitter": "@mactanaka",
		"location": "Maringá - PR"
	},
	"picture": "images/fry.jpg",
	"welcomeMessage": "Passionate about delivering high-quality, testable code.",
	"skills": ["Java", "JavaScript", "Unit Test", "Machine Learning"],
	"display": function() {
		prependOn(HEADER, HTMLheaderRole, this.role);
		prependOn(HEADER, HTMLheaderName, this.name);
		appendOn(HEADER, HTMLbioPic, this.picture);
		appendOn(HEADER, HTMLwelcomeMsg, this.welcomeMessage);
		appendOn(HEADER, HTMLskillsStart);

		this.skills.forEach(skill => {
			appendOn(SKILLS, HTMLskills, skill);
		});

		appendOn(TOP_CONTACTS, HTMLemail, this.contacts.email);
		appendOn(TOP_CONTACTS, HTMLtwitter, this.contacts.twitter);
		appendOn(TOP_CONTACTS, HTMLgithub, this.contacts.github);
		appendOn(TOP_CONTACTS, HTMLlocation, this.contacts.location);
	}
};