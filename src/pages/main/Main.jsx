import React from "react";
import { AppContext } from "../../components/context";
import { caseHardenedSVG } from "../../components/svgs";

export function Main() {
    const { colorMode } = React.useContext(AppContext);

    const isLight = colorMode === "light";

    const textStyle = {
        color: isLight ? "black" : "white",
    };
    const altTextStyle = {
        color: isLight ? "white" : "black",
    };

    return (
        <div className="section-container-main">
            <section className="page-main-section-h2">
                <h1
                    style={{
                        textAlign: "right",
                        lineHeight: "1.5",
                        ...textStyle,
                    }}
                    className="responsive-h1"
                >
                    AGAMEMNON
                    <br />
                    SERAFEIM
                </h1>
            </section>
            <section
                className="page-main-section-h1"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    background: `${caseHardenedSVG('%2344e50b', isLight ? 0.24 : 0.24)}, linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.75)) `,
                    width: "97vw",
                    textAlign: "right",
                    color: "white"
                }}
            >
                <h2 className="responsive-h2">Web & Mobile Developer</h2>
            </section>
            <section style={textStyle} className="page-main-section-h1">
                <h2 className="responsive-h2">Welcome to my digital portfolio!</h2>
            </section>
        </div>
    );
}
