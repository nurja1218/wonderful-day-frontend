import React from 'react';
import styles from './mainPage.module.css';

export default function MainPage() {
    return (
        <div className="MainPage">
            <header className="header">
                <nav className={`${styles.Header}`}>
                    <a className="navbar-brand" href="/">My Website</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="main">
                <section className="hero">
                    <div className="container">
                        <h1 className="hero-title">Welcome to My Website</h1>
                        <p className="hero-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, libero vel ullamcorper commodo, dui leo iaculis lorem, ut lobortis velit velit quis ex.</p>
                        <a href="/about" className="btn btn-primary">Learn More</a>
                    </div>
                </section>
                <section className="features">
                    <div className="container">
                        <h2 className="features-title">Our Features</h2>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="feature">
                                    <i className="fa fa-code feature-icon"></i>
                                    <h3 className="feature-title">Clean Code</h3>
                                    <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, libero vel ullamcorper commodo, dui leo iaculis lorem, ut lobortis velit velit quis ex.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature">
                                    <i className="fa fa-cogs feature-icon"></i>
                                    <h3 className="feature-title">Easy to Use</h3>
                                    <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, libero vel ullamcorper commodo, dui leo iaculis lorem, ut lobortis velit velit quis ex.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="feature">
                                    <i className="fa fa-rocket feature-icon"></i>
                                    <h3 className="feature-title">Fast Performance</h3>
                                    <p className="feature-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse euismod, libero vel ullamcorper commodo, dui leo iaculis lorem, ut lobortis velit velit quis ex.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="footer">
                <div className="container">
                    <p className="text-center">&copy; 2023 My Website. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
