import React, { Component } from "react";
import icon from '../icon.png';
import Links from "./Links";

export default class Home extends Component {
    render() {
        return (
            <header className="header">
                <div className="header-container">
                    <h1 className="mainHeader">Van Darkholme</h1>
                </div>

                <section>
                    <div className="image-container">
                        <img src={icon} alt="icon"/>
                    </div>
                </section>

                <section id="links">
                    <h2>Links</h2>
                    <ul>
                        <li><a href="https://www.twitch.tv/vansamaofficial" target="_blank" rel="noreferrer">Twitch channel</a></li>
                        <li><a href="https://www.instagram.com/vansamaofficial/" target="_blank" rel="noreferrer">Instagram</a></li>
                        <li><a href="https://linktr.ee/vansamaofficial" target="_blank" rel="noreferrer">Linktree</a></li>
                    </ul>
                </section>
            </header>
        );
    };
}