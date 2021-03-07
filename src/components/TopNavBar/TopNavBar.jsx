import React from 'react';
import "./styles.css"

const TopNavBar = () => {
    return <section className="top-navbar">
        <section className="logo">
            <h2>Todolist</h2>
        </section>
        <section className="navbar">
            <nav>
                <ul>
                    <li id="home-page">Home</li>
                    <li id="mytasks-page">My Tasks</li>
                    <li id="about-page">About</li>
                </ul>
            </nav>
        </section>
    </section>
}

export default TopNavBar