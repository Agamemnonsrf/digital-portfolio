import React from 'react';
import { useContext } from 'react';
import { AppContext } from './context';
import {
    HomeIcon, UserIcon,
    CodeIcon,
    EnvelopeIcon
} from './icons';

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

const SidenavButton = ({ text, children }) => {
    const [hovered, setHovered] = React.useState(false);
    const { section, setSection, colorMode } = useContext(AppContext);

    const handleHover = () => {
        setHovered(true);
    };

    const handleLeave = () => {
        setHovered(false);
    };


    const isCurrentSection = decideSectionNumber(section) === text;

    const buttonStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '25%',
        width: !isCurrentSection && hovered ? '6vw' : '100%',
        transition: 'width 0.3s ease',
        backgroundColor: colorMode === 'light' ? isCurrentSection ? 'white' : 'black' : isCurrentSection ? 'black' : 'white',
        cursor: isCurrentSection ? 'auto' : 'pointer',
    };

    return (
        <div
            style={buttonStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={() => setSection(decideSectionNumber(text))}
        >
            <span style={{ fontSize: '23px', color: colorMode === 'light' ? 'white' : 'black' }}>{!isCurrentSection && hovered ? text : children}</span>
        </div>
    );
};

const Sidenav = () => {
    const { section, colorMode } = useContext(AppContext);
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: "3vw", zIndex: "3" }}>
            <SidenavButton text="Main" >
                <HomeIcon isCurrentSection={section === 0} color={colorMode} />
            </SidenavButton>

            <SidenavButton text="Career" >
                <UserIcon isCurrentSection={section === 1} color={colorMode} />
            </SidenavButton>

            <SidenavButton text="Projects" >
                <CodeIcon isCurrentSection={section === 2} color={colorMode} />
            </SidenavButton>

            <SidenavButton text="Connect" >
                <EnvelopeIcon isCurrentSection={section === 3} color={colorMode} />
            </SidenavButton>

        </div>
    );
};



export default Sidenav;
