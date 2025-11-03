import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="home">
      <div className="profile-card container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQEbtEUbqnkEew/profile-displayphoto-scale_400_400/B56ZnZ8oyDJwAg-/0/1760298177280?e=1763596800&v=beta&t=uZ6K8odSITxd7sXbPjiGxkO6S4mp8LKxHzTcdbbXiyA"
              alt="profile"
              className="profile-img img-fluid rounded-circle"
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
