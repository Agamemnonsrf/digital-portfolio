import React from "react";
import { useContext } from "react";
import { AppContext } from "./context";
import { getIcon } from "./icons";

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

const SidenavButton = ({ text, isVert, isCurrentSection, length, children, invertColor }) => {
    const [hovered, setHovered] = React.useState(false);
    const { section, setSection, colorMode } = useContext(AppContext);

    const handleHover = () => {
        setHovered(true);
    };

    const handleLeave = () => {
        setHovered(false);
    };

    const hover = !isCurrentSection && hovered

    const buttonStyle = {
        display: "flex",
        borderRadius: "0",
        alignItems: "center",
        justifyContent: "center",
        height: isVert ? `${length}%` : hover ? "7.5vw" : "3vw",
        width: isVert ? hover ? "7.5vw" : "3vw" : `${length}%`,
        transition: "width 0.3s ease, height 0.3s ease, background-color 0.3s ease",
        backgroundColor:
            colorMode === "light"
                ? isCurrentSection
                    ? invertColor ? "white" : "black"
                    : invertColor ? "black" : "white"
                : isCurrentSection
                    ? invertColor ? "black" : "white"
                    : invertColor ? "white" : "black",
        cursor: isCurrentSection ? "auto" : "pointer",
    };



    return (
        <button
            className="sidenav-button"
            style={buttonStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={() => setSection(decideSectionNumber(text))}
        >
            <span
                style={{
                    fontSize: "23px",
                    color: colorMode === "light" ? invertColor ? "white" : "black" : invertColor ? "black" : "white",
                }}
            >
                {children ? hover ? text : children : text}
            </span>
        </button>
    );
};

const Sidenav = ({ stick, buttons, invertColor }) => {
    const { section, colorMode } = useContext(AppContext);

    const iVert = stick === 'vertical';

    return (
        <div
            style={{
                display: "flex",
                flexDirection: iVert ? "column" : "row",
                height: iVert ? '100%' : "3vw",
                width: iVert ? "3vw" : "100%",
                zIndex: "3",
            }}
        >
            {buttons.map((button, index) => {
                return <SidenavButton text={button.text} isVert={iVert} isCurrentSection={section === index} length={100 / buttons.length} invertColor>
                    {button.icon && getIcon(button.icon, section === index, colorMode)}

                </SidenavButton>
            })}
        </div>
    );
};

export default Sidenav;
