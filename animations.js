gsap.registerPlugin(ScrollTrigger, TextPlugin, MorphSVGPlugin);

window.onload = function () {
	MorphSVGPlugin.convertToPath("rect");
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
		let newDescriptor = descriptors[descriptorIndex % descriptors.length] + ".";
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
			trigger: "#projects",
			start: "top top",
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

function illuminateMenuBar(barNumber) {
	let barSelector = "#bar" + barNumber;
	gsap.to(barSelector, {
		attr: {
			fill: "#ff7277",
		},
		duration: 0.1,
	});
	for (let i = 1; i <= 4; i++) {
		if (i == barNumber) {
			continue;
		}

		gsap.to("#bar" + i, {
			attr: {
				fill: "#fff",
			},
			duration: 0.1,
		});
	}
}

function deilluminateMenuBar(barNumber) {
	let barSelector = "#bar" + barNumber;
	gsap.to(barSelector, {
		attr: {
			fill: "#fff",
		},
		duration: 0.1,
	});
}

function expandMenuButton() {
	gsap.to("#containing-rect", {
		morphSVG: "#expanded-containing-rect",
		duration: 0.2,
	});
	gsap.globalTimeline.to("#menu-button", {
		x: -182,
		duration: 0.2,
		delay: -0.2,
	});
	let options = [
		"#menu-projects",
		"#menu-skills",
		"#menu-experience",
		"#menu-contact",
	];
	for (let i = 1; i <= 4; i++) {
		let newY = "" + i * 70;
		gsap.globalTimeline.to("#bar" + i, {
			y: "+=" + newY,
			duration: 0.1,
			// delay: -0.5 * (i - 1),
		});
	}
	for (let i = 1; i <= 4; i++) {
		gsap.globalTimeline.to("#bar" + i, {
			morphSVG: options[i - 1],
			// transform: "translateY(100px)",
			duration: 0.2,
			// delay: 0.1 * i,
		});
	}
}

function shrinkMenuButton() {
	gsap.to("#containing-rect", {
		morphSVG: "#containing-rect",
		duration: 0.2,
	});
	gsap.globalTimeline.to("#menu-button", {
		x: 0,
		duration: 0.2,
		delay: -0.2,
	});
	let options = [
		"#menu-projects",
		"#menu-skills",
		"#menu-experience",
		"#menu-contact",
	];
	for (let i = 1; i <= 4; i++) {
		gsap.globalTimeline.to("#bar" + i, {
			morphSVG: "#bar" + i,
			duration: 0.1,
		});
	}
	for (let i = 1; i <= 4; i++) {
		let newY = "" + i * 70;
		gsap.globalTimeline.to("#bar" + i, {
			y: "-=" + newY,
			duration: 0.05,
			// delay: 0.1 * i,
		});
	}
}
