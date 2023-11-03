import React from "react";
import { AppContext } from "../../components/context";
import { CareerTimeLine } from "./CareerTimeLine";

export function Career() {
    const { colorMode } = React.useContext(AppContext);
    const textStyle = {
        color: colorMode === "light" ? "black" : "white",
    };
    const textBoxStyle = {
        minWidth: "100%",
        maxWidth: "80vw",
        width: "max-content",
        height: "90%",
        position: "relative",
        bottom: "50%",
        backgroundColor: "white",
        boxShadow: colorMode === "light" && "0px 4px 4px rgba(0, 0, 0, 1)",
        padding: "30px",
        borderRadius: "30px",
    };

    return (
        <div className="section-container">
            <section className="page-section-h1">
                <h2 style={textStyle}>Career</h2>
            </section>
            <section className="page-section-h2">
                <CareerTimeLine
                    points={[
                        { date: "2018" },
                        { date: "2020" },
                        { date: "JULY 2022" },
                        { date: "SEPT 2022" },
                        { date: "FEBR 2023" },
                        { date: "JULY 2023" },
                    ]}
                />
            </section>
            <section className="page-section-h1">
                <div style={textBoxStyle}>
                    <p>
                        Hover over a date to see detailsasdas lorem ipsum dor{" "}
                        sit amet lorem ipsum teletharken teligradd it de la joe
                        gefragot mang unan motorchick letit{" "}
                    </p>
                </div>
            </section>
        </div>
    );
}
