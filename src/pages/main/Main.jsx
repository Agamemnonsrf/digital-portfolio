import React from "react";
import { AppContext } from "../../components/context";

export function Main() {
    const { colorMode } = React.useContext(AppContext);

    const textStyle = {
        color: colorMode === "light" ? "black" : "white",
    };

    return (
        <div className="section-container-main">
            <section className="page-main-section-h2">
                <h1
                    style={{
                        textAlign: "right",
                        lineHeight: "1.5",
                        fontSize: "100px",
                        ...textStyle,
                    }}
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
                    background:
                        colorMode === "light"
                            ? "linear-gradient(90deg, #FFF 10%, #0096BC 60%, #44DB0F 100%)"
                            : "linear-gradient(90deg, #000 10%, #0096BC 60%, #44DB0F 100%)",
                    width: "97vw",
                    textAlign: "right",
                    paddingRight: "100px",
                }}
            >
                <h2>Aspiring Web Developer</h2>
            </section>
            <section style={textStyle} className="page-main-section-h1">
                <h2>Welcome to my digital portfolio!</h2>
            </section>
        </div>
    );
}
