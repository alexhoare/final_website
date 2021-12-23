const skillInfo = [
	{
		name: "C++",
		description:
			"C++ was the second programming language that I had learned, and it is the one that I favor the most today. It's speed and versatility was very appealing. I now use it most often for programming competitions.",
		resources: [
			"https://www.amazon.com/Sams-Teach-Yourself-One-Hour/dp/0672335670",
			"http://cplusplus.com",
		],
	},
	{
		name: "Java",
		description:
			"I learned Java in AP Computer Science. I've created countless console applications and played around with databases in this language.",
		resources: ["https://docs.oracle.com/en/java/"],
	},
	{
		name: "Python",
		description:
			"Over time, I've become fonder towards Python because of its endless capabilities and robustness. It was the first language I learned and is my favorite. My only gripe is that it is not statically typed.",
		resources: ["https://www.python.org/"],
	},
	{
		name: "Qt/QML",
		description:
			"Qt is my go-to for developing GUIs for a desktop application. Its event system is very intuitive, and you are able to separate the front end and back end by using QML, something not too common with GUI frameworks.",
		resources: ["https://doc.qt.io/"],
	},
	{
		name: "OpenCV",
		description:
			"Any computer vision application I've created has used OpenCV in some form. It is compatible with C++ and Python, but I have struggled to find good documentation for the Python version in the past.",
		resources: ["https://docs.opencv.org/master/"],
	},
	{
		name: "CUDA",
		description:
			"I used CUDA for my real-time rotoscoper in 11th grade. It allowed me to make the program twice as fast, and it introduced me to concurrent algorithms. I've found it easy to use if you already have good knowledge of C.",
		resources: ["https://docs.nvidia.com/cuda/"],
	},
	{
		name: "HTML",
		description:
			"Of course, every website almost every website uses HTML, and, if it's not, there is something converted into HTML. I've made a couple websites since I started programming, all using HTML.",
		resources: ["https://www.w3schools.com/html/"],
	},
	{
		name: "Javascript",
		description:
			"Knowing Javascript is imperative if you want to make your website interactive. I would like to learn Typescript in the future, but Javascript does just fine for any relatively small website.",
		resources: ["https://www.w3schools.com/js/"],
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
			'<br><a target="_blank" href="' +
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
		sourceCode: "https://academy.cs.cmu.edu/sharing/royalBlueChimpanzee6119",
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
		description:
			"I created this during my second summer at Concurrent EDA. It is an algorithm to find groups of connected pixels in a compressed binary image, and it runs with quadratic complexity.",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Mario Kart",
		description:
			"This was my semester project for my Computer Science C course. It was made using pygame and pyopengl, where the player would drive around the course.",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "Face Doodle",
		description:
			"This is my final project for my Computer Science C course. It is a program that takes in a doodle of a face, locates the eyes, nose, and mouth, and maps them to your facial landmarks. In laymen's terms, it makes your doodle move with your face in real time.",
		sourceCode: "",
		gifUrl: "",
	},
	{
		name: "This Website",
		description:
			"Your looking at it! I made this website with HTML, CSS, Javascript, and the wonderful Greensock Animation Platform. It has been very fun building this, even with its bugs. I'm not sure if I actually want to freelance, so, if you're an employer, please use the contact me section and I will respond as soon as I possibly can.",
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
