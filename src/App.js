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
			<About title='About' subtitle={'dummyText'} dark={true} id='About' />
			<Skills title='Skills' subtitle={'dummyText'} dark={true} id='Skills' />
			<Experience
				title='Experience'
				subtitle={'dummyText'}
				dark={true}
				id='Experience'
			/>
			<Projects
				title='Projects'
				subtitle={'dummyText'}
				dark={true}
				id='Projects'
			/>
		</>
	);
}

export default App;
