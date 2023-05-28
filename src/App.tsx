import React from 'react';
import './App.css';
import {AboutMe} from "./components/aboutMe/AboutMe";
import {Header} from "./components/header/Header";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";
import {Work} from "./components/work/Work";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Work/>
        </div>
    );
}

export default App;
