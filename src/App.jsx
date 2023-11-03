import { useState, useContext } from "react";
import { Main } from "./pages/main/Main";
import { Projects } from "./pages/projects/Projects";
import { Connect } from "./pages/connect/Connect";
import { Career } from "./pages/career/Career";

import { AppContext } from "./components/context";

import "./App.css";
import { Layout } from "./layout";

function App() {
    const [section, setSection] = useState(0);
    const [colorMode, setColorMode] = useState("dark");

    return (
        <div className="container">
            <AppContext.Provider
                value={{ section, setSection, colorMode, setColorMode }}
            >
                <Layout>
                    <GradientBackground color={colorMode} />
                    <MainPage section={section} color={colorMode} />
                    <CareerPage section={section} color={colorMode} />
                    <ProjectsPage section={section} color={colorMode} />
                    <ConnectPage section={section} color={colorMode} />
                </Layout>
            </AppContext.Provider>
        </div>
    );
}

const GradientBackground = ({ color }) => {
    return (
        <div
            style={{
                background:
                    color === "light"
                        ? "linear-gradient(103deg, #FFF 17.75%, #A6D9E5 100%)"
                        : "linear-gradient(103deg, #000 17.75%, #09455F 100%)",
                mixBlendMode: color === "light" ? "lighten" : "darken",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
            }}
        ></div>
    );
};

const MainPage = ({ section, color }) => {
    const isCurrentSection = section === 0;

    return (
        <>
            <div
                className={`${
                    isCurrentSection ? "current-section" : " "
                } section`}
                style={{
                    position: "absolute",
                    //center this div with top and left
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Main />
            </div>
        </>
    );
};

const CareerPage = ({ section, color }) => {
    const isCurrentSection = section === 1;

    return (
        <>
            <div
                className={`${
                    isCurrentSection ? "current-section" : " "
                } section`}
                style={{
                    position: "absolute",
                }}
            >
                <Career />
            </div>
        </>
    );
};

const ProjectsPage = ({ section, color }) => {
    const isCurrentSection = section === 2;

    return (
        <>
            <div
                className={`${
                    isCurrentSection ? "current-section" : " "
                } section`}
                style={{
                    position: "absolute",
                }}
            >
                <Projects />
            </div>
        </>
    );
};

const ConnectPage = ({ section, color }) => {
    const isCurrentSection = section === 3;

    return (
        <>
            <div
                className={`${
                    isCurrentSection ? "current-section" : " "
                } section`}
                style={{
                    position: "absolute",
                }}
            >
                <Connect />
            </div>
        </>
    );
};

export default App;
