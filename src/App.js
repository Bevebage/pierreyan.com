import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Transcript from './components/Transcript';

function App() {
  const routes = [
    ['/about', <About />],
    ['/projects', <Projects />],
    ['/experience', <Experience />],
    ['/contact', <Contact />],
    ['/resume', <Resume />],
    ['/transcript', <Transcript />]
  ]

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        {routes.map((route, i) => (
          <Route path={route[0]} element={route[1]} />
        ))}
      </Route>
    </Routes>
    </>
  )
}

export default App;
