import React from 'react';
import './App.css';

function Home() {
  return (
    <div className="home mb-4 mt-4">
      <div className="profile-card container">
        <div className="row align-items-center">
          <div className="col-md-4 text-center">
            <img
              src="https://media.licdn.com/dms/image/v2/D5603AQGCYmIR3dqgRQ/profile-displayphoto-scale_400_400/B56ZpacQSnJsAg-/0/1762453949130?e=1764201600&v=beta&t=zHy0hkmmySRuKfqpO_WXY8MOUPCjv6AJBgyH-n3DWd0"
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
          <div className="bottom">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        
              {/* Right side - Social Icons */}
              <div className="d-flex justify-content-center m-auto justify-content-between g-3">
                <a href="https://github.com/SatyamPrakash09" target="_blank"  rel='noreferrer' className="text-light me-3">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/satyamprakash09/" target="_blank"  rel='noreferrer' className="text-light me-3">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/prakash_satyam_06/"  target="_blank" rel='noreferrer' className="text-light me-3">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://x.com/SatyamPrkash09" target ="_blank"  rel='noreferrer' className="text-light">
                  <i className="bi bi-twitter-x"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
