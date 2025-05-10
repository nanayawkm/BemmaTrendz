import React from 'react';
import './styles/App.css';

const App = () => {
    return (
        <div className="App">
            <header className="header">
                <h1>Welcome to BemmaTrendz</h1>
                <nav className="nav">
                    <a href="#" className="nav-link">Home</a>
                    <a href="#" className="nav-link">About</a>
                    <a href="#" className="nav-link">Contact</a>
                </nav>
            </header>
            
            <main className="main-content">
                <section className="hero">
                    <h2>Your Fashion Destination</h2>
                    <p>Discover the latest trends in fashion and style</p>
                    <button className="cta-button">Shop Now</button>
                </section>

                <section className="features">
                    <div className="feature-card">
                        <h3>New Arrivals</h3>
                        <p>Check out our latest collection</p>
                    </div>
                    <div className="feature-card">
                        <h3>Trending</h3>
                        <p>See what's popular this season</p>
                    </div>
                    <div className="feature-card">
                        <h3>Special Offers</h3>
                        <p>Exclusive deals just for you</p>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2024 BemmaTrendz. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default App;