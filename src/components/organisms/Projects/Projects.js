import React from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import welcome from "../../../images/welcome.png";
//Pictures of Projects
import salon from "../../../images/salon.png";
import todo from "../../../images/todo.png";
import savings from "../../../images/savings.png";
import todoapp from "../../../images/todoapp.png";

const ProjectsBox = styled.section`
	margin: 38px 24px;
	max-width: 600px;

	@media (min-width: 600px) {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		flex-grow: 1;
		padding: 0;
		margin: 38px auto;
	}
   @media (min-width: 1000px) {
      max-width: 1000px;
      margin: 50px;
	}
   @media (min-width: 1150px) {
      max-width: 1100px;
      margin: 50px auto;
	}
`;

const Title = styled.h1`
	margin: 10px 0 20px;
	font-size: ${props => props.small ? "24px" : "36px"};
	text-transform: uppercase;
`;

const Description = styled.p`
	padding: 15px 0 30px;
	font-size: 16px;
	line-height: 25px;
	font-weight: 500;
	@media (min-width: 1000px) {
		width: 50%;
	}
`;

const ProjectImage = styled.img`
	margin: 0;
	padding: 0;
	width: 100%;
	max-width: 600px;
	border: 1px solid #00000029;
	overflow: hidden;

	@media (min-width: 1000px) {
		width: 50%;
	}
`;

const SectionButtons = styled.section`
	width: 100%;
	display: flex;
	justify-content: start;
`;

const ProjectBox = styled.section`
margin: 20px 0 0;
	@media (min-width: 600px) {
		margin: 20px 0;
	}

	@media (min-width: 1000px) {
		display: flex;
		flex-direction: row-reverse;
	}
`;

const listOfProject = [
	{
		image: welcome,
		name: "Welcome Page",
		description: "Created in React, StyledComponent, RWD",
		demoLink: "https://patrycjapaczkowska.github.io/Welcome-Page/",
		codeLink: "https://github.com/PatrycjaPaczkowska/Welcome-Page",
	},
	{
		image: todo,
		name: "ToDo application",
		description: "Created in React, RWD",
		demoLink: "https://patrycjapaczkowska.github.io/To-do-application/",
		codeLink: "https://github.com/PatrycjaPaczkowska/To-do-application",
	},
	{
		image: salon,
		name: "Beauty Salon",
		description: "Created in JavaScript, Css, Flexbox, RWD",
		demoLink: "https://umbbra.github.io/SalonPieknosci/",
		codeLink: "https://github.com/umbbra/SalonPieknosci",
	},
	{
		image: savings,
		name: "Saving Application",
		description: "Created in React, Sass, Flexbox, RWD",
		demoLink: "https://umbbra.github.io/savings/",
		codeLink: "https://github.com/umbbra/savings",
	},
	{
		image: todoapp,
		name: "ToDo application",
		description: "Created in React, Css, RWD.",
		demoLink: "https://umbbra.github.io/todoapp/",
		codeLink: "https://github.com/umbbra/todoapp/",
	},
];

const projectList = listOfProject.map((project) => (
	<ProjectBox>
		<ProjectImage src={project.image} alt={project.name} />
		<Description>
         <Title small>{project.name}</Title>
			{project.description}
			<SectionButtons>
				<Button href={project.demoLink}>Demo</Button>
				<Button href={project.codeLink}>Code</Button>
			</SectionButtons>
		</Description>
	</ProjectBox>
));

const Projects = () => {
	return (
		<ProjectsBox>
			<Title id="projects">Projects</Title>
			{projectList}
		</ProjectsBox>
	);
};

export default Projects;
