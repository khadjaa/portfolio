import React from 'react';
import './App.css';
import {AboutMe} from "./components/aboutMe/AboutMe";
import {Header} from "./components/header/Header";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Work} from "./components/work/Work";
import {Contacts} from "./components/contacts/Contacts";
import {Footer} from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Work/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
