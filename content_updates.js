const skillInfo = [
	{
		name: "C++",
		description:
			"C++ was the second programming language that I had learned, and it is the one that I favor the most today. It's speed and versatility was very appealing. I now use it most often for programming competitions.",
		resources: ["www.google.com"],
	},
	{
		name: "Java",
		description:
			"C++ description goes here. Here is some background information about this skill. I learned this skill at this point in time and it has been very useful for my development as a programmer.",
		resources: ["www.google.com"],
	},
	{
		name: "Python",
		description:
			"C++ description goes here. Here is some background information about this skill. I learned this skill at this point in time and it has been very useful for my development as a programmer.",
		resources: ["www.google.com"],
	},
	{
		name: "Qt/QML",
		description:
			"C++ description goes here. Here is some background information about this skill. I learned this skill at this point in time and it has been very useful for my development as a programmer.",
		resources: ["www.google.com"],
	},
	{
		name: "OpenCV",
		description:
			"C++ description goes here. Here is some background information about this skill. I learned this skill at this point in time and it has been very useful for my development as a programmer.",
		resources: ["www.google.com"],
	},
	{
		name: "CUDA",
		description:
			"C++ description goes here. Here is some background information about this skill. I learned this skill at this point in time and it has been very useful for my development as a programmer.",
		resources: ["www.google.com"],
	},
	{
		name: "HTML",
		description:
			"C++ description goes here. Here is some background information about this skill. I learned this skill at this point in time and it has been very useful for my development as a programmer.",
		resources: ["www.google.com"],
	},
	{
		name: "Javascript",
		description:
			"C++ description goes here. Here is some background information about this skill. I learned this skill at this point in time and it has been very useful for my development as a programmer.",
		resources: ["www.google.com"],
	},
];

function skillWheelProgressToIndex(percentage) {
	let index = Math.round(percentage * skillInfo.length) % skillInfo.length;
	return index;
}

function updateSkillInfoCard(skillIndex) {
	let skill = skillInfo[skillIndex];

	let title = document.getElementById("skill-title");
	let description = document.getElementById("skill-description");
	let resources = document.getElementById("skill-resources");

	title.innerHTML = skill.name;

	description.innerHTML = skill.description;

	let resourcesHTML = "Links to books and resources:";
	for (let i = 0; i < skill.resources.length; i++) {
		resourcesHTML += "<br>" + skill.resources[i];
	}
	resources.innerHTML = resourcesHTML;
}

let projectInfo = [
	{
		name: "Pig Latin Translator",
		description:
			"This was the first program I had ever made, and it really got me interested in coding. I made it in an free online Codecademy course, and it was a blast.",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "N-Queens Solver",
		description: "",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Sudoku Solver",
		description: "",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Snake",
		description: "",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Snake V2",
		description: "",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Quote Generator",
		description: "",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Gift Wrapping",
		description: "",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Rotoscoper",
		description: "",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Blob Detection",
		description: "",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Mario Kart",
		description: "",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Gaze Detection",
		description: "",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "This Website",
		description: "",
		sourceCode: "",
		gifUrl: "",
	},
];

function timelineProgressToIndex(percentage) {
	let index = Math.round(percentage * (projectInfo.length - 1));
	return index;
}

function updateTimelineInfoCard(projectIndex) {
	let project = projectInfo[projectIndex];

	let title = document.getElementById("project-title");
	let description = document.getElementById("project-description");
	let sourceCode = document.getElementById("project-source-code");

	title.innerHTML = project.name;

	description.innerHTML = project.description;

	let sourceCodeHTML = "Source Code:<br>";
	if (project.sourceCode.length > 0) {
		sourceCode.innerHTML = sourceCodeHTML + project.sourceCode;
	}
}
