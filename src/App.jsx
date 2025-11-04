import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Hero />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
