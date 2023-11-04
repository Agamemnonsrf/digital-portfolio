import React from "react";
import { useContext } from "react";
import { AppContext } from "../../components/context";

const decideSectionNumber = (section) => {
    if (typeof section !== "string") {
        switch (section) {
            case 0:
                return "Main";
            case 1:
                return "Career";
            case 2:
                return "Projects";
            default:
                return "Connect";
        }
    } else {
        switch (section) {
            case "Main":
                return 0;
            case "Career":
                return 1;
            case "Projects":
                return 2;
            case "Connect":
                return 3;
        }
    }
};

const TopnavButton = ({ text }) => {
    const [hovered, setHovered] = React.useState(false);
    const { colorMode } = useContext(AppContext);

    const handleHover = () => {
        setHovered(true);
    };

    const handleLeave = () => {
        setHovered(false);
    };

    const isCurrentSection = decideSectionNumber(section) === text;

    const buttonStyle = {
        display: "flex",
        borderRadius: "0",
        alignItems: "center",
        justifyContent: "center",
        width: "33.33%",
        height: hovered ? "7.5vw" : "3vw",
        transition: "height 0.3s ease, background-color 0.3s ease",
        backgroundColor:
            colorMode === "light"
                ? isCurrentSection
                    ? "white"
                    : "black"
                : isCurrentSection
                ? "black"
                : "white",
        cursor: isCurrentSection ? "auto" : "pointer",
    };

    return (
        <button
            className="sidenav-button"
            style={buttonStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
        >
            <span
                style={{
                    fontSize: "23px",
                    color: colorMode === "light" ? "white" : "black",
                }}
            ></span>
        </button>
    );
};

export const Topnav = () => {
    return (
        <div
            style={{
                display: "flex",
                height: "3vw",
                width: "100%",
                zIndex: "3",
                position: "fixed",
                top: "0",
                left: "0",
                backgroundColor: colorMode === "light" ? "white" : "black",
            }}
        >
            <TopnavButton text="Web" />

            <TopnavButton text="Mobile" />

            <TopnavButton text="Collaborative" />
        </div>
    );
};
