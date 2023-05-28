import React from 'react';
import './App.css';
import {AboutMe} from "./components/aboutMe/AboutMe";
import {Header} from "./components/header/Header";
import {Skills} from "./components/skills/Skills";

function App() {
    return (
        <div className="App">
            <Header/>
            <AboutMe/>
            <Skills/>
        </div>
    );
}

export default App;
