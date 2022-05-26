import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Activity from '../Pages/Activity';
import Biography from '../Pages/Biography';
import Career from '../Pages/Career';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="menu">
                    <ul className="menu-container">
                        <li><a href="/">Home</a></li>
                        <li><a href="/biography">Biography</a></li>
                        <li><a href="/career">Career</a></li>
                        <li><a href="/activity">Activity in Twitch</a></li>
                    </ul>
                </nav>

                <Router>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/biography' element={<Biography />} />
                        <Route path='/career' element={<Career />} />
                        <Route path='/activity' element={<Activity />} />
                    </Routes>
                </Router>
            </div>
        );
    };
}