import React from 'react'
import { AppContext } from '../../components/context'
import { caseHardenedSVG, textureSVG } from '../../components/svgs';
import { Markup } from "interweave";
import { getIcon } from '../../components/icons';

export function Connect() {
    const { colorMode } = React.useContext(AppContext)

    const isLight = colorMode === "light";

    const boxStyle = {
        width: "80vw",
        height: "90%",
        backgroundColor: '#ffffff',
        backgroundImage: textureSVG(1),
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        boxSizing: "border-box",
    };

    const coloredDivStyle = {
        background: isLight ? `${caseHardenedSVG('%2344e50b', 0.35)}, rgba(0, 0, 0, 1)` : `${caseHardenedSVG('%2344e50b', 0.5)}, rgb(237, 237, 237)`,
        minWidth: "40%",
        padding: "16px 16px 16px 16px",
        borderRadius: 16,
        fontSize: "1.2em",
        textAlign: "center",
    }

    const elements = [
        { icon: getIcon('email'), title: "Mail", content: `<a target='_blank' href='mailto:agamemnonsrf@gmail.com' style='color: ${isLight ? "rgb(215, 219, 255)" : "#646cff"}'>agamemnonsrf@gmail.com</a>` },
        { icon: getIcon('github'), title: "Github", content: `<a target='_blank' href='https://github.com/Agamemnonsrf' style='color: ${isLight ? "rgb(215, 219, 255)" : "#646cff"}'>github.com/Agamemnonsrf</a>` },
        { icon: getIcon('linkedin'), title: "LinkedIn", content: `<a target='_blank' href='https://linkedin.com/in/agamemsrf' style='color: ${isLight ? "rgb(215, 219, 255)" : "#646cff"}'>linkedin.com/in/agamemsrf</a>` },
        { icon: getIcon('phone'), title: "Phone Number", content: "+306945100039" },
        { icon: getIcon('scroll'), title: "PDF Portfolio", content: "<a href='/digital-portfolio/static/CV-Agamemnon-Serafeim.pdf' download>Download</a>" },
    ];

    const gridStyle = {

    };

    const gridItemStyle = {
        ...coloredDivStyle,
        minWidth: 'auto',
    };

    const renderGridItems = () => {
        return elements.map((element, index) => {
            const isLastItem = index === elements.length - 1;
            const isOddNumberOfElements = elements.length % 2 !== 0;
            const itemStyle = isLastItem && isOddNumberOfElements
                ? { ...gridItemStyle, gridColumn: 'span 2' }
                : gridItemStyle;

            return (
                <div
                    className="connect-grid-item"
                    key={index} style={{
                        ...itemStyle,
                    }}>
                    <div style={{
                        marginRight: "10px",
                        background: "black",
                        borderRadius: "10px",
                        padding: 8,
                        fontFamily: "Quicksand",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8
                    }}>
                        {element.icon}
                        {element.title}
                    </div>
                    <div style={{
                        color: isLight ? "white" : "black",
                    }}>
                        <Markup content={element.content} />
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="section-container">
            <section className="page-section-h1">
                <h2 style={{ color: colorMode === 'light' ? "black" : "white" }}>Get Connected</h2>
            </section>
            <section className="page-section-h3">
                <div className="connect-grid">
                    {renderGridItems()}
                </div>
            </section>
        </div>
    )
}
