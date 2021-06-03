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
		resourcesHTML +=
			'<br><a href="' +
			skill.resources[i] +
			'">' +
			skill.resources[i] +
			"</a>";
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
		description:
			"This was my first project in c++ that I made in my free time. It served as a useful introduction to recursive backtracking, and it demonstrated that you can solve complex problems with computers.",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Sudoku Solver",
		description:
			"I was inspired to make this project when my younger sister became very interested in sudoku. At the time I thought it was very impressive, but it lacked a good way for the user to upload a puzzle.",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Snake",
		description:
			"This was the very first game that I created. It gave me a good introduction to user input, graphics, framerates, and game logic. After completing this, I spent a while playing and improving it.",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Snake V2",
		description:
			"This was an improvement on my previous snake game, and I made it as my final project in my Computer Science B course. It featured fancy graphics that I created using Qt with C++, which I learned for the project.",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Quote Generator",
		description:
			"This is a program I created with Qt and C++ for Concurrent EDA to accept user input and create a quote as a pdf. This project took a whole summer because my boss introduced it as a web scraper and slowly morphed it into whatever this is. Thanks, Dad!",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Gift Wrapping Simulator",
		description:
			"This is a midyear project I created for AP Computer Science using the CMU Graphics Library. We were given three days to create a Christmas themed program, and it was a competition for bonus points. I ended up winning the class competition, cementing my role as the 'king of the nerds'.",
		sourceCode:
			"https://academy.cs.cmu.edu/sharing/royalBlueChimpanzee6119",
		gifUrl: "",
	},
	{
		name: "Rotoscoper",
		description:
			"This was my final project for AP Computer Science that used CUDA and OpenCV to turn pictures into a more cartoony version of themselves. I made it with OpenCV and later optimized it with CUDA to make it run in real time.",
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
		name: "Face Doodle",
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

	// let sourceCodeHTML = "Link to Program:<br>";
	// if (project.sourceCode.length > 0) {
	// sourceCodeHTML +=
	// 	'<br><a href="' +
	// 	project.sourceCode +
	// 	'">' +
	// 	project.sourceCode +
	// 	"</a>";
	// sourceCode.innerHTML = sourceCodeHTML;
	// } else {
	sourceCode.innerHTML = "";
	// }
}
