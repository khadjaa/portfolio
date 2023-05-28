import React from 'react';
import './App.css';
import {AboutMe} from "./components/aboutMe/AboutMe";
import {Header} from "./components/header/Header";
import {Skills} from "./components/skills/Skills";
import {Projects} from "./components/projects/Projects";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
            <Projects/>
        </div>
    );
}

export default App;
