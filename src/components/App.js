// We have removed some lines of code from App.js and index.js.

// Render the html tag given in the app.js file into dom using ReactDOM.render.

// Make App component a default export

// Make App component a functional component

// Render the App component on the DOM element with id="root" using ReactDOM.render. Make this change in index.js

import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
    return (
        <div>
            <p>Now I can render any React component on any DOM node I want using ReactDOM.render</p>
        </div>
    )
}

export default App;





