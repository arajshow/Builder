import './App.css';
import BodyComponent from './components/BodySection/BodyComponent';
import Footer from './components/core/Footer';
import Navbar from './components/core/Navbar';

function App() {
  return (
    <div className="w-screen min-h-screen bg-whiteBg text-white flex flex-col font-inter">
      <Navbar />
      <BodyComponent />
      <Footer />                   
    </div>
  );
}

export default App;
