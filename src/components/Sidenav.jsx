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

const SidenavButton = ({ isFirst, isLast, text, isVert, isCurrentSection, length, children, keepMode, setSection, rounded }) => {
    const [hovered, setHovered] = React.useState(false);
    const { colorMode } = useContext(AppContext);

    let color = keepMode ? keepMode : colorMode;

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
        height: isVert ? `${length}%` : hover ? "80px" : "40px",
        width: isVert ? hover ? "100px" : "50px" : `${length}%`,
        transition: isVert ? "width 0.3s ease, background-color 0.3s ease" : "height 0.3s ease",
        backgroundColor:
            color === "light"
                ? isCurrentSection
                    ? "white"
                    : "black"
                : isCurrentSection
                    ? "black"
                    : "white",
        cursor: isCurrentSection ? "auto" : "pointer",
        borderTopLeftRadius: isFirst && !isVert && rounded ? "10px" : "0px",
        borderTopRightRadius: isLast && !isVert && rounded ? "10px" : "0px",
        borderBottomLeftRadius: "0",
        borderBottomRightRadius: "0",
    };



    return (
        <button
            className="sidenav-button"
            style={buttonStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={() => {
                setSection(text)
            }}
            key={text}
        >
            <span
                style={{
                    color: color === "light" ? isCurrentSection
                        ? "black"
                        : "white"
                        : isCurrentSection
                            ? "white"
                            : "black",
                }}
            >
                {children ? hover ? text : children : text}
            </span>
        </button>
    );
};

const Sidenav = ({ stick, buttons, keepMode = null, section, setSection, rounded = false }) => {
    const { colorMode } = useContext(AppContext);
    let color = keepMode ? keepMode : colorMode;
    const iVert = stick === 'vertical';

    return (
        <div
            style={{
                display: "flex",
                flexDirection: iVert ? "column" : "row",
                height: iVert ? '100%' : "40px",
                width: iVert ? "50px" : "100%",
                zIndex: "3",
            }}
        >
            {buttons.map((button, index) => {
                return <SidenavButton key={index} isFirst={index === 0} isLast={index === buttons.length - 1} rounded={rounded} text={button.text} isVert={iVert} isCurrentSection={section === button.text} length={100 / buttons.length} keepMode={keepMode} setSection={setSection}>
                    {button.icon && getIcon(button.icon, section === button.text, color)}
                </SidenavButton>
            })}
        </div>
    );
};

export default Sidenav;
