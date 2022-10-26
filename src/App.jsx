import './App.css'
import Content from './components/Content';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';

function App() {

  return (
    <div className="bg-[url('./img/trees.jpg')] bg-cover h-screen w-screen font-bold text-4xl text-black">
      <NavBar />
      <Hero />
      <Content />
      <Footer />
    </div>
  );
}

export default App
