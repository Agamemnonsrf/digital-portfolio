import React from "react";
import { ProjectCard } from "./ProjectCard";
import Sidenav from "../../components/Sidenav";

export function Projects() {
    const [section, setSection] = React.useState("Web");

    const projects = {
        Web: [
            {
                name: "765Forums",
                description: "This website!",
                deploymentLink: "",
                codeLink: ""
            },
            {
                name: "Equtree",
                description: "This website!2",
                deploymentLink: "",
                codeLink: ""
            }, {
                name: "This Site",
                description: "This website!3",
                deploymentLink: "",
                codeLink: ""
            },
            {
                name: "Brahms Dev Website",
                description: "This website!3",
                deploymentLink: "",
                codeLink: ""
            },
            {
                name: "Caravage",
                description: "This website!3",
                deploymentLink: "",
                codeLink: ""
            },
            {
                name: "Token Invest",
                description: "This website!3",
                deploymentLink: "",
                codeLink: ""
            },
            {
                name: "Escape Velocity",
                description: "This website!3",
                deploymentLink: "",
                codeLink: ""
            }, {
                name: "Hygienic Live",
                description: "This website!3",
                deploymentLink: "",
                codeLink: ""
            }
        ],
        Mobile: [
            {
                name: "RN Calendar",
                description: "This website!551",
                deploymentLink: "",
                codeLink: ""
            },
        ],
        Collaborative: [
            {
                name: "Swing Paint",
                description: "ooga website!",
                deploymentLink: "",
                codeLink: ""
            },
        ],
    };

    const boxStyle = {
        width: "80vw",
        height: "90%",
        backgroundColor: "white",
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
        height: "75%",
        paddingBottom: "20px",
    };

    return (
        <div className="section-container">
            <section className="page-section-h1">
                <h2>Projects</h2>
            </section>
            <section className="page-section-h3">
                <div style={boxStyle}>
                    <Sidenav rounded={true} section={section} setSection={setSection} stick="horizontal" keepMode="light" buttons={[{ text: 'Web', icon: null }, { text: 'Mobile', icon: null }, { text: 'Collaborative', icon: null }]} />
                    <div style={projectsBoxStyle}>
                        {projects[section].map((project) => (
                            <ProjectCard
                                name={project.name}
                            />
                        ))}
                        <h2 style={{ color: "black" }}>More Coming Soon...</h2>
                    </div>
                </div>
            </section>
        </div>
    );
}
