import React from 'react';
import './App.css';
import { Link } from 'react-router-dom' 

function Projects() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="project-card shadow-lg border-0">
            <img
              src="https://images.pexels.com/photos/2469234/pexels-photo-2469234.jpeg"
              alt="Project 1"
              className="card-img-top project_image"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text text-muted">
                A short description about your awesome project.
              </p>
              <div className="card-button">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 col-md-6 col-lg-4">
          <div className="project-card shadow-lg border-0">
            <img
              src="https://images.pexels.com/photos/2469234/pexels-photo-2469234.jpeg"
              alt="Project 1"
              className="card-img-top project_image"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text text-muted">
                A short description about your awesome project.
              </p>
              <div className="card-button">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open</a>
              </div>              
            </div>
          </div>
        </div>
        <div className="col-10 col-md-6 col-lg-4">
          <div className="project-card shadow-lg border-0">
            <img
              src="https://images.pexels.com/photos/2469234/pexels-photo-2469234.jpeg"
              alt="Project 1"
              className="card-img-top project_image"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Project 1</h5>
              <p className="card-text">
                A short description about your awesome project.
              </p>
              <div className="card-button">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
