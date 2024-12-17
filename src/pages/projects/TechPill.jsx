import React, { useContext } from 'react';
import { AppContext } from '../../components/context';

const exampleStyle = {
    backgroundColor: 'white',
    color: "black",
    borderRadius: '10px',
    padding: '5px 10px',
    display: 'inline-flex',
    alignItems: 'center',
    margin: '2px',
};

const TechPill = ({ name, children, followTheme = false }) => {
    const { colorMode } = React.useContext(AppContext)
    if (followTheme) {
        return (
            <div className="tech-pill" style={{
                ...exampleStyle,
                backgroundColor: colorMode === "light" ? "black" : "white",
                color: colorMode === "light" ? "white" : "black"
            }}>
                <div>{children}</div>
                <span>{name}</span>
            </div>
        )
    }
    return (
        <div className="tech-pill" style={exampleStyle}>
            <div>{children}</div>
            <span>{name}</span>
        </div>
    );
};

export { TechPill };
