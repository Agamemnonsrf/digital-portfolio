import React, { useState, useContext } from "react";
import { AppContext } from "./context";
import { SunIcon, MoonIcon } from "./icons";

export function Colormode() {
    const { colorMode, setColorMode } = useContext(AppContext);

    const sunStyle = {
        backgroundColor: colorMode === "light" ? "black" : "unset",
        cursor: colorMode === "light" ? "auto" : "pointer",
    };

    const moonStyle = {
        backgroundColor: colorMode === "dark" ? "white" : "unset",
        cursor: colorMode === "light" ? "pointer" : "auto",
    };

    return (
        <div className="colormode">
            <button
                style={sunStyle}
                onClick={() => {
                    setColorMode("light");
                }}
            >
                <SunIcon color={colorMode} />
            </button>
            <button
                style={moonStyle}
                onClick={() => {
                    setColorMode("dark");
                }}
            >
                <MoonIcon color={colorMode} />
            </button>
        </div>
    );
}
