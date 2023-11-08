import React from 'react';

const exampleStyle = {
    backgroundColor: 'white',
    color: "black",
    borderRadius: '10px',
    padding: '5px 10px',
    display: 'inline-flex',
    alignItems: 'center',
    margin: '2px',
};

const TechPill = ({ name, children }) => {
    return (
        <div className="tech-pill" style={exampleStyle}>
            <div>{children}</div>
            <span>{name}</span>
        </div>
    );
};

export { TechPill };
