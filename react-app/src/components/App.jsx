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
                        <div className="feature-image">
                            <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=500" alt="New Arrivals" />
                        </div>
                        <div className="feature-content">
                            <h3>New Arrivals</h3>
                            <p>Fresh styles for the season ahead</p>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-image">
                            <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500" alt="Trending" />
                        </div>
                        <div className="feature-content">
                            <h3>Trending</h3>
                            <p>What's hot in fashion right now</p>
                        </div>
                    </div>
                    <div className="feature-card">
                        <div className="feature-image">
                            <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=500" alt="Special Offers" />
                        </div>
                        <div className="feature-content">
                            <h3>Special Offers</h3>
                            <p>Exclusive collection with premium quality</p>
                        </div>
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