import React from "react";
import Sidenav from "./components/Sidenav";
import { Colormode } from "./components/Colormode";
import { AppContext } from "./components/context";
import { textureSVG, CircuitSVG, caseHardenedSVG } from "./components/svgs";

export const Layout = ({ children, section, setSection }) => {
    const { colorMode } = React.useContext(AppContext);

    const mainStyle = {
        background: textureSVG()
    };

    return (
        <div className="layout">
            <Sidenav rounded={false} section={section} setSection={setSection} buttons={[{ text: 'Main', icon: "home" }, { text: 'Career', icon: "user" }, { text: 'Projects', icon: "code" }, { text: 'Connect', icon: "envelope" }]} stick="vertical" />
            <main style={mainStyle} className="main">
                {children}
            </main>
            <Colormode />
        </div>
    );
};
