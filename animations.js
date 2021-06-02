gsap.registerPlugin(ScrollTrigger, TextPlugin, MorphSVGPlugin);

window.onload = function () {
	MorphSVGPlugin.convertToPath(
		"circle, rect, ellipse, line, polygon, polyline"
	);
	animateTimeline();
	animateSkillWheel();
	cycleThroughDescriptors();
};

let descriptors = [
	"Programmer",
	"Software Engineer",
	"Coder",
	"Web Developer",
	"Chess Enthusiast",
];

let descriptorIndex = 0;

function cycleThroughDescriptors() {
	let bigTL = gsap.timeline({ repeat: -1, repeatDelay: 0 });
	console.log(document.getElementById("current-descriptor"));
	while (descriptorIndex < descriptors.length) {
		let smallTL = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
		let newDescriptor =
			descriptors[descriptorIndex % descriptors.length] + ".";
		smallTL.to("#current-descriptor", {
			text: newDescriptor,
			duration: newDescriptor.length * 0.07,
			ease: "none",
			delay: 0.2,
		});
		bigTL.add(smallTL);
		// tl.to("#current-descriptor", {
		// 	text: "",
		// 	duration: 1,
		// 	delay: 0.5,
		// });
		descriptorIndex++;
	}
}

function animateTimeline() {
	gsap.to("#timeline-content, #timeline-markers", {
		x: -3430,
		ease: "none",
		scrollTrigger: {
			trigger: "#skills",
			start: "top bottom",
			// end: "bottom top",
			end: 7000,
			scrub: 1,
			pin: "#projects",
			onUpdate: (self) => {
				let projectIndex = timelineProgressToIndex(self.progress);
				updateTimelineInfoCard(projectIndex);
			},
			snap: {
				snapTo: 1.0 / (12 - 1),
				ease: "power4",
				duration: 0.5,
			},
		},
	});
}

function animateSkillWheel() {
	gsap.to("#skill-wheel", {
		rotation: 360,
		ease: "none",
		scrollTrigger: {
			trigger: "#experience",
			start: "top bottom",
			end: "top top",
			scrub: 1,
			end: 12000,
			onUpdate: (self) => {
				let skillIndex = skillWheelProgressToIndex(self.progress);
				updateSkillInfoCard(skillIndex);
				fillCurrentSkill(skillIndex);
			},
			pin: "#skills",
			snap: {
				snapTo: 0.125,
				ease: "power4",
				duration: 0.5,
			},
		},
	});
}

function fillCurrentSkill(skillIndex) {
	let activeFill = "#ff7277",
		inactiveFill = "none";
	let skillWheelGroup = document.getElementById("Artboard_1");
	let children = skillWheelGroup.childNodes;
	let currentIndex = 0;
	skillIndex = (skillIndex + 1) % 9;
	children.forEach((child) => {
		if (
			child.innerHTML != undefined &&
			child.innerHTML.trim().substring(0, 6) == "<tspan"
		) {
			currentIndex++;
			if (currentIndex == skillIndex) {
				gsap.to(child, {
					attr: {
						fill: activeFill,
					},
					duration: 0.5,
				});
			} else {
				gsap.to(child, {
					attr: {
						fill: inactiveFill,
					},
					duration: 0.5,
				});
			}
		}
		// console.log(child.innerHTML);
	});
}

function pressSubmitFormButton() {
	console.log("pressed submit form button");
	gsap.to("#submit-form-button-rect", {
		attr: { fill: "#000000" },
		duration: 0.2,
	});
}

function releaseSubmitFormButton() {
	console.log("released submit form button");
	gsap.to("#submit-form-button-rect", {
		attr: { fill: "#ffffff" },
		duration: 0.2,
	});
	gsap.to("#submit-form-button-text", {
		innerHTML: "<tspan>Thanks!</tspan>",
		duration: 1.0,
	});
	let button = document.getElementById("submit-form-button");
	button.onclick = "";
	button.onmouseenter = "";
	button.onmouseleave = "";
	gsap.to("#submit-form-button-container", {
		scale: 1.0,
		y: 0,
		duration: 0.2,
	});
	gsap.to("#submit-form-button-rect", {
		attr: { stroke: "none" },
		duration: 0.2,
	});
}

function expandSubmitFormButton() {
	let animationDuration = 0.2;
	console.log("expanding submit form button");
	gsap.to("#submit-form-button-container", {
		scale: 1.2,
		duration: animationDuration,
	});
	gsap.to("#submit-form-button-rect", {
		attr: { fill: "#ffffff" },
		duration: animationDuration,
	});
	gsap.to("#submit-form-button-text", {
		attr: { fill: "#456990" },
		duration: animationDuration,
	});
}

function shrinkSubmitFormButton() {
	let animationDuration = 0.2;
	console.log("shrinking submit form button");
	gsap.to("#submit-form-button-container", {
		scale: 1.0,
		y: 0,
		duration: animationDuration,
	});
	gsap.to("#submit-form-button-rect", {
		attr: { fill: "#456990" },
		duration: animationDuration,
	});
	gsap.to("#submit-form-button-text", {
		attr: { fill: "#ffffff" },
		duration: animationDuration,
	});
}
function expandContactMe() {
	let animationDuration = 0.2;
	console.log("expanding contact me button");
	gsap.to("#contact-me-button-container", {
		scale: 1.2,
		y: 50,
		duration: animationDuration,
	});
	gsap.to("#contact-me-button-rect", {
		attr: { fill: "#ffffff" },
		duration: animationDuration,
	});
	gsap.to("#contact-me-button-text", {
		attr: { fill: "#ff7277" },
		duration: animationDuration,
	});
}

