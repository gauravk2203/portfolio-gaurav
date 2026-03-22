import { Hero } from './Components/Hero';
import { About } from './Components/About.jsx';
import { Projects } from './Components/Projects.jsx';
import { Contact } from './Components/Contact.jsx';

function App() {
  return (
    <main className="bg-white text-gray-900 font-sans overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;