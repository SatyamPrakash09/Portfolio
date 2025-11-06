import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import Footer from './footer.js';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Projects from './Projects.js';
import { Analytics } from "@vercel/analytics/react"



function App() {
  return (
    <>
        <Navbar />
        <section id="home-section">
          <Home/> 
        </section>

        <section id="project-section">
          <Projects/>
        </section>
        <Analytics/>
        <Footer />
    </>

  );
}

export default App;
