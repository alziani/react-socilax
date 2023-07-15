import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import "./App.css";
import Companies from "./components/companies/Companies";
import Resedencies from "./components/resedencies/Resedencies";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/getStarted/GetStarted";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Resedencies />
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
}

export default App;
