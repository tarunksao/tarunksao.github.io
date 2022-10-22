import './App.css';
import About from './Components/About';
import Experience from './Components/Experience';
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
		</>
	);
}

export default App;
