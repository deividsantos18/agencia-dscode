import logo from './images/logo.png';
import './App.css';
import Header from './components/header.js';
import Main from './components/main.js'
import imgPrimary from './images/img-primary.png'
import Skills from './components/skills.js'
import About from './components/about.js';
import imgSecundary from './images/img-secundary.png'
import Portfolio from './components/portfolio.js';
import project01 from './images/project-01.jpg'
import project02 from './images/project-02.jpg'
import project03 from './images/project-03.jpg'
import Footer from './components/footer.js'

function App() {
  return (
    <div className='site'>
      <Header logo={logo}/>
      <Main imgPrimary={imgPrimary}/>
      <Skills />
      <About imgSecundary={imgSecundary}/>
      <Portfolio project01={project01} project02={project02} project03={project03}/>
      <Footer logo={logo} />
    </div>
  );
}

export default App;
