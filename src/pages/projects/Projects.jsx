import React from "react";
import { Topnav } from "./Topnav";
import { ProjectCard } from "./ProjectCard";
import Sidenav from "../../components/Sidenav";

export function Projects() {
    const [section, setSection] = React.useState("Web");

    const projects = {
        Web: [
            {
                name: "Personal Website",
                description: "This website!",
                link: "",
            },
            {
                name: "Personal Website2",
                description: "This website!2",
                link: "",
            },
            {
                name: "Personal Website3",
                description: "This website!3",
                link: "",
            },
            {
                name: "Personal Website4",
                description: "This website!4",
                link: "",
            },
            {
                name: "Personal Website2",
                description: "This website!2",
                link: "",
            },
            {
                name: "Personal Website3",
                description: "This website!3",
                link: "",
            },
            {
                name: "Personal Website4",
                description: "This website!4",
                link: "",
            },
            {
                name: "Personal Website2",
                description: "This website!2",
                link: "",
            },
            {
                name: "Personal Website3",
                description: "This website!3",
                link: "",
            },
            {
                name: "Personal Website4",
                description: "This website!4",
                link: "",
            },

        ],
        Mobile: [
            {
                name: "Personal Website2",
                description: "This website!551",
                link: "",
            },
            {
                name: "Personal Website3",
                description: "This website!552",
                link: "",
            },
            {
                name: "Personal Website4",
                description: "This website!553",
                link: "",
            },
        ],
        Collaborative: [
            {
                name: "Sample project Website",
                description: "ooga website!",
                link: "",
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
        padding: "0 10px ",
    };

    const projectsBoxStyle = {
        display: "flex",
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        overflowX: "auto",
    };

    return (
        <div className="section-container">
            <section className="page-section-h1">
                <h2>Projects</h2>
            </section>
            <section className="page-section-h3">
                <div style={boxStyle}>
                    <Sidenav stick="horizontal" invertColor buttons={[{ text: 'Web', icon: null }, { text: 'Mobile', icon: null }, { text: 'Collaborative', icon: null }]} />
                    <div style={projectsBoxStyle}>
                        {projects[section].map((project) => (
                            <ProjectCard
                                name={project.name}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
