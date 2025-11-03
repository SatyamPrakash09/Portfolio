import React from 'react';
import './App.css';
// import { Link } from 'react-router-dom' 

function Projects() {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-10 col-md-6 col-lg-4">
          <div className="project-card  shadow-lg border-0">
            <img
              src="https://socialify.git.ci/SatyamPrakash09/Pygame/image?custom_description=Portfolio+Web+Made+In+React&description=1&font=Source+Code+Pro&name=1&owner=1&pattern=Circuit+Board&theme=Dark"
              alt="Project 1"
              className="card-img-top project_image"
            />
            <div className="card-body  text-center">
              <h5 className="card-title">Pygame</h5>
              <p className="card-text text-muted">
                A small collection of experimental and educational Python games made with Pygame!
              </p>
              <div className="card-button">
                <a href="https://github.com/SatyamPrakash09/Pygame" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-10 col-md-6 col-lg-4">
          <div className="project-card shadow-lg border-0">
            <img
              src="https://camo.githubusercontent.com/a38c8bbb4b993193599e52edf42885c1ddb78c927106964b28d646af3490e144/68747470733a2f2f736f6369616c6966792e6769742e63692f53617479616d5072616b61736830392f54726176656c6c657242756464792f696d6167653f637573746f6d5f6465736372697074696f6e3d412b736d6172742b41492d706f77657265642b74726176656c2b617373697374616e742b6275696c742b7573696e672b47656d696e692b666f722b6e61747572616c2b6c616e67756167652b756e6465727374616e64696e672b616e642b47726164696f2b666f722b612b736c65656b2532432b696e7465726163746976652b757365722b696e746572666163652e26637573746f6d5f6c616e67756167653d507974686f6e266465736372697074696f6e3d3126666f6e743d536f757263652b436f64652b50726f266c616e67756167653d31266e616d653d31267468656d653d4461726b"
              alt="Project 1"
              className="card-img-top project_image"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Traveler Buddy</h5>
              <p className="card-text text-muted">
                A smart AI-powered travel assistant built using Gemini for natural language understanding and Gradio for a sleek, interactive user interface.
              </p>
              <div className="card-button">
                <a href="https://github.com/SatyamPrakash09/Traveller-Buddy" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open</a>
              </div>              
            </div>
          </div>
        </div>
        <div className="col-10 col-md-6 col-lg-4">
          <div className="project-card shadow-lg border-0">
            <img
              src="https://socialify.git.ci/SatyamPrakash09/Image_blur_and_edge_detection/image?language=1&name=1&owner=1&pattern=Plus&theme=Dark"
              alt="Project 1"
              className="card-img-top project_image"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Image Edge detector and Image Blur </h5>
              <p className="card-text">
                A Python project to apply image blurring and edge detection filters to images using the Pillow (PIL) library. This tool allows you to download images from URLs, apply filters, and save the results with timestamped filenames.
              </p>
              <div className="card-button">
                <a href="https://github.com/SatyamPrakash09/Image_blur_and_edge_detection" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Open</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
