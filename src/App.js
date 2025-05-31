import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import AboutMe from './AboutMe';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contacts';

function App() {
  return (
    <div>
      <Navbar />
      <div
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/background_1.jpg)`,
        }}
      >

        <div className="absolute bottom-10 left-10 p-6 md:p-8 bg-opacity-90 shadow-lg z-10 max-w-4xl w-full md:w-auto flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* Profile Image on the Left */}
          <img
            src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
            alt="Vishakha Mistry"
            className="w-80 h-100 object-cover shadow-md"
          />

          {/* Text on the Right */}
          <div className="text-center md:text-left">
            <p className="text-black text-xl md:text-2xl">Hi, there!</p>
            <h1 className="text-black text-3xl md:text-5xl font-bold mb-2">I am</h1>
            <h1 className="text-black text-3xl md:text-5xl font-bold mb-2">Vishakha</h1>
            <h1 className="text-black text-3xl md:text-5xl font-bold mb-2">Mistry</h1>
          </div>
        </div>

      </div>

      {/* About Me Section */}
      <AboutMe />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
