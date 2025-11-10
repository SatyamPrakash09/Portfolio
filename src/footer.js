import React from 'react';
import './Footer.css'
import './App.css'

function Footer() {
  return (
    <footer className="bg-none text-light py-2 mt-5">
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
    </footer>
  );
}

export default Footer;
