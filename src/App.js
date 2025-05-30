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

      {/* Hero Section */}
      {/* <div
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/background.jpg')",
        }}
      >
        <div className="text-center bg-black bg-opacity-60 p-8 rounded-2xl shadow-lg">
          <h1 className="text-white text-5xl font-bold mb-4">Vishakha</h1>
          <p className="text-white text-xl">Software Engineer & Master’s Student</p>
        </div>
      </div> */}
      <div
        className="h-screen w-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('./images/background_1.jpg')",
        }}
      >
        <div className="absolute bottom-10 left-10 p-6 md:p-8 bg-opacity-90 shadow-lg z-10 max-w-4xl w-full md:w-auto flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          {/* Profile Image on the Left */}
          <img
            src="./images/profile.jpg"
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
