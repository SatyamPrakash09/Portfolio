import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="home">
      <div className="profile-card container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg"
              alt="profile"
              className="profile-img img-fluid rounded-4"
            />
          </div>
          <div className="col-md-8 text-light">
            <h2 className="fw-bold mb-2">Satyam Prakash</h2>
            <h5 className="text-info mb-2">About Me:</h5>
            <p className="lead">
              👋 Hi, I’m Satyam Prakash, a CSE student at Nxtwave Institute of Advance Technology  a strong interest in AI/ML, IoT, and coding smart solutions.
              <br />
              I love turning ideas into projects—whether it’s building web apps,  integrating AI into real-world tools.
              <br />
              🔧 Tech I enjoy: <br />
              AI/ML • Python • Web Dev 
              <br />
              Always learning, building, and looking to connect with like-minded tech enthusiasts. Let’s innovate together!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
