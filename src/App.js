import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import './App.css'
import Companies from './components/companies/Companies';
import Resedencies from './components/resedencies/Resedencies';

function App() {
  return (
    <div className="App">
      <div>
        <div className='white-gradient' />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Resedencies/>
    </div>
  );
}

export default App;
