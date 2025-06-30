import React from 'react';
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Projects from '../../Components/Projects/Projects';
import Skills from '../../Components/Skills/Skills';
import ContactMe from '../../Components/ContactMe/ContactMe';

const Home = () => {
    return (
        <div>
            <section id="home">
                <Banner></Banner>
            </section>
            
            <section id="about">
                <About></About>
            </section>
            
            <section id="projects">
                <Projects></Projects>
            </section>
            
            <section id="skills">
                <Skills></Skills>
            </section>
            
            <section id="contact">
                <ContactMe></ContactMe>
            </section>
        </div>
    );
};

export default Home;