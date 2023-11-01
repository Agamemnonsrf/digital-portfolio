import React from 'react';
import { useContext } from 'react';
import { AppContext } from './context';

const SidenavButton = ({ icon, text }) => {
    const [hovered, setHovered] = React.useState(false);
    const { section, setSection } = useContext(AppContext);

    const handleHover = () => {
        setHovered(true);
    };

    const handleLeave = () => {
        setHovered(false);
    };
    const decideSectionNumber = (section) => {
        if (typeof section !== 'string') {
            switch (section) {
                case 0:
                    return 'Main';
                case 1:
                    return 'Career';
                case 2:
                    return 'Projects';
                default:
                    return 'Connect';
            }
        } else {
            switch (section) {
                case 'Main':
                    return 0;
                case 'Career':
                    return 1;
                case 'Projects':
                    return 2;
                case 'Connect':
                    return 3;
            }
        }
    }

    const isCurrentSection = decideSectionNumber(section) === text;


    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '25%',
        width: !isCurrentSection && hovered ? '7vw' : '100%',
        transition: 'width 0.3s ease',
        backgroundColor: isCurrentSection ? 'black' : '#fff',
        cursor: isCurrentSection ? 'auto' : 'pointer',
    };
    return (
        <div
            style={buttonStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={() => setSection(decideSectionNumber(text))}
        >
            <span style={{ fontSize: '30px', color: 'black' }}>{!isCurrentSection && hovered ? text : icon}</span>
        </div>
    );
};

const Sidenav = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: "3vw", zIndex: "1" }}>
            <SidenavButton icon="🏠" text="Main" />
            <SidenavButton icon="👤" text="Career" />
            <SidenavButton icon="💻" text="Projects" />
            <SidenavButton icon="✉️" text="Connect" />
        </div>
    );
};

export default Sidenav;
