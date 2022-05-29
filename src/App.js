import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from './components/Logo'
import { Home } from "./pages/Home";
import { Router } from "@reach/router";
import { Detail } from "./pages/Detail";
import { NavBar } from "./components/Navbar";

export const App = () => {
    return (
    <div>
        <GlobalStyle />
        <Logo />
        <Router>
            <Home path='/' />
            <Home path='/pet/:id' />
            <Detail path='/detail/:detailID' />
        </Router>
        <NavBar />
    </div>
    )
}