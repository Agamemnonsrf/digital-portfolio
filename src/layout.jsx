import React from "react";
import Sidenav from "./components/Sidenav";
import { Colormode } from "./components/Colormode";
import { AppContext } from "./components/context";
import { textureSVG } from "./components/svgs";

export const Layout = ({ children, section, setSection }) => {
    const { colorMode } = React.useContext(AppContext);

    const mainStyle = {
        backgroundColor: colorMode === "light" ? "white" : "black",
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
