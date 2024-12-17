import React from "react";
import { ProjectCard } from "./ProjectCard";
import Sidenav from "../../components/Sidenav";
import { textureSVG } from "../../components/svgs";
import { AppContext } from "../../components/context";
import Modal from "./Modal";


export function Projects() {
    const [section, setSection] = React.useState("Web");
    const [showModal, setShowModal] = React.useState(false);
    const [modalInfo, setModalInfo] = React.useState(null);
    const { colorMode } = React.useContext(AppContext);
    const isLight = colorMode === "light";
    const projects = {
        Web: [
            {
                name: "Equtree",
                description: "Equtree is a Single Page Application which allows you to portray mathematical equations in the format of a tree with nodes as variables. In the beginning there is only the root variable which allows you to run any equation and see the result. You can add a variable inside it and name it as you wish, and if you add another sub-node with the name of that variable you can write an equation for it too (this variable can include nested variables too). Run the equation cards from bottom to the top to see the final result. The canvas can be zoomed in or out and panned around.",
                deploymentLink: "https://equtree.surge.sh",
                codeLink: "https://github.com/ooey/equtree",
                images: ["src/static/equtree-1.png", "src/static/equtree-2.png"],
                tech: ["Reactjs"]
            },
            {
                name: "765Forums",
                description: "This is a web forum/image board made with Nextjs/Reactjs on the front-end and Expressjs on the backend. Users can post threads on the main board and reply to them, and other replies. The main page features a customizable layout which can be turned from 1 thread per row, to a masonry layout for multiple threads per row. A user can go in a specific thread and interact with other users inside. This was one of my first ever React projects that I made as a fullstack exercise.",
                deploymentLink: "",
                codeLink: "https://github.com/ooey/765forums",
                images: ["src/static/765forums-1.png", "src/static/765forums-2.png"],
                tech: ["Nextjs", "Expressjs", "MySQL"]
            },
            {
                name: "Brahms Dev Website",
                description: "A static website serving as the main advertisement for the company. Made with html, css and jquery. Features responsive design.",
                deploymentLink: "https://brahmsdev.com",
                codeLink: "",
                images: ["src/static/brahmsdev-1.png", "src/static/brahmsdev-2.png"],
                tech: ["HTML", "CSS", "JavaScript"]
            },
            {
                name: "Caravage",
                description: "A static website for one of the clients of Brahms Dev. Made with html, css and jquery. Features responsive design.",
                deploymentLink: "https://caravage.ch/",
                codeLink: "",
                images: ["src/static/caravage-1.png", "src/static/caravage-2.png"],
                tech: ["HTML", "CSS", "JavaScript"]
            },
            {
                name: "Token Invest",
                description: "A static website for one of the clients of Brahms Dev. Made with html, css and jquery. Features responsive design.",
                deploymentLink: "https://tokeninvest.ch/",
                codeLink: "",
                images: ["src/static/tokeninvest-1.png", "src/static/tokeninvest-2.png"],
                tech: ["HTML", "CSS", "JavaScript"]
            },
            {
                name: "Escape Velocity",
                description: "A static website for one of the clients of Brahms Dev. Made with html, css and jquery. Features responsive design.",
                deploymentLink: "http://escape-velocity.ch/",
                codeLink: "",
                images: ["src/static/escapevelocity-1.png", "src/static/escapevelocity-2.png"],
                tech: ["HTML", "CSS", "JavaScript"]
            }
        ],
        Mobile: [
            {
                name: "RN Calendar",
                description: "One of the first apps I made with React Native. A simple calendar app that allows the user to add notes for each day of the month and a color code. Features smooth animations using the React Native Animated API and SQLite local storage.",
                deploymentLink: "",
                codeLink: "",
                images: ["src/static/rn-calendar-1.png", "src/static/rn-calendar-2.png"],
                tech: ["React Native", "SQLite"]
            },
        ],
        Collaborative: [
            {
                name: "Office Reservations",
                description: "A website made in co-operation with SP Consulting GmbH as a university project with two other developers, to reserve office spaces for a company. Made with Reactjs. Features a login system with different user permissions, a calendar to pick the date and time of the reservation, and a list of all the reservations. The local storage serves to synchronize the reservations across different instances of the app and prevent actions without the proper permissions. Unit tests were also included in the code.",
                deploymentLink: "https://office-reservations.surge.sh/",
                codeLink: "https://github.com/Agamemnonsrf/Office-Reservations-Assignment",
                images: ["src/static/reservations-1.png", "src/static/reservations-2.png"],
                tech: ["Reactjs"]
            },
            {
                name: "Luminaire Dashboard",
                description: "A website made in co-operation with Olympia Electronics as a university with five other developers, to manage and monitor the remote security devices of a user. Made with Reactjs on the front-end, .NET Core on the back-end and MySQL for the database. Features a login system, a list of all the devices and their status and a control panel to modify them or check for errors.",
                deploymentLink: "https://luminaire-dashboard.surge.sh/",
                codeLink: "https://github.com/OlympiaElectronicsExercise/LuminaireDashboard",
                images: "src/static/luminaire.png",
                tech: ["Reactjs", ".NET Core", "MySQL"]
            },
            {
                name: "Swing Paint",
                description: "A desktop application made with Java Swing as a university project in a team of three developers. It is a simple painting program which allows the user to use all the expected tools of a painting program, such as a brush, an eraser, a color picker, a fill tool, a line tool and a shape tool. The user can also save and load their work.",
                deploymentLink: "",
                codeLink: "https://github.com/Agamemnonsrf/swingpaintmaven",
                images: "src/static/swing-paint.png",
                tech: ["Java Swing"]
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
        border: "1px solid rgba(0,0,0,1)",
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
            <section className="page-section-h05">
                <h2 style={{ color: colorMode === 'light' ? "black" : "white" }}>Projects</h2>
            </section>
            <section className="page-section-h35">
                <div style={boxStyle} className="projects-box">
                    <Sidenav rounded={true} section={section} setSection={setSection} stick="horizontal" keepMode="light" buttons={[{ text: 'Web', icon: null }, { text: 'Mobile', icon: null }, { text: 'Collaborative', icon: null }]} />
                    <div style={projectsBoxStyle}>
                        {projects[section].map((project) => {
                            const backgroundPosition = `${Math.floor(Math.random() * 200)}% ${Math.floor(Math.random() * 200)}%`;

                            return (
                                <ProjectCard
                                    key={project.name}
                                    {...project}
                                    setModalInfo={setModalInfo}
                                    setShowModal={setShowModal}
                                    backgroundPosition={backgroundPosition}
                                />
                            )
                        })}
                        <h2 style={{ color: "black", margin: "0 10px" }}>More<br />Coming<br />Soon...</h2>
                    </div>
                </div>
            </section>
            <Modal
                isLightMode={isLight}
                project={modalInfo}
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false);
                }}
            />
        </div>
    );
}
