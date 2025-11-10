import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

import Footer from './footer.js';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Projects from './Projects.js';

function App() {
  return (
    <>
      <div className='bg-dark'>

          <Navbar />
          <section id="home-section">
            <Home/> 
          </section>

          <section id="project-section">
            <Projects/>
          </section>
          <section id="contact">
            <Footer />
          </section>
      </div>
    </>

  );
}

export default App;
