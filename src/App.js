import React from 'react';
import NavBar from "./Components/Navbar";
import {StylesProvider} from "@material-ui/core/styles";

function App() {
    return (
        <div className="App">
            <StylesProvider injectFirst>
                <NavBar/>
            </StylesProvider>
        </div>
    );
}

export default App;
