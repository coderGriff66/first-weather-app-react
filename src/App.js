import React from "react";
import HeaderDate from "./HeaderDate";
import SearchEngine from "./SearchEngine";
import Outlook from "./Outlook";
import Planner from "./Planner";

import './App.css';

export default function App() {
  return (
    <div className="App">
     <div className="container">
        <div className="WeatherApp">
          <HeaderDate />
          <SearchEngine defaultCity="Detroit" />
          <Outlook />
          
          <Planner />

                   

          <footer>
            This project coded by Jennifer Griffin and is 
            <a href="https://github.com/coderGriff66/first-weather-app-react" target="_blank" rel="noreferrer"> open-sourced on GitHub</a>
          </footer>
        </div>
      </div>
    </div>
  );
}


