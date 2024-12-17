import { useState, useContext } from "react";
import { Main } from "./pages/main/Main";
import { Projects } from "./pages/projects/Projects";
import { Connect } from "./pages/connect/Connect";
import { Career } from "./pages/career/Career";

import { AppContext } from "./components/context";

import "./App.css";
import { Layout } from "./layout";

function App() {
    const [section, setSection] = useState("Main");
    const [colorMode, setColorMode] = useState("dark");

    return (
        <div className="container">
            <AppContext.Provider
                value={{ colorMode, setColorMode }}
            >
                <Layout section={section} setSection={setSection}>
                    <GradientBackground color={colorMode} />
                    <MainPage section={section} />
                    <CareerPage section={section} />
                    <ProjectsPage section={section} />
                    <ConnectPage section={section} />
                </Layout>
            </AppContext.Provider>
        </div>
    );
}

export const GradientBackground = ({ color }) => {
    return (
        <div
            style={{
                background:
                    color === "light"
                        ? "linear-gradient(103deg, #FFF 17.75%,rgb(159, 230, 239) 100%)"
                        : "linear-gradient(103deg, #000 17.75%,rgb(22, 91, 121) 100%)",
                // mixBlendMode: color === "light" ? "lighten" : "darken",
                width: "100%",
                height: "100%",
                top: "0",
                left: "0",
            }}
        ></div>
    );
};

const MainPage = ({ section }) => {
    const isCurrentSection = section === 'Main';

    return (
        <>
            <div
                className={`${isCurrentSection ? "current-section" : " "
                    } section`}
                style={{
                    position: "absolute",
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

const CareerPage = ({ section }) => {
    const isCurrentSection = section === "Career";

    return (
        <>
            <div
                className={`${isCurrentSection ? "current-section" : " "
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

const ProjectsPage = ({ section }) => {
    const isCurrentSection = section === 'Projects';

    return (
        <>
            <div
                className={`${isCurrentSection ? "current-section" : " "
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

const ConnectPage = ({ section }) => {
    const isCurrentSection = section === 'Connect';

    return (
        <>
            <div
                className={`${isCurrentSection ? "current-section" : " "
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
