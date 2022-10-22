import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import GitHub_Stats from './Components/GitHub_Stats';
import Home from './Components/Home';
import Nav from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

function App() {
	return (
		<>
			<Nav />
			<Home />
			<About />
			<Skills />
			<Experience />
			<Projects />
			<GitHub_Stats />
			<Contact />
		</>
	);
}

export default App;
