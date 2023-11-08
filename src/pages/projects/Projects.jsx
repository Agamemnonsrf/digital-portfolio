import React from "react";
import { ProjectCard } from "./ProjectCard";
import Sidenav from "../../components/Sidenav";
import { textureSVG } from "../../components/svgs";
import { AppContext } from "../../components/context";

export function Projects() {
    const [section, setSection] = React.useState("Web");
    const { colorMode } = React.useContext(AppContext);

    const projects = {
        Web: [
            {
                name: "765Forums",
                description: "This website!",
                deploymentLink: "",
                codeLink: "https://github.com/ooey/765forums",
                images: ["src/pages/projects/images/765forums-1.png", "src/pages/projects/images/765forums-2.png"]
            },
            {
                name: "Equtree",
                description: "This website!2",
                deploymentLink: "https://equtree.surge.sh",
                codeLink: "https://github.com/ooey/equtree",
                images: ["src/pages/projects/images/equtree-1.png", "src/pages/projects/images/equtree-2.png"]
            }, {
                name: "This Site",
                description: "This website!3",
                deploymentLink: "",
                codeLink: "",
                images: ["src/pages/projects/images/765forums-1.png", "src/pages/projects/images/765forums-2.png"]
            },
            {
                name: "Brahms Dev Website",
                description: "This website!3",
                deploymentLink: "https://brahmsdev.com",
                codeLink: "",
                images: ["src/pages/projects/images/brahmsdev-1.png", "src/pages/projects/images/brahmsdev-2.png"]
            },
            {
                name: "Caravage",
                description: "This website!3",
                deploymentLink: "https://caravage.ch/",
                codeLink: "",
                images: ["src/pages/projects/images/caravage-1.png", "src/pages/projects/images/caravage-2.png"]
            },
            {
                name: "Token Invest",
                description: "This website!3",
                deploymentLink: "https://tokeninvest.ch/",
                codeLink: "",
                images: ["src/pages/projects/images/tokeninvest-1.png", "src/pages/projects/images/tokeninvest-2.png"]
            },
            {
                name: "Escape Velocity",
                description: "This website!3",
                deploymentLink: "http://escape-velocity.ch/",
                codeLink: "",
                images: ["src/pages/projects/images/escapevelocity-1.png", "src/pages/projects/images/escapevelocity-2.png"]
            }
        ],
        Mobile: [
            {
                name: "RN Calendar",
                description: "This website!551",
                deploymentLink: "",
                codeLink: "",
                images: ["./images/765forums-1.png", "./images/765forums-2.png"]
            },
        ],
        Collaborative: [
            {
                name: "Swing Paint",
                description: "ooga website!",
                deploymentLink: "",
                codeLink: "",
                images: ["./images/765forums-1.png", "./images/765forums-2.png"]
            },
        ],
    };

    const boxStyle = {
        width: "80vw",
        height: "90%",
        backgroundColor: '#ffffff',
        backgroundImage: textureSVG(1),
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    };

    const projectsBoxStyle = {
        display: "flex",
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        overflowX: "auto",
        height: "85%",
        paddingBottom: "20px",
    };

    return (
        <div className="section-container">
            <section className="page-section-h1">
                <h2 style={{ color: colorMode === 'light' ? "black" : "white" }}>Projects</h2>
            </section>
            <section className="page-section-h3">
                <div style={boxStyle}>
                    <Sidenav rounded={true} section={section} setSection={setSection} stick="horizontal" keepMode="light" buttons={[{ text: 'Web', icon: null }, { text: 'Mobile', icon: null }, { text: 'Collaborative', icon: null }]} />
                    <div style={projectsBoxStyle}>
                        {projects[section].map((project) => (
                            <ProjectCard
                                {...project}
                            />
                        ))}
                        <h2 style={{ color: "black", margin: "0 10px" }}>More<br />Coming<br />Soon...</h2>
                    </div>
                </div>
            </section>
        </div>
    );
}