function shrinkContactMe() {
	let animationDuration = 0.2;
	console.log("shrinking contact me button");
	gsap.to("#contact-me-button-container", {
		scale: 1.0,
		y: 0,
		duration: animationDuration,
	});
	gsap.to("#contact-me-button-rect", {
		attr: { fill: "#ff7277" },
		duration: animationDuration,
	});
	gsap.to("#contact-me-button-text", {
		attr: { fill: "#ffffff" },
		duration: animationDuration,
	});
}

function expandMenuButton() {
	tl = gsap.timeline();
	tl.to("#containing-rect", {
		morphSVG: "#expanded-containing-rect",
		duration: 2,
	});
}

function expandMenuButton() {
	gsap.to("#containing-rect", {
		morphSVG: "#expanded-containing-rect",
		duration: 0.5,
	});
	gsap.to("#menu-button", {
		x: -182,
		duration: 0.5,
	});
	tl = gsap.timeline();
	let options = [
		"#menu-projects",
		"#menu-skills",
		"#menu-experience",
		"#menu-contact",
	];
	for (let i = 1; i <= 4; i++) {
		let newY = "" + i * 70;
		gsap.to("#bar" + i, {
			y: "+=" + newY,
			duration: 0.5,
		});
		tl.to("#bar" + i, {
			morphSVG: options[i - 1],
			// transform: "translateY(100px)",
			duration: 0.2,
		});
	}
}

function shrinkMenuButton() {
	gsap.to("#containing-rect", {
		morphSVG: "#containing-rect",
		duration: 0.5,
	});
	gsap.to("#menu-button", {
		x: 0,
		duration: 0.5,
	});
	tl = gsap.timeline();
	let options = [
		"#menu-projects",
		"#menu-skills",
		"#menu-experience",
		"#menu-contact",
	];
	for (let i = 1; i <= 4; i++) {
		let newY = "" + i * 70;
		tl.to("#bar" + i, {
			y: "-=" + newY,
			duration: 0.1,
		});
		gsap.to("#bar" + i, {
			morphSVG: "#bar" + i,
			duration: 0.2,
		});
	}
}

// function shrinkMenuButton() {
// 	let menuButtonSelector = "#menu-button";
// 	let isExpanded =
// 		document.getElementById("containing-rect").getAttribute("width") ==
// 		"310";
// 	let windowWidth = window.innerWidth;
// 	let animationDuration = 0.3;

// 	gsap.to("#containing-rect", {
// 		attr: { width: 130.96, height: 111.15 },
// 		duration: animationDuration,
// 	});

// 	let newX = document.getElementById("menu-button").getAttribute("x"); // + 310;
// 	gsap.to(menuButtonSelector, { x: newX, duration: animationDuration });

// 	let height = 130.96,
// 		width = 111.15;
// 	// let padding = 113.65 - 86.43,
// 	let padding = 1.0,
// 		newBarHeight = 10.55,
// 		newBarWidth = 50.63,
// 		barSpacing = 0.3;
// 	// barSpacing = 129.04 - 113.65;
// 	let usableHeight = height - padding * 2 - newBarHeight;
// for (let i = 1; i <= 4; i++) {
// 	let barSelector = "#bar" + i;
// 	gsap.to(barSelector, {
// 		attr: {
// 			y: 0,
// 			width: newBarWidth,
// 			height: newBarHeight,
// 		},
// 		duration: animationDuration,
// 	});
// }
// }

// function expandMenuButton() {
// 	console.log("animating menu button");
// 	let menuButtonSelector = "#menu-button";
// 	let isExpanded =
// 		document.getElementById("containing-rect").getAttribute("width") ==
// 		"310";
// 	let windowWidth = window.innerWidth;

// 	let animationDuration = 0.3;

// 	gsap.to("#containing-rect", {
// 		attr: { width: 310, height: 420 },
// 		duration: animationDuration,
// 	});
// 	let newX =
// 		document.getElementById("menu-button").getAttribute("x") -
// 		(310 - 130.96);

// 	gsap.to(menuButtonSelector, { x: newX, duration: animationDuration });

// 	let height = 420,
// 		width = 310;
// 	let padding = 40,
// 		newBarHeight = 30;
// 	let usableHeight = height - padding * 2 - newBarHeight;
// for (let i = 1; i <= 4; i++) {
// 	let newY = (i - 1) * (usableHeight / 4) + padding - newBarHeight / 2.0;
// 	let barSelector = "#bar" + i;
// 	gsap.to(barSelector, {
// 		attr: {
// 			y: newY,
// 			width: 310 - padding * 2,
// 			height: newBarHeight,
// 		},
// 		duration: animationDuration,
// 	});
// }
// 	for (let i = 1; i <= 4; i++) {
// 		let newY = (i - 1) * (usableHeight / 4) + padding - newBarHeight / 2.0;
// 		let barSelector = "#bar" + i;
// 		gsap.to(barSelector, {
// 			attr: {
// 				y: newY,
// 				width: 310 - padding * 2,
// 				height: newBarHeight,
// 			},
// 			duration: animationDuration,
// 		});
// 	}
// 	// MorphSVGPlugin.convertToPath("#bar1, #menu-projects");
// 	gsap.to("#bar1", {
// 		duration: 1,
// 		delay: 1,
// 		morphSVG: "#menu-projects",
// 	});
// }
