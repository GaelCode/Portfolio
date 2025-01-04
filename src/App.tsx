import { Routes, Route } from 'react-router-dom';
import Accueil from './accueil/accueil';
import About from './About/About';
import Projects from './Projects/Projects';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
};

export default App;
